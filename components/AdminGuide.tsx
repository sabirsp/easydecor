import { useState } from 'react';
import { X, Users, Download, Mail, Phone, Eye, Keyboard, MousePointer, FileText, AlertCircle, CheckCircle, Info, Lock } from 'lucide-react';

interface AdminGuideProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCRM: () => void;
}

export default function AdminGuide({ isOpen, onClose, onOpenCRM }: AdminGuideProps) {
  if (!isOpen) return null;

  const leadCount = JSON.parse(localStorage.getItem('easydecor_leads') || '[]').length;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-2xl font-serif text-charcoal">EasyDecor Website Admin Guide</h2>
              <p className="text-muted-foreground">Private access for website owners only</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 space-y-8">
            {/* Privacy Notice */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Lock className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-green-800">Admin Access - Private & Secure</h4>
                  <div className="text-sm text-green-700 mt-2">
                    <p>✓ These admin controls are completely hidden from website visitors</p>
                    <p>✓ Only accessible through keyboard shortcuts known to you</p>
                    <p>✓ No visible buttons or menus for regular users</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Status */}
            <div className="bg-warm-beige rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-muted-gold rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-charcoal">Lead Management Status</h3>
                  <p className="text-sm text-muted-foreground">Your consultation request system</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-deep-green" />
                    <span className="font-medium">Total Leads</span>
                  </div>
                  <p className="text-2xl font-bold text-charcoal mt-1">{leadCount}</p>
                  <p className="text-xs text-muted-foreground mt-1">Consultation requests</p>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-muted-gold" />
                    <span className="font-medium">Form Status</span>
                  </div>
                  <p className="text-sm text-deep-green mt-1">✓ Active & Capturing</p>
                  <p className="text-xs text-muted-foreground mt-1">Ready to receive leads</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Lock className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">Admin Access</span>
                  </div>
                  <p className="text-sm text-blue-600 mt-1">✓ Secure & Hidden</p>
                  <p className="text-xs text-muted-foreground mt-1">Invisible to visitors</p>
                </div>
              </div>

              {leadCount > 0 && (
                <button
                  onClick={() => {
                    onOpenCRM();
                    onClose();
                  }}
                  className="mt-4 w-full bg-deep-green text-white px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium"
                >
                  View All {leadCount} Lead{leadCount !== 1 ? 's' : ''} →
                </button>
              )}
            </div>

            {/* Quick Access Methods */}
            <div>
              <h3 className="text-xl font-medium text-charcoal mb-4 flex items-center">
                <Keyboard className="w-5 h-5 mr-2" />
                Secret Keyboard Shortcuts (Save These!)
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {/* Primary Access Methods */}
                <div className="border-2 border-muted-gold rounded-lg p-4 bg-warm-beige">
                  <div className="flex items-center space-x-2 mb-3">
                    <Eye className="w-5 h-5 text-muted-gold" />
                    <span className="font-medium">View Leads (Most Important)</span>
                  </div>
                  <div className="bg-white rounded p-3 mb-2">
                    <code className="text-lg font-mono font-bold">Ctrl + Shift + L</code>
                  </div>
                  <p className="text-sm text-muted-foreground">Instantly open CRM to see all consultation requests. Use this most often!</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <MousePointer className="w-5 h-5 text-deep-green" />
                    <span className="font-medium">Show Admin Panel</span>
                  </div>
                  <div className="bg-gray-50 rounded p-3 mb-2">
                    <code className="text-sm font-mono">Ctrl + Shift + A</code>
                  </div>
                  <p className="text-sm text-muted-foreground">Shows admin buttons on screen for easier access.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">Help Guide</span>
                  </div>
                  <div className="bg-gray-50 rounded p-3 mb-2">
                    <code className="text-sm font-mono">Ctrl + Shift + H</code>
                  </div>
                  <p className="text-sm text-muted-foreground">Opens this help guide anytime you need it.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Users className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Owner Setup</span>
                  </div>
                  <div className="bg-gray-50 rounded p-3 mb-2">
                    <code className="text-sm font-mono">Ctrl + Shift + O</code>
                  </div>
                  <p className="text-sm text-muted-foreground">Shows this guide for first-time setup.</p>
                </div>
              </div>
            </div>

            {/* What You Can Do */}
            <div>
              <h3 className="text-xl font-medium text-charcoal mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Lead Management Features
              </h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <Eye className="w-8 h-8 text-muted-gold mb-3" />
                  <h4 className="font-medium mb-2">View Lead Details</h4>
                  <p className="text-sm text-muted-foreground">See complete information: name, contact details, project type, budget range, and personal messages from potential clients.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <Download className="w-8 h-8 text-deep-green mb-3" />
                  <h4 className="font-medium mb-2">Export to CSV</h4>
                  <p className="text-sm text-muted-foreground">Download all leads as a spreadsheet for backup or importing into other CRM tools like Excel or Google Sheets.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex space-x-1 mb-3">
                    <Mail className="w-4 h-4 text-muted-gold" />
                    <Phone className="w-4 h-4 text-deep-green" />
                  </div>
                  <h4 className="font-medium mb-2">One-Click Contact</h4>
                  <p className="text-sm text-muted-foreground">Directly email or call clients from the CRM with pre-filled templates mentioning their specific project needs.</p>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="space-y-4">
              {/* Current Limitations */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-800">Current System (Demo Version)</h4>
                    <div className="text-sm text-yellow-700 mt-2 space-y-1">
                      <p>• <strong>Browser storage only:</strong> Leads saved in this browser's memory</p>
                      <p>• <strong>Single device access:</strong> Only accessible from this computer</p>
                      <p>• <strong>Manual checking:</strong> No automatic email notifications</p>
                      <p>• <strong>Data safety:</strong> Export regularly to avoid data loss</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-800">Recommended Upgrades for Production</h4>
                    <div className="text-sm text-blue-700 mt-2 space-y-1">
                      <p>• <strong>Email notifications:</strong> Get instant alerts when someone fills the form</p>
                      <p>• <strong>Cloud storage:</strong> Access leads from any device, anywhere</p>
                      <p>• <strong>Automated responses:</strong> Send thank you emails automatically</p>
                      <p>• <strong>Analytics:</strong> Track which pages generate the most leads</p>
                      <p>• <strong>CRM integration:</strong> Connect with tools like HubSpot or Salesforce</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onOpenCRM();
                  onClose();
                }}
                className="flex-1 bg-deep-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium"
              >
                {leadCount > 0 ? `View ${leadCount} Lead${leadCount !== 1 ? 's' : ''}` : 'Open CRM Dashboard'}
              </button>
              
              <button
                onClick={() => {
                  const shortcuts = `EasyDecor Admin Shortcuts:
• Ctrl + Shift + L = View Leads (Most Important)
• Ctrl + Shift + A = Show Admin Panel  
• Ctrl + Shift + H = Help Guide
• Ctrl + Shift + O = Owner Setup

Website: ${window.location.href}`;
                  navigator.clipboard.writeText(shortcuts);
                  alert('Admin shortcuts copied to clipboard! Save these safely.');
                }}
                className="flex-1 bg-muted-gold text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium"
              >
                Copy Shortcuts to Save
              </button>
            </div>

            {/* Privacy Reminder */}
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Remember:</strong> These admin features are completely invisible to your website visitors. 
                Only you know the keyboard shortcuts to access them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}