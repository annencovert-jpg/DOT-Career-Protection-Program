import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { programConfig } from './config';

const basePath = import.meta.env.BASE_URL;
const homePath = basePath;
const dotWorkersPath = `${basePath}dot-workers`;

function SiteHeader({ simple = false }: { simple?: boolean }) {
  return (
    <header className="site-header-shell">
      <div className="site-header">
        <a className="brand" href={simple ? homePath : '#top'} aria-label="DOT Career Protection Program home">
          <span className="brand-icon material-symbols-outlined" aria-hidden="true">verified_user</span>
          <span>
            <strong>{programConfig.brandName}</strong>
            <small>{programConfig.domainName}</small>
          </span>
        </a>
        {!simple && (
          <nav className="primary-nav" aria-label="Primary navigation">
            <a href="#benefits">Benefits</a>
            <a href="#how-it-works">How it works</a>
            <a href="#eligibility">Eligibility</a>
            <a href="#pricing">Pricing</a>
          </nav>
        )}
        <a className="button button-compact" href={simple ? `${homePath}#pricing` : '#pricing'}>
          View pricing
        </a>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer-shell">
      <div className="site-footer">
        <div>
          <p className="footer-brand">{programConfig.brandName}</p>
          <p>Practical support for professionals who keep the country moving.</p>
        </div>
        <div className="footer-links">
          <a href={homePath}>Main page</a>
          <a href={dotWorkersPath}>Other DOT workers</a>
          <a href={`${homePath}#eligibility`}>Eligibility and limitations</a>
        </div>
        <p className="footer-domain">{programConfig.domainName}</p>
      </div>
    </footer>
  );
}

