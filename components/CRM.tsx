import { useState, useEffect } from 'react';
import { X, Phone, Mail, Calendar, User, DollarSign, MessageSquare, Download, Trash2, Eye, EyeOff } from 'lucide-react';

interface Lead {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  timestamp: string;
}

interface CRMProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CRM({ isOpen, onClose }: CRMProps) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  useEffect(() => {
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen]);

  const loadLeads = () => {
    const storedLeads = JSON.parse(localStorage.getItem('easydecor_leads') || '[]');
    setLeads(storedLeads);
  };

  const deleteLead = (index: number) => {
    const updatedLeads = leads.filter((_, i) => i !== index);
    setLeads(updatedLeads);
    localStorage.setItem('easydecor_leads', JSON.stringify(updatedLeads));
    if (selectedLead && leads[index] === selectedLead) {
      setSelectedLead(null);
    }
  };

  const exportLeads = () => {
    const csvContent = [
      ['Name', 'Email', 'Phone', 'Project Type', 'Budget', 'Message', 'Date'],
      ...leads.map(lead => [
        lead.name,
        lead.email,
        lead.phone,
        lead.projectType || 'Not specified',
        lead.budget || 'Not specified',
        lead.message.replace(/,/g, ';'), // Replace commas to avoid CSV issues
        new Date(lead.timestamp).toLocaleDateString()
      ])
    ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `easydecor_leads_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const formatProjectType = (type: string) => {
    return type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const formatBudget = (budget: string) => {
    const budgetMap: { [key: string]: string } = {
      'under-5': 'Under ₹5 Lakhs',
      '5-10': '₹5 - 10 Lakhs',
      '10-20': '₹10 - 20 Lakhs',
      '20-50': '₹20 - 50 Lakhs',
      'above-50': 'Above ₹50 Lakhs'
    };
    return budgetMap[budget] || budget;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-2xl font-serif text-charcoal">Lead Management</h2>
              <p className="text-muted-foreground">Manage your consultation requests</p>
            </div>
            <div className="flex items-center space-x-3">
              {leads.length > 0 && (
                <button
                  onClick={exportLeads}
                  className="inline-flex items-center px-4 py-2 bg-muted-gold text-white rounded-lg hover:bg-opacity-90 transition-colors duration-200"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex h-[calc(90vh-100px)]">
            {/* Leads List */}
            <div className="w-1/2 border-r border-gray-200 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-medium text-charcoal">
                    All Leads ({leads.length})
                  </h3>
                  <button
                    onClick={loadLeads}
                    className="text-sm text-muted-gold hover:text-deep-green transition-colors"
                  >
                    Refresh
                  </button>
                </div>

                {leads.length === 0 ? (
                  <div className="text-center py-12">
                    <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No leads yet</p>
                    <p className="text-sm text-gray-400">Consultation requests will appear here</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {leads.map((lead, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                          selectedLead === lead
                            ? 'border-muted-gold bg-warm-beige'
                            : 'border-gray-200 hover:border-muted-gold hover:bg-gray-50'
                        }`}
                        onClick={() => setSelectedLead(lead)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-charcoal">{lead.name}</h4>
                            <p className="text-sm text-muted-foreground">{lead.email}</p>
                            <p className="text-sm text-muted-foreground">{lead.phone}</p>
                            {lead.projectType && (
                              <p className="text-xs text-muted-gold mt-1">
                                {formatProjectType(lead.projectType)}
                              </p>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-400">
                              {new Date(lead.timestamp).toLocaleDateString()}
                            </p>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteLead(index);
                              }}
                              className="mt-2 p-1 text-red-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Lead Details */}
            <div className="w-1/2 overflow-y-auto">
              {selectedLead ? (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-medium text-charcoal">Lead Details</h3>
                    <button
                      onClick={() => setSelectedLead(null)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                      <EyeOff className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Personal Info */}
                    <div>
                      <h4 className="font-medium text-charcoal mb-3 flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Personal Information
                      </h4>
                      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                        <div>
                          <label className="text-sm font-medium text-gray-600">Name</label>
                          <p className="text-charcoal">{selectedLead.name}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600">Email</label>
                          <p className="text-charcoal">
                            <a href={`mailto:${selectedLead.email}`} className="hover:text-deep-green transition-colors">
                              {selectedLead.email}
                            </a>
                          </p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600">Phone</label>
                          <p className="text-charcoal">
                            <a href={`tel:${selectedLead.phone}`} className="hover:text-deep-green transition-colors">
                              {selectedLead.phone}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div>
                      <h4 className="font-medium text-charcoal mb-3 flex items-center">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Project Information
                      </h4>
                      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                        <div>
                          <label className="text-sm font-medium text-gray-600">Project Type</label>
                          <p className="text-charcoal">
                            {selectedLead.projectType ? formatProjectType(selectedLead.projectType) : 'Not specified'}
                          </p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600">Budget Range</label>
                          <p className="text-charcoal">
                            {selectedLead.budget ? formatBudget(selectedLead.budget) : 'Not specified'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    {selectedLead.message && (
                      <div>
                        <h4 className="font-medium text-charcoal mb-3 flex items-center">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Message
                        </h4>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-charcoal leading-relaxed">{selectedLead.message}</p>
                        </div>
                      </div>
                    )}

                    {/* Timestamp */}
                    <div>
                      <h4 className="font-medium text-charcoal mb-3 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Submission Details
                      </h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-charcoal">
                          {new Date(selectedLead.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex space-x-3 pt-6 border-t border-gray-200">
                      <a
                        href={`mailto:${selectedLead.email}?subject=Re: Your Interior Design Consultation Request&body=Dear ${selectedLead.name},%0A%0AThank you for your interest in EasyDecor Studio. I would like to schedule a consultation to discuss your project.%0A%0ABest regards,%0AEasyDecor Studio Team`}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-deep-green text-white rounded-lg hover:bg-opacity-90 transition-colors duration-200"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </a>
                      <a
                        href={`tel:${selectedLead.phone}`}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-muted-gold text-white rounded-lg hover:bg-opacity-90 transition-colors duration-200"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <Eye className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Select a lead to view details</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}