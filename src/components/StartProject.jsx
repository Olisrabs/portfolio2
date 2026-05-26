import React, { useState } from 'react';
import Footer from './Footer';
import { supabase } from '../lib/supabase';
import { sendEmail } from '../lib/emailjs';

// ── Inline success/error banner ──────────────────────────────────────────────
function FormBanner({ type, message, onClose }) {
  const isSuccess = type === 'success';
  return (
    <div className={`flex items-start gap-4 p-6 rounded-2xl border animate-fade-in ${isSuccess ? 'bg-tertiary/10 border-tertiary/30 text-tertiary' : 'bg-red-500/10 border-red-500/30 text-red-400'}`} role="alert">
      <span className="material-symbols-outlined text-2xl shrink-0">{isSuccess ? 'check_circle' : 'error'}</span>
      <div className="flex-1">
        <p className="font-label-caps tracking-widest text-sm mb-1">{isSuccess ? 'REQUEST SUBMITTED' : 'SUBMISSION FAILED'}</p>
        <p className="font-body-md text-on-surface-variant text-sm">{message}</p>
      </div>
      <button onClick={onClose} className="material-symbols-outlined text-lg opacity-50 hover:opacity-100 transition-opacity cursor-pointer shrink-0">close</button>
    </div>
  );
}