function DotWorkersPage() {
  return (
    <>
      <SiteHeader simple />
      <main className="standalone-page">
        <section className="hero compact-hero" aria-labelledby="dot-workers-title">
          <div className="hero-copy">
            <p className="eyebrow">Other DOT safety-sensitive workers</p>
            <h1 id="dot-workers-title">Program information beyond FMCSA-covered roles.</h1>
            <p className="lede">
              This preview summarizes how the DOT Career Protection Program may apply to aviation, transit, rail, pipeline, maritime, and other DOT-regulated workers while final terms and enrollment details are still being completed.
            </p>
            <div className="actions">
              <a className="button" href={`${homePath}#pricing`}>Review pricing</a>
              <a className="button button-secondary" href={homePath}>Back to main page</a>
            </div>
          </div>
          <aside className="timing-card" aria-label="Important timing notice">
            <span className="material-symbols-outlined" aria-hidden="true">schedule</span>
            <div>
              <strong>The same preventive timing rule applies.</strong>
              <p>Membership must begin before a DOT drug or alcohol violation or refusal occurs. Eligibility requirements and final program terms apply.</p>
            </div>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function App() {
  const isDotWorkersPage = window.location.pathname.endsWith('/dot-workers');

  if (isDotWorkersPage) {
    return <DotWorkersPage />;
  }

  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">For DOT covered professionals</p>
            <h1 id="hero-title">Protect your career before a violation happens.</h1>
            <p className="lede">
              The DOT Career Protection Program combines preventive education with defined support for eligible future DOT drug or alcohol violations.
            </p>
            <div className="actions" aria-label="Primary actions">
              <a className="button" href="#pricing">Review membership options</a>
              <a className="button button-secondary" href="#benefits">See what membership includes</a>
            </div>
            <ul className="hero-points" aria-label="Program highlights">
              <li><span className="material-symbols-outlined" aria-hidden="true">check_circle</span> Worker-focused support</li>
              <li><span className="material-symbols-outlined" aria-hidden="true">check_circle</span> Clear eligibility rules</li>
              <li><span className="material-symbols-outlined" aria-hidden="true">check_circle</span> Practical compliance education</li>
            </ul>
          </div>
          <aside className="timing-card" aria-label="Important timing notice">
            <span className="material-symbols-outlined" aria-hidden="true">shield</span>
            <div>
              <p className="eyebrow">Timing matters</p>
              <h2>Membership must begin first.</h2>
              <p>You must join before a DOT drug or alcohol violation or refusal occurs. Benefits cannot be used for an existing violation.</p>
              <a href="#eligibility">Review eligibility basics</a>
            </div>
          </aside>
        </section>

        <section className="section" id="benefits" aria-labelledby="benefits-title">
          <div className="section-heading">
            <p className="eyebrow">Membership benefits</p>
            <h2 id="benefits-title">Practical support when the process matters most.</h2>
            <p>Membership is built around four clear categories of support.</p>
          </div>
          <div className="benefit-grid">
            {programConfig.benefits.map((benefit) => (
              <article className="benefit-card" key={benefit.title}>
                <span className="card-icon material-symbols-outlined" aria-hidden="true">{benefit.icon}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-tone" id="how-it-works" aria-labelledby="workflow-title">
          <div className="section-heading">
            <p className="eyebrow">Protection path</p>
            <h2 id="workflow-title">How membership works</h2>
            <p>A simple path from enrollment to a benefit request, when needed.</p>
          </div>
          <ol className="workflow-list">
            {programConfig.workflow.map((step, index) => (
              <li key={step.title}>
                <span className="step-number" aria-hidden="true">{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section split" id="eligibility" aria-labelledby="eligibility-title">
          <div className="section-heading left-aligned">
            <p className="eyebrow">Eligibility and limitations</p>
            <h2 id="eligibility-title">The program is preventive, not retroactive.</h2>
            <p>
              The controlling date is the date of the violation or refusal, not the date it is discovered, entered into a database, discussed with a SAP, or scheduled for evaluation.
            </p>
            <p>
              Return-to-duty related benefits become available after {programConfig.eligibility.waitingPeriod}. Paying annually does not remove the waiting period.
            </p>
          </div>
          <div className="limits-panel">
            <h3>Plain-language limits</h3>
            <ul>
              <li>Eligibility requirements and final program terms apply.</li>
              <li>Benefits are not unlimited.</li>
              <li>Educational activities are helpful but optional.</li>
              <li>The program does not provide legal or medical advice.</li>
              <li>No return-to-duty, employment, license, reinstatement, or SAP outcome is guaranteed.</li>
            </ul>
          </div>
        </section>

        <section className="section" id="pricing" aria-labelledby="pricing-title">
          <div className="section-heading">
            <p className="eyebrow">Membership pricing</p>
            <h2 id="pricing-title">Choose the payment schedule that fits you.</h2>
            <p>Both options are subject to the same eligibility rules and waiting period.</p>
          </div>
          <div className="pricing-grid">
            <article className="price-card">
              <p className="price-label">{programConfig.pricing.monthly.label}</p>
              <p className="price"><span>{programConfig.pricing.monthly.price}</span>{programConfig.pricing.monthly.cadence}</p>
              <a className="button" href="#membership-interest">Join monthly</a>
            </article>
            <article className="price-card featured">
              <span className="popular-label">Best value</span>
              <p className="price-label">{programConfig.pricing.annual.label}</p>
              <p className="price"><span>{programConfig.pricing.annual.price}</span>{programConfig.pricing.annual.cadence}</p>
              <p>{programConfig.pricing.annual.savingsNote}</p>
              <a className="button" href="#membership-interest">Join annually</a>
            </article>
          </div>
          <p className="pricing-note">Paying annually does not eliminate the {programConfig.eligibility.waitingPeriodDays}-day waiting period.</p>
        </section>

        <section className="section faq-section" id="faq" aria-labelledby="faq-title">
          <div className="section-heading">
            <p className="eyebrow">Common questions</p>
            <h2 id="faq-title">What workers usually want to know</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>Who is the main program for?</summary>
              <p>The main website is written for CDL drivers, commercial motor vehicle drivers, and other FMCSA-covered safety-sensitive workers. Information for other DOT-covered roles is available on a separate page.</p>
            </details>
            <details>
              <summary>Can I join after a violation and use benefits for it?</summary>
              <p>No. Membership must begin before the violation or refusal occurs.</p>
            </details>
            <details>
              <summary>When do return-to-duty related benefits become available?</summary>
              <p>They become available after {programConfig.eligibility.waitingPeriod}, subject to eligibility requirements and final program terms.</p>
            </details>
            <details>
              <summary>Does annual payment remove the waiting period?</summary>
              <p>No. Monthly and annual members are subject to the same waiting period.</p>
            </details>
            <details>
              <summary>Does membership guarantee return to duty or a job?</summary>
              <p>No. The program does not guarantee return to duty, continued employment, licensing, reinstatement, job placement, or a particular SAP outcome.</p>
            </details>
          </div>
        </section>

        <section className="membership-interest" id="membership-interest" aria-labelledby="interest-title">
          <div>
            <p className="eyebrow">Stage 1 preview</p>
            <h2 id="interest-title">Enrollment is not active on this preview site yet.</h2>
            <p>Final enrollment links and support contact details will be added before public launch. You can still review the program structure, pricing, eligibility rules, and limitations here.</p>
          </div>
          <a className="button button-secondary" href="#top">Back to top</a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
