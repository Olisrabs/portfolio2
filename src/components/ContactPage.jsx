import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import { supabase } from '../lib/supabase';
import { sendEmail } from '../lib/emailjs';

function FormBanner({ type, message, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 6000);
    return () => clearTimeout(t);
  }, [onClose]);

  const isSuccess = type === 'success';
  return (
    <div className={`flex items-start gap-4 p-6 rounded-2xl border animate-fade-in ${isSuccess ? 'bg-tertiary/10 border-tertiary/30 text-tertiary' : 'bg-red-500/10 border-red-500/30 text-red-400'}`} role="alert">
      <span className="material-symbols-outlined text-2xl shrink-0">{isSuccess ? 'check_circle' : 'error'}</span>
      <div className="flex-1">
        <p className="font-label-caps tracking-widest text-sm mb-1">{isSuccess ? 'MESSAGE SENT' : 'SOMETHING WENT WRONG'}</p>
        <p className="font-body-md text-on-surface-variant text-sm">{message}</p>
      </div>
      <button onClick={onClose} className="material-symbols-outlined text-lg opacity-50 hover:opacity-100 transition-opacity cursor-pointer shrink-0">close</button>
    </div>
  );
}

export default function ContactPage() {
  const [berlinTime, setBerlinTime] = useState('10:26 PM');
  const [laTime, setLaTime] = useState('01:42 AM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const updateTimes = () => {
      try {
        const now = new Date();
        setBerlinTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit' }));
        setLaTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit' }));
      } catch (e) {}
    };
    updateTimes();
    const timer = setInterval(updateTimes, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMagneticMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - rect.left - rect.width / 2) * 0.3}px, ${(e.clientY - rect.top - rect.height / 2) * 0.3}px)`;
  };
  const handleMagneticLeave = (e) => { e.currentTarget.style.transform = 'translate(0px, 0px)'; };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setBanner(null);
    const { error } = await supabase.from('contact_inquiries').insert([{ name, email, message }]);
    setSubmitting(false);
    if (error) {
      setBanner({ type: 'error', message: 'Unable to send your message right now. Please email us directly at olisrab@gmail.com.' });
    } else {
      setBanner({ type: 'success', message: 'Your inquiry has been received. Our team will reach out within 24 business hours.' });
      // Fire-and-forget email notification via EmailJS — does not block UX
      sendEmail('contact', {
        from_name:  name,
        from_email: email,
        message,
      }).catch(() => {});
      setName(''); setEmail(''); setMessage('');
    }
  };

  return (
    <div className="relative z-10 pt-24 pb-0 w-full min-h-screen flex flex-col justify-between">
      <div>
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-40 reveal">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl max-w-4xl text-white">Get in <br /><span className="text-secondary">Touch.</span></h1>
            <div className="flex flex-col items-start md:items-end gap-4 pb-4">
              <span className="font-label-caps text-on-surface-variant">Global Availability</span>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                <span className="font-body-md text-on-surface">Open for new legacies</span>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter mb-40 reveal">
          <div className="md:col-span-8 flex flex-col justify-center">
            <span className="font-label-caps text-on-surface-variant mb-6">Inquiries</span>
            <a className="group relative overflow-hidden inline-block w-fit cursor-pointer" href="mailto:olisrab@gmail.com">
              <span className="font-headline-lg text-headline-lg-mobile md:text-headline-lg group-hover:text-secondary transition-colors duration-500 block text-white">olisrab@gmail.com</span>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-700 ease-out"></div>
            </a>
            <p className="font-body-lg text-on-surface-variant mt-10 max-w-lg">Whether you're starting a new brand legacy or need technical mastery for your next digital product, I'm ready to listen.</p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-6 mt-12 md:mt-0">
            <div className="glass-panel p-10 flex flex-col justify-between h-48 group hover:border-secondary/50 transition-colors duration-500 rounded-2xl">
              <div><span className="font-label-caps text-on-surface-variant">Lagos</span><h3 className="font-headline-lg text-3xl font-bold mt-2 text-white">{berlinTime}</h3></div>
              <span className="font-body-md text-on-surface-variant opacity-50 group-hover:opacity-100 transition-opacity">GMT+1 Timezone</span>
            </div>
            <div className="glass-panel p-10 flex flex-col justify-between h-48 group hover:border-tertiary/50 transition-colors duration-500 rounded-2xl">
              <div><span className="font-label-caps text-on-surface-variant">UK</span><h3 className="font-headline-lg text-3xl font-bold mt-2 text-white">{laTime}</h3></div>
              <span className="font-body-md text-on-surface-variant opacity-50 group-hover:opacity-100 transition-opacity">GMT+1 Timezone</span>
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-40 reveal">
          <div className="glass-panel p-8 md:p-16 rounded-[2rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 text-white">Let's create something <span className="text-secondary italic">legendary.</span></h2>
                <p className="font-body-lg text-on-surface-variant max-w-sm">Tell us about your project vision and we'll help you define the future.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="group border-b border-white/10 focus-within:border-secondary transition-colors duration-500">
                  <label className="block font-label-caps text-on-surface-variant text-[10px] uppercase mb-4">Full Name</label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Abimbola Olajide" className="w-full bg-transparent border-none p-0 pb-6 text-2xl font-body-lg text-on-surface placeholder:text-white/10 focus:ring-0 transition-all outline-none" />
                </div>
                <div className="group border-b border-white/10 focus-within:border-secondary transition-colors duration-500">
                  <label className="block font-label-caps text-on-surface-variant text-[10px] uppercase mb-4">Email Address</label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@youremail.com" className="w-full bg-transparent border-none p-0 pb-6 text-2xl font-body-lg text-on-surface placeholder:text-white/10 focus:ring-0 transition-all outline-none" />
                </div>
                <div className="group border-b border-white/10 focus-within:border-secondary transition-colors duration-500">
                  <label className="block font-label-caps text-on-surface-variant text-[10px] uppercase mb-4">Project Brief</label>
                  <textarea rows="1" required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="What are we building together?" className="w-full bg-transparent border-none p-0 pb-6 text-2xl font-body-lg text-on-surface placeholder:text-white/10 focus:ring-0 transition-all resize-none outline-none"></textarea>
                </div>
                {banner && <FormBanner type={banner.type} message={banner.message} onClose={() => setBanner(null)} />}
                <div className="pt-8">
                  <button type="submit" disabled={submitting} className="bg-[#BF40FF] text-white px-12 py-4 rounded-full font-label-caps uppercase tracking-widest shadow-[0_0_20px_rgba(191,64,255,0.4)] hover:shadow-[0_0_30px_rgba(191,64,255,0.6)] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3">
                    {submitting ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block"></span>SENDING...</> : 'Send Inquiry'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-40 pt-20 border-t border-white/10 reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {[
              { num: '01', label: 'Follow', name: 'Instagram', href: 'https://instagram.com/olisrabs_' },
              { num: '02', label: 'Connect', name: 'LinkedIn', href: 'https://linkedin.com/in/olajide-abimbola' },
              { num: '03', label: 'Feed', name: 'X (Twitter)', href: 'https://x.com/olisrabs' },
              { num: '04', label: 'Watch', name: 'Vimeo', href: '#' },
            ].map((social) => (
              <div key={social.num} className="flex flex-col gap-4 items-start">
                <span className="font-label-caps text-on-surface-variant opacity-40">{social.num} / {social.label}</span>
                <div onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave} className="magnetic-target inline-block transition-transform duration-200 cursor-pointer">
                  <a className="font-body-lg text-white hover:text-secondary transition-colors" href={social.href}>{social.name}</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
