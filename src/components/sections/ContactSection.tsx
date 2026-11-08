'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle,
  Copy,
  Check,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { PERSONAL_INFO } from '@/data/content';
import { ContactFormData } from '@/types';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export function ContactSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Basic client validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        // Trigger celebratory confetti!
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.65 },
            colors: ['#D7E52A', '#D81B52', '#1F8A8A', '#F2F2EE'],
          });
        } catch {
          // Fallback if canvas confetti fails
        }
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message. Please try directly via email.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('A network error occurred. Please reach out via email directly.');
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-bg overflow-hidden">
      {/* Soft crimson glow specifically behind contact area as specified */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-accent-2/15 blur-[180px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          number="05"
          label="CONTACT"
          title="Let's Build Something Exceptional Together."
          description="Have a startup idea, high-impact freelance opportunity, or full-stack software role? Drop a message or reach out across any direct channel."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Amir-3-night Photo & Direct Contacts */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* Night Photo Card with Soft Crimson Glow & Black-and-White to Color on Hover */}
            <div className="relative group">
              {/* Crimson ambient halo behind card */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-3xl bg-accent-2/20 blur-xl opacity-75 group-hover:opacity-100 group-hover:bg-accent-2/30 transition-all duration-700 pointer-events-none"
              />

              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-surface-card border border-white/10 group-hover:border-accent-2/50 transition-colors duration-500 shadow-2xl">
                {/* Photo: amir-3-night.webp with B&W to Color transition */}
                <Image
                  src="/images/amir-3-night.webp"
                  alt="Amir Hamja - Available for Conversations"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-center grayscale contrast-[108%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Soft gradient bottom scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-80" />

                {/* Overlay card content */}
                <div className="absolute bottom-6 left-6 right-6 z-10 p-4 rounded-2xl bg-bg/85 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-heading font-bold text-sm text-text">
                      Amir Hamja
                    </span>
                    <span className="font-mono text-[10px] text-accent-2 font-semibold uppercase tracking-wider">
                      Open to Collaborate
                    </span>
                  </div>
                  <p className="text-xs text-text-muted font-sans leading-relaxed">
                    Hover to view in full color &bull; Ready to bring engineering horsepower to your vision.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Channel Cards (Email, Phone, WhatsApp) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-surface/70 border border-white/5 hover:border-accent/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] text-accent uppercase">Email</span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-text-muted hover:text-text transition-colors p-1"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-accent" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-heading text-xs sm:text-sm font-semibold text-text hover:text-accent transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* WhatsApp Card */}
              <div className="p-4 rounded-2xl bg-surface/70 border border-white/5 hover:border-accent/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] text-accent uppercase">WhatsApp</span>
                  <MessageSquare className="w-3.5 h-3.5 text-detail-light" />
                </div>
                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-xs sm:text-sm font-semibold text-text hover:text-accent transition-colors"
                >
                  {PERSONAL_INFO.whatsapp}
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-surface/70 border border-white/5 hover:border-accent/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] text-accent uppercase">Phone</span>
                  <Phone className="w-3.5 h-3.5 text-text-muted" />
                </div>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="font-heading text-xs sm:text-sm font-semibold text-text hover:text-accent transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>

              {/* Timezone & Location Card */}
              <div className="p-4 rounded-2xl bg-surface/70 border border-white/5 hover:border-accent/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] text-accent uppercase">Location</span>
                  <MapPin className="w-3.5 h-3.5 text-accent-2" />
                </div>
                <span className="font-heading text-xs sm:text-sm font-semibold text-text block">
                  {PERSONAL_INFO.location}
                </span>
                <span className="font-mono text-[10px] text-text-muted">
                  {PERSONAL_INFO.timezone}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Validated Contact Form */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-surface-card border border-white/[0.08] shadow-2xl relative"
          >
            <h3 className="font-heading text-2xl font-bold text-text mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-text-muted font-sans mb-8">
              Fill in your details below and I will get back to you within 24 hours.
            </p>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-surface border border-accent/40 text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent mb-4">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="font-heading text-xl font-bold text-text mb-2">
                  Message Dispatched Successfully!
                </h4>
                <p className="text-text-muted text-sm max-w-md mb-6 font-sans">
                  Thank you for reaching out. Your message has been routed to my personal inbox, and I
                  will reply shortly.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ name: '', email: '', subject: '', message: '', budget: '' });
                  }}
                  className="px-6 py-2.5 rounded-full bg-accent text-bg font-mono text-xs font-semibold hover:bg-accent-hover transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs uppercase tracking-wider text-text-muted mb-2"
                    >
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text placeholder-text-dim text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs uppercase tracking-wider text-text-muted mb-2"
                    >
                      Your Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text placeholder-text-dim text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Subject field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-mono text-xs uppercase tracking-wider text-text-muted mb-2"
                    >
                      Project Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="e.g. Next.js SaaS MVP or Freelance"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text placeholder-text-dim text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>

                  {/* Budget selector (Optional) */}
                  <div>
                    <label
                      htmlFor="budget"
                      className="block font-mono text-xs uppercase tracking-wider text-text-muted mb-2"
                    >
                      Budget Range (Optional)
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    >
                      <option value="">Select an estimate...</option>
                      <option value="under-1k">&lt; $1,000 (Small sprint / Consultation)</option>
                      <option value="1k-3k">$1,000 - $3,000 (MVP / Landing Experience)</option>
                      <option value="3k-10k">$3,000 - $10,000 (Full-Stack Application)</option>
                      <option value="equity">Startup Co-Founder / Equity / Advisory</option>
                    </select>
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs uppercase tracking-wider text-text-muted mb-2"
                  >
                    Your Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Describe your vision, timeline, or engineering challenge..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text placeholder-text-dim text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  />
                </div>

                {errorMessage && (
                  <p className="text-xs font-mono text-accent-2 bg-accent-2/10 p-3 rounded-lg border border-accent-2/20">
                    {errorMessage}
                  </p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-accent text-bg font-mono text-xs sm:text-sm font-semibold hover:bg-accent-hover transition-all duration-300 shadow-glow-accent disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-bg border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

