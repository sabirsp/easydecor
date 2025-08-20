import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import CRM from './components/CRM';
import AdminGuide from './components/AdminGuide';
import PageLoader from './components/animations/PageLoader';
import { ScrollReveal, FadeInUp } from './components/animations/ScrollAnimations';

export default function App() {
  const [showCRM, setShowCRM] = useState(false);
  const [showAdminAccess, setShowAdminAccess] = useState(false);
  const [showAdminGuide, setShowAdminGuide] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);

  // Slower initial loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsContentReady(true), 500);
    }, 4000); // Increased from 2500ms to 4000ms

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Keyboard shortcuts for admin access (completely hidden from regular users)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+Shift+L: Direct CRM access
      if (e.ctrlKey && e.shiftKey && e.key === 'L') {
        e.preventDefault();
        setShowCRM(true);
      }
      // Ctrl+Shift+A: Toggle admin panel
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setShowAdminAccess(!showAdminAccess);
      }
      // Ctrl+Shift+H: Show help/guide
      if (e.ctrlKey && e.shiftKey && e.key === 'H') {
        e.preventDefault();
        setShowAdminGuide(true);
      }
      // Ctrl+Shift+O: Show owner guide (first time setup)
      if (e.ctrlKey && e.shiftKey && e.key === 'O') {
        e.preventDefault();
        setShowAdminGuide(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showAdminAccess]);

  // Scroll-to-top on load
  useEffect(() => {
    if (isContentReady) {
      window.scrollTo(0, 0);
    }
  }, [isContentReady]);

  return (
    <>
      {/* SEO Content - Hidden from users but visible to search engines */}
      <div className="sr-only">
        <h1>EasyDecor - Premium Interior Design Services in Kolkata, India</h1>
        <p>Leading interior designers in Kolkata offering affordable luxury home decor, furniture design, and space renovation services across Newtown, Salt Lake, Park Street, and all areas of Kolkata.</p>
        <div>Interior Design Kolkata, Home Decor Kolkata, Furniture Design Kolkata, Space Planning Kolkata, Renovation Services Kolkata</div>
      </div>

      {/* Page Loader - Slower duration */}
      <PageLoader 
        isLoading={isLoading} 
        onComplete={() => setIsContentReady(true)}
        duration={4000} // Increased from 2500ms to 4000ms
      />

      {/* Main Content - Including Footer */}
      <AnimatePresence>
        {isContentReady && (
          <motion.div 
            className="min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }} // Slower fade-in
          >
            {/* Header with slide-down animation */}
            <FadeInUp delay={0.3}>
              <Header />
            </FadeInUp>

            <main>
              {/* Hero Section */}
              <ScrollReveal direction="fade" threshold={0.2} duration={1.0}> {/* Slower duration */}
                <Hero />
              </ScrollReveal>

              {/* About Section */}
              <ScrollReveal direction="up" delay={0.2} threshold={0.15} duration={0.8}>
                <About />
              </ScrollReveal>

              {/* Services Section */}
              <ScrollReveal direction="up" delay={0.3} threshold={0.15} duration={0.8}>
                <Services />
              </ScrollReveal>

              {/* Portfolio Section */}
              <ScrollReveal direction="up" delay={0.2} threshold={0.1} duration={0.8}>
                <Portfolio />
              </ScrollReveal>

              {/* Testimonials Section */}
              <ScrollReveal direction="up" delay={0.2} threshold={0.15} duration={0.8}>
                <Testimonials />
              </ScrollReveal>

              {/* Call to Action Section */}
              <ScrollReveal direction="scale" delay={0.3} threshold={0.2} duration={0.8}>
                <CallToAction />
              </ScrollReveal>
            </main>

            {/* Footer - Now inside main content to prevent background issues */}
            <ScrollReveal direction="up" delay={0.1} threshold={0.1} duration={0.6}>
              <Footer />
            </ScrollReveal>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CRM Dashboard - Only accessible via keyboard shortcuts */}
      <AnimatePresence>
        {showCRM && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <CRM isOpen={showCRM} onClose={() => setShowCRM(false)} />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Admin Guide - Only accessible via keyboard shortcuts */}
      <AnimatePresence>
        {showAdminGuide && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <AdminGuide 
              isOpen={showAdminGuide} 
              onClose={() => setShowAdminGuide(false)}
              onOpenCRM={() => setShowCRM(true)}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Admin access controls - ONLY visible when activated by keyboard shortcut */}
      <AnimatePresence>
        {showAdminAccess && (
          <motion.div
            className="fixed bottom-4 right-4 z-40 flex flex-col gap-2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          >
            {/* Admin Help Guide */}
            <motion.button
              onClick={() => setShowAdminGuide(true)}
              className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-200"
              title="Admin Help Guide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.button>
            
            {/* CRM Dashboard */}
            <motion.button
              onClick={() => setShowCRM(true)}
              className="bg-muted-gold text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-200"
              title="Open CRM Dashboard"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-deep-green text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                  CRM
                </span>
              </div>
            </motion.button>

            {/* Lead counter */}
            {(() => {
              const leads = JSON.parse(localStorage.getItem('easydecor_leads') || '[]');
              return leads.length > 0 ? (
                <motion.button
                  onClick={() => setShowCRM(true)}
                  className="bg-deep-green text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-200"
                  title={`${leads.length} New Lead${leads.length !== 1 ? 's' : ''} - Click to View`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
                >
                  <div className="relative">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <motion.span 
                      className="absolute -top-2 -right-2 bg-muted-gold text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      {leads.length}
                    </motion.span>
                  </div>
                </motion.button>
              ) : null;
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin instructions panel - Only visible when admin mode is activated */}
      <AnimatePresence>
        {showAdminAccess && (
          <motion.div
            className="fixed bottom-4 left-4 z-30 bg-white p-4 rounded-lg shadow-lg border max-w-xs"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          >
            <h4 className="font-medium text-charcoal mb-2">Admin Panel Active</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• <strong>Blue:</strong> Help & Instructions</p>
              <p>• <strong>Gold:</strong> CRM Dashboard</p>
              <p>• <strong>Green:</strong> Lead notifications</p>
              <hr className="my-2" />
              <p className="text-xs">Shortcuts:</p>
              <p className="text-xs">• Ctrl+Shift+L: Quick CRM</p>
              <p className="text-xs">• Ctrl+Shift+H: Help guide</p>
              <p className="text-xs">• Ctrl+Shift+A: Toggle panel</p>
            </div>
            <motion.button
              onClick={() => setShowAdminAccess(false)}
              className="mt-3 text-xs text-muted-gold hover:text-deep-green transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hide Admin Panel
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}