export default function StartProject() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmissionDone, setTransmissionDone] = useState(false);
  const [transmissionError, setTransmissionError] = useState(false);

  // Form data tracked across steps
  const [projectType, setProjectType] = useState('');
  const [budget, setBudget] = useState('');
  const [visionName, setVisionName] = useState('');
  const [visionEmail, setVisionEmail] = useState('');
  const [visionChallenge, setVisionChallenge] = useState('');

  // Express booking state
  const [bookingProjectName, setBookingProjectName] = useState('');
  const [bookingBudget, setBookingBudget] = useState('');
  const [bookingTimeline, setBookingTimeline] = useState('');
  const [bookingSubmitting, setBookingSubmitting] = useState(false);
  const [bookingBanner, setBookingBanner] = useState(null);

  const totalSteps = 4;
  const labels = ['PROJECT ORIGIN', 'CAPITAL ALLOCATION', 'VISIONARY DETAILS', 'TRANSMISSION'];

  const handleSelectType = (type) => {
    setProjectType(type);
    goToStep(2);
  };

  const handleSelectBudget = (b) => {
    setBudget(b);
    goToStep(3);
  };

  const goToStep = (step) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep(step);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsTransitioning(false);
    }, 600);
  };

  const handleSubmitVision = async () => {
    setIsTransitioning(true);
    setTimeout(async () => {
      setCurrentStep(4);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsTransitioning(false);
      setIsTransmitting(true);
      setTransmissionDone(false);
      setTransmissionError(false);

      const { error } = await supabase.from('project_requests').insert([{
        name: visionName,
        email: visionEmail,
        challenge: visionChallenge,
        project_type: projectType,
        budget,
      }]);

      setIsTransmitting(false);
      if (error) {
        setTransmissionError(true);
      } else {
        setTransmissionDone(true);
        // Fire-and-forget email notification via EmailJS
        sendEmail('project_request', {
          from_name:    visionName,
          from_email:   visionEmail,
          project_type: projectType,
          budget,
          challenge:    visionChallenge,
        }).catch(() => {});
      }
    }, 600);
  };

  const handleExpressBooking = async (e) => {
    e.preventDefault();
    setBookingSubmitting(true);
    setBookingBanner(null);
    const { error } = await supabase.from('express_bookings').insert([{
      project_name: bookingProjectName,
      budget_range: bookingBudget,
      timeline: bookingTimeline,
    }]);
    setBookingSubmitting(false);
    if (error) {
      setBookingBanner({ type: 'error', message: 'Booking could not be submitted. Please try again or email olisrab@gmail.com.' });
    } else {
      setBookingBanner({ type: 'success', message: 'Your booking has been secured. We\'ll confirm your spot within 12 hours.' });
      // Fire-and-forget email notification via EmailJS
      sendEmail('express_booking', {
        project_name: bookingProjectName,
        budget_range: bookingBudget,
        timeline:     bookingTimeline,
      }).catch(() => {});
      setBookingProjectName(''); setBookingBudget(''); setBookingTimeline('');
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <main className="relative pt-40 pb-0 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto z-10 w-full min-h-screen flex flex-col justify-between">
      <div>
        {/* Step Indicator */}
        <div className="mb-12 flex items-center gap-4 reveal">
          <span className="font-label-caps text-secondary text-label-caps">0{currentStep} / 0{totalSteps}</span>
          <div className="h-[1px] w-32 bg-outline-variant/30 relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full bg-[#BF40FF] transition-all duration-700" style={{ width: `${progress}%` }} id="progress-bar"></div>
          </div>
          <span className="font-label-caps text-on-surface-variant text-label-caps">{labels[currentStep - 1]}</span>
        </div>

        <section className="relative min-h-[614px] flex items-start reveal" id="questionnaire-container">

          {/* Step 1: Project Type */}
          <div className={`step-transition w-full ${currentStep === 1 && !isTransitioning ? 'opacity-100 translate-y-0 relative z-10' : 'opacity-0 -translate-y-10 pointer-events-none absolute'}`}>
            <h1 className="font-display-xl text-headline-lg-mobile md:text-headline-lg mb-16 max-w-4xl text-white">
              What type of <span className="text-secondary italic">legacy</span> are we building?
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {[
                { type: 'Digital Ecosystem', icon: 'language', desc: 'High-performance platforms & immersive web experiences.' },
                { type: 'Brand Identity', icon: 'auto_awesome', desc: 'Visual strategy, cinema-grade motion, and sonic branding.' },
                { type: 'R&D Lab', icon: 'science', desc: 'Experimental tech, Web3, and AI-driven products.' },
              ].map((item) => (
                <button key={item.type} onClick={() => handleSelectType(item.type)} className="selection-card glass-panel p-10 text-left hover:border-[#BF40FF]/50 transition-all group flex flex-col justify-between min-h-[300px] w-full cursor-pointer">
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-secondary transition-colors">{item.icon}</span>
                  <div>
                    <h3 className="font-headline-lg text-2xl mb-2 text-white">{item.type}</h3>
                    <p className="font-body-md text-on-surface-variant">{item.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Budget */}
          <div className={`step-transition w-full ${currentStep === 2 && !isTransitioning ? 'opacity-100 translate-y-0 relative z-10' : 'opacity-0 -translate-y-10 pointer-events-none absolute'}`}>
            <h1 className="font-display-xl text-headline-lg-mobile md:text-headline-lg mb-16 max-w-4xl text-white">
              The scope of your <span className="text-secondary italic">ambition</span>.
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {[
                { tier: 'TIER ONE', range: '$50k — $100k', icon: 'arrow_forward' },
                { tier: 'TIER TWO', range: '$100k — $250k', icon: 'arrow_forward' },
                { tier: 'TIER THREE', range: '$250k — $500k', icon: 'arrow_forward' },
                { tier: 'BESPOKE', range: '$500k+', icon: 'diamond' },
              ].map((item) => (
                <button key={item.tier} onClick={() => handleSelectBudget(item.range)} className="glass-panel p-12 text-left hover:bg-white/5 transition-all flex items-center justify-between group w-full cursor-pointer">
                  <div className="flex flex-col">
                    <span className="font-label-caps text-on-surface-variant mb-2">{item.tier}</span>
                    <span className="font-headline-lg text-4xl text-white">{item.range}</span>
                  </div>
                  <span className="material-symbols-outlined text-3xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-white">{item.icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Vision Input Fields */}
          <div className={`step-transition w-full ${currentStep === 3 && !isTransitioning ? 'opacity-100 translate-y-0 relative z-10' : 'opacity-0 -translate-y-10 pointer-events-none absolute'}`}>
            <h1 className="font-display-xl text-headline-lg-mobile md:text-headline-lg mb-16 text-white">
              Tell us about the <span className="text-secondary italic">vision</span>.
            </h1>
            <div className="max-w-3xl space-y-20">
              <div className="relative group">
                <label className="block font-label-caps text-on-surface-variant mb-4 tracking-widest">YOUR NAME</label>
                <input type="text" value={visionName} onChange={(e) => setVisionName(e.target.value)} placeholder="Abimbola Olajide" className="w-full bg-transparent border-b border-outline-variant/50 py-4 text-2xl font-body-lg focus:border-[#BF40FF] transition-colors placeholder:text-surface-container-highest text-white outline-none" />
              </div>
              <div className="relative group">
                <label className="block font-label-caps text-on-surface-variant mb-4 tracking-widest">EMAIL ADDRESS</label>
                <input type="email" value={visionEmail} onChange={(e) => setVisionEmail(e.target.value)} placeholder="example@youremail.com" className="w-full bg-transparent border-b border-outline-variant/50 py-4 text-2xl font-body-lg focus:border-[#BF40FF] transition-colors placeholder:text-surface-container-highest text-white outline-none" />
              </div>
              <div className="relative group">
                <label className="block font-label-caps text-on-surface-variant mb-4 tracking-widest">THE CHALLENGE</label>
                <textarea rows="3" value={visionChallenge} onChange={(e) => setVisionChallenge(e.target.value)} placeholder="Describe the problem we're solving..." className="w-full bg-transparent border-b border-outline-variant/50 py-4 text-2xl font-body-lg focus:border-[#BF40FF] transition-colors placeholder:text-surface-container-highest text-white resize-none outline-none"></textarea>
              </div>
              <button onClick={handleSubmitVision} disabled={!visionName || !visionEmail || !visionChallenge} className="w-full md:w-auto bg-[#BF40FF] text-white px-12 py-5 rounded-full font-label-caps text-lg hover:scale-105 transition-all shadow-[0_0_20px_rgba(191,64,255,0.3)] flex items-center justify-center gap-4 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100">
                GENERATE REQUEST <span className="material-symbols-outlined">bolt</span>
              </button>
            </div>
          </div>

          {/* Step 4: Loading / Success / Error */}
          <div className={`step-transition w-full text-center py-20 ${currentStep === 4 && !isTransitioning ? 'opacity-100 translate-y-0 relative z-10' : 'opacity-0 -translate-y-10 pointer-events-none absolute'}`}>
            {isTransmitting && (
              <div className="space-y-8" id="loading-state">
                <div className="relative w-24 h-24 mx-auto">
                  <div className="absolute inset-0 rounded-full border-4 border-[#BF40FF]/20"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-t-[#BF40FF] animate-spin"></div>
                </div>
                <p className="font-label-caps text-on-surface-variant animate-pulse">TRANSMITTING SECURE DATA...</p>
              </div>
            )}
            {transmissionDone && (
              <div className="space-y-12 animate-fade-in" id="success-state">
                <div className="w-20 h-20 mx-auto rounded-full bg-tertiary/10 border border-tertiary/30 flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-4xl text-tertiary">check_circle</span>
                </div>
                <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl tracking-tighter text-white">
                  LET'S BUILD SOMETHING <span className="text-secondary">EXCEPTIONAL</span>.
                </h1>
                <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
                  Your inquiry has been encrypted and sent to our executive team. Expect a response within 24 standard business hours.
                </p>
                <a href="#home" className="inline-block font-label-caps text-secondary underline underline-offset-8 hover:text-white transition-colors cursor-pointer">RETURN TO HOME</a>
              </div>
            )}
            {transmissionError && (
              <div className="space-y-8 animate-fade-in">
                <div className="w-20 h-20 mx-auto rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-red-400">error</span>
                </div>
                <h2 className="font-headline-lg text-3xl text-white">Transmission Failed</h2>
                <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto">Something went wrong sending your request. Please email us directly at <a href="mailto:olisrab@gmail.com" className="text-secondary underline">olisrab@gmail.com</a>.</p>
                <button onClick={() => { setCurrentStep(3); setTransmissionError(false); }} className="font-label-caps text-secondary underline underline-offset-8 hover:text-white transition-colors cursor-pointer">TRY AGAIN</button>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Express Booking Section */}
      <section className="relative py-24 w-full mt-20">
        <div className="glass-panel p-8 md:p-16 rounded-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <span className="font-label-caps text-secondary text-label-caps mb-4 block">EXPRESS BOOKING</span>
                <h2 className="font-display-xl text-4xl md:text-6xl tracking-tighter text-white">Secure your <span className="text-secondary italic">position</span> in our calendar.</h2>
              </div>
            </div>
            <form onSubmit={handleExpressBooking} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <div className="relative group">
                <label className="block font-label-caps text-on-surface-variant mb-4 tracking-widest uppercase">Project Name</label>
                <input type="text" value={bookingProjectName} onChange={(e) => setBookingProjectName(e.target.value)} placeholder="Project Alpha" required className="w-full bg-transparent border-b border-outline-variant/50 py-4 text-xl font-body-lg focus:border-[#BF40FF] transition-colors placeholder:text-surface-container-highest text-white outline-none" />
              </div>
              <div className="relative group">
                <label className="block font-label-caps text-on-surface-variant mb-4 tracking-widest uppercase">Budget Range</label>
                <select value={bookingBudget} onChange={(e) => setBookingBudget(e.target.value)} required className="w-full bg-transparent border-b border-outline-variant/50 py-4 text-xl font-body-lg focus:border-[#BF40FF] transition-colors text-on-surface appearance-none outline-none cursor-pointer">
                  <option value="" disabled className="bg-surface">Select range</option>
                  <option value="50k - 100k" className="bg-surface">$50k — $100k</option>
                  <option value="100k - 250k" className="bg-surface">$100k — $250k</option>
                  <option value="250k - 500k" className="bg-surface">$250k — $500k</option>
                  <option value="500k+" className="bg-surface">$500k+</option>
                </select>
              </div>
              <div className="relative group md:col-span-2">
                <label className="block font-label-caps text-on-surface-variant mb-4 tracking-widest uppercase">Timeline</label>
                <input type="text" value={bookingTimeline} onChange={(e) => setBookingTimeline(e.target.value)} placeholder="e.g. 3-4 Months" required className="w-full bg-transparent border-b border-outline-variant/50 py-4 text-xl font-body-lg focus:border-[#BF40FF] transition-colors placeholder:text-surface-container-highest text-white outline-none" />
              </div>
              {bookingBanner && (
                <div className="md:col-span-2">
                  <FormBanner type={bookingBanner.type} message={bookingBanner.message} onClose={() => setBookingBanner(null)} />
                </div>
              )}
              <div className="md:col-span-2 flex justify-start">
                <button type="submit" disabled={bookingSubmitting} className="bg-[#BF40FF] text-white px-12 py-5 rounded-full font-label-caps text-lg hover:scale-105 transition-all shadow-[0_0_20px_rgba(191,64,255,0.3)] flex items-center justify-center gap-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                  {bookingSubmitting ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block"></span>SUBMITTING...</> : <>SUBMIT REQUEST <span className="material-symbols-outlined">send</span></>}
                </button>
              </div>
            </form>
          </div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#BF40FF]/10 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
