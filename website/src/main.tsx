import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { programConfig } from './config';
import heroImage from './assets/hero-driver.jpg';

function HomePage() {
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-surface dark:bg-surface-dark border-b border-border-subtle dark:border-outline fixed top-0 w-full z-[100] transition-all duration-300">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="font-headline-md text-headline-md font-bold text-text-main dark:text-white flex items-center gap-2">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-safety-orange-muted text-3xl">add_road</span>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-text-main dark:text-white">{programConfig.brandName}</span>
                <span className="text-[10px] font-bold tracking-widest text-secondary uppercase">{programConfig.domainName}</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="font-body-md text-body-md text-primary dark:text-on-primary font-bold border-b-2 border-safety-orange-muted pb-1 hover:text-primary dark:hover:text-on-primary transition-colors">
              Benefits
            </a>
            <a href="#how-it-works" className="font-body-md text-body-md text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-on-primary transition-colors">
              How it works
            </a>
            <a href="#eligibility" className="font-body-md text-body-md text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-on-primary transition-colors">
              Eligibility
            </a>
            <a href="#pricing" className="font-body-md text-body-md text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-on-primary transition-colors">
              Pricing
            </a>
            <a href="#faq" className="font-body-md text-body-md text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-on-primary transition-colors">
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="font-button text-button bg-primary text-on-primary px-6 py-2.5 rounded-lg hover:scale-95 duration-150 shadow-sm">
              Join Now
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative flex items-center bg-white overflow-hidden min-h-[750px]">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center md:bg-right"
              style={{
                backgroundImage: `url('${heroImage}')`,
              }}
              role="img"
              aria-label="A professional truck driver leaning against a modern semi-truck"
            />
            <div
              className="absolute inset-0 z-10"
              style={{
                background: 'linear-gradient(to right, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 25%, rgba(255,255,255,0.2) 50%, transparent 75%)'
              }}
            />
          </div>

          <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
            <div className="max-w-2xl space-y-stack-md">
              <span className="inline-block font-label-caps text-label-caps text-safety-orange-muted tracking-widest bg-orange-50 px-3 py-1 rounded-full">
                {programConfig.hero.eyebrow}
              </span>
              <h1 className="font-display text-display text-text-main leading-[1.1]">
                {programConfig.hero.headline}
              </h1>
              <p className="font-body-lg text-body-lg text-secondary max-w-lg text-on-secondary-fixed">
                {programConfig.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="font-button text-button bg-primary text-on-primary px-8 py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all shadow-md w-full">
                  {programConfig.hero.primaryCtaText}
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <button className="font-button text-button border border-outline text-secondary px-8 py-4 rounded-lg flex items-center justify-center hover:bg-surface-container-low transition-all w-full">
                  {programConfig.hero.secondaryCtaText}
                </button>
              </div>
              <p className="text-[12px] text-on-surface-variant/70 leading-relaxed italic max-w-md text-sm leading-loose">
                {programConfig.hero.disclaimer}
              </p>
            </div>
          </div>
        </section>

        {/* Benefit Cards Section */}
        <section className="py-stack-lg bg-surface-bright" id="benefits">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-xl">
                <span className="inline-block font-label-caps text-label-caps text-safety-orange-muted tracking-widest mb-2 uppercase">
                  {programConfig.benefits.eyebrow}
                </span>
                <h2 className="font-headline-lg text-headline-lg md:text-display md:text-[40px] text-text-main mb-4">
                  {programConfig.benefits.headline}
                </h2>
              </div>
              <div className="hidden lg:block h-[1px] flex-grow bg-outline-variant mx-12 mb-4" />
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {programConfig.benefits.cards.map((card, index) => (
                  <div key={index} className="bg-white border border-border-subtle p-8 rounded-xl">
                    <div className="font-label-caps text-safety-orange-muted mb-2">{card.label}</div>
                    <h3 className="font-headline-md text-text-main mb-2">{card.title}</h3>
                    <p className="font-body-md text-secondary">{card.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-on-surface-variant/70 italic text-center">
                {programConfig.benefits.disclaimer}
              </p>
            </div>
          </div>
        </section>

        {/* How it Works Section (Timeline) */}
        <section className="py-stack-lg bg-white" id="how-it-works">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-headline-lg text-headline-lg md:text-[40px] text-text-main mb-4">
                {programConfig.timeline.headline}
              </h2>
              <p className="font-body-md text-body-md text-secondary">
                {programConfig.timeline.description}
              </p>
            </div>
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border-subtle -translate-y-1/2 z-0" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                {programConfig.timeline.steps.map((step) => (
                  <div key={step.number} className="flex flex-col items-center text-center group">
                    <div className={`w-16 h-16 ${step.number === 3 ? 'bg-safety-orange-muted' : 'bg-primary'} text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 ring-8 ring-white shadow-md group-hover:scale-110 transition-transform`}>
                      {step.number}
                    </div>
                    <h4 className="font-headline-md text-headline-md text-text-main mb-2">{step.title}</h4>
                    <p className="font-body-md text-body-md text-secondary px-4">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-stack-lg bg-surface-container-low border-y border-border-subtle" id="pricing">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg md:text-[40px] text-text-main mb-4">
                {programConfig.pricingPlans.headline}
              </h2>
              <p className="font-body-md text-body-md text-secondary">
                {programConfig.pricingPlans.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Monthly Plan */}
              <div className="bg-white p-10 rounded-xl border border-border-subtle flex flex-col items-center text-center">
                <span className="font-label-caps text-label-caps text-secondary mb-4 uppercase tracking-wider">
                  {programConfig.pricingPlans.monthly.label}
                </span>
                <div className="flex items-baseline mb-8">
                  <span className="text-2xl font-bold text-text-main">$</span>
                  <span className="text-6xl font-extrabold text-text-main">{programConfig.pricing.monthly.price}</span>
                  <span className="text-secondary ml-2 font-body-md">{programConfig.pricing.monthly.cadence}</span>
                </div>
                <ul className="space-y-4 mb-10 text-left w-full">
                  {programConfig.pricingPlans.monthly.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-secondary">
                      <span className="material-symbols-outlined text-green-600 text-sm">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 rounded-lg font-button text-button border border-primary text-primary hover:bg-primary hover:text-white transition-all">
                  {programConfig.pricingPlans.monthly.cta}
                </button>
              </div>

              {/* Annual Plan */}
              <div className="bg-white p-10 rounded-xl border-2 border-safety-orange-muted flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-4 right-[-35px] bg-safety-orange-muted text-white px-10 py-1 rotate-45 font-label-caps text-[10px] shadow-sm">
                  {programConfig.pricingPlans.annual.badge}
                </div>
                <span className="font-label-caps text-label-caps text-safety-orange-muted mb-4 uppercase tracking-wider">
                  {programConfig.pricingPlans.annual.label}
                </span>
                <div className="flex items-baseline mb-8">
                  <span className="text-2xl font-bold text-text-main">$</span>
                  <span className="text-6xl font-extrabold text-text-main">{programConfig.pricing.annual.price}</span>
                  <span className="text-secondary ml-2 font-body-md">{programConfig.pricing.annual.cadence}</span>
                </div>
                <ul className="space-y-4 mb-10 text-left w-full">
                  {programConfig.pricingPlans.annual.features.map((feature, index) => (
                    <li key={index} className={`flex items-center gap-3 text-secondary ${index === 0 ? 'font-bold' : ''}`}>
                      <span className="material-symbols-outlined text-green-600 text-sm">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 rounded-lg font-button text-button bg-primary text-on-primary hover:bg-zinc-800 shadow-md transition-all">
                  {programConfig.pricingPlans.annual.cta}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="py-stack-lg bg-white" id="eligibility">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-headline-lg text-headline-lg md:text-[40px] text-text-main mb-4">
                Important Eligibility Information
              </h2>
              <p className="font-body-md text-body-md text-secondary">
                The program is designed as preventive membership, active before a violation occurs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-surface-bright border border-border-subtle p-8 rounded-xl">
                <h3 className="font-headline-md text-text-main mb-4">Before a Violation</h3>
                <p className="font-body-md text-secondary">
                  Join while your record is clean. Membership must be active before any DOT drug or alcohol violation or refusal occurs to be eligible for member assistance benefits.
                </p>
              </div>
              <div className="bg-surface-bright border border-border-subtle p-8 rounded-xl">
                <h3 className="font-headline-md text-text-main mb-4">The 90-Day Waiting Period</h3>
                <p className="font-body-md text-secondary">
                  Return-to-duty benefits become available after 90 consecutive days of active membership. Paying annually does not eliminate the waiting period.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-stack-lg bg-white" id="faq">
          <div className="max-w-3xl mx-auto px-margin-mobile">
            <h2 className="font-headline-lg text-headline-lg text-center text-text-main mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {programConfig.faq.map((item, index) => (
                <div key={index} className="border-b border-border-subtle py-4 cursor-pointer group" onClick={() => toggleFaq(index)}>
                  <div className="flex justify-between items-center">
                    <span className="font-headline-md text-headline-md text-text-main text-[18px]">
                      {item.question}
                    </span>
                    <span className={`material-symbols-outlined transition-transform ${expandedFaqIndex === index ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </div>
                  {expandedFaqIndex === index && (
                    <div className="pt-4 text-secondary font-body-md">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Final CTA Section */}
            <div className="mt-16 bg-primary-container rounded-2xl p-8 md:p-12 text-center">
              <h3 className="font-headline-lg text-headline-lg text-white mb-4">
                {programConfig.finalCta.headline}
              </h3>
              <p className="text-on-primary-container mb-8 max-w-lg mx-auto">
                {programConfig.finalCta.description}
              </p>
              <button className="bg-safety-orange-muted text-white font-button text-button px-10 py-4 rounded-lg hover:bg-orange-500 transition-all shadow-lg">
                {programConfig.finalCta.cta}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-container dark:bg-black text-on-primary-container dark:text-on-primary-fixed-variant py-stack-lg px-margin-mobile md:px-margin-desktop border-t border-outline-variant">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div className="font-headline-md text-headline-md text-white font-bold">
              {programConfig.brandName}
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <a href="#" className="font-body-md text-body-md text-on-primary-container hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font-body-md text-body-md text-on-primary-container hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-body-md text-body-md text-on-primary-container hover:text-white transition-colors">
                Legal Disclosures
              </a>
              <a href="#" className="font-body-md text-body-md text-on-primary-container hover:text-white transition-colors">
                Contact Support
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>© 2024 {programConfig.brandName}. All rights reserved.</p>
            <p>Not an insurance product. This is a professional services membership program.</p>
          </div>
        </div>
      </footer>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 bg-surface dark:bg-surface-dark border-t border-border-subtle dark:border-outline shadow-lg flex justify-around items-center px-4 py-3 lg:hidden mb-0">
        <a href="#benefits" className="flex flex-col items-center justify-center text-secondary">
          <span className="material-symbols-outlined">verified_user</span>
          <span className="font-label-caps text-[10px] mt-1">Benefits</span>
        </a>
        <a href="#how-it-works" className="flex flex-col items-center justify-center text-secondary">
          <span className="material-symbols-outlined">account_tree</span>
          <span className="font-label-caps text-[10px] mt-1">How it works</span>
        </a>
        <a href="#eligibility" className="flex flex-col items-center justify-center text-secondary">
          <span className="material-symbols-outlined">assignment_turned_in</span>
          <span className="font-label-caps text-[10px] mt-1">Eligibility</span>
        </a>
        <a href="#pricing" className="flex flex-col items-center justify-center text-secondary">
          <span className="material-symbols-outlined">payments</span>
          <span className="font-label-caps text-[10px] mt-1">Pricing</span>
        </a>
        <a href="#faq" className="flex flex-col items-center justify-center text-secondary">
          <span className="material-symbols-outlined">quiz</span>
          <span className="font-label-caps text-[10px] mt-1">FAQ</span>
        </a>
      </nav>
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
);
