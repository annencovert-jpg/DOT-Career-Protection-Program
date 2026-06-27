import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { programConfig } from './config';

const basePath = import.meta.env.BASE_URL;
const homePath = basePath;
const dotWorkersPath = `${basePath}dot-workers`;

const benefits = [
  'Preventive DOT drug-and-alcohol education by email.',
  'General member support and next-step navigation.',
  'One standard DOT SAP service package through an approved participating provider, when eligible and subject to terms.',
  'One eligible return-to-duty test, when eligible and subject to terms.',
  'Up to three eligible return-to-duty education courses, when eligible and subject to terms.',
  'Career and second-chance resources without promising job placement or employer referral.',
];

function DotWorkersPage() {
  return (
    <main className="standalone-page">
      <section className="hero" aria-labelledby="dot-workers-title">
        <div>
          <p className="eyebrow">Other DOT safety-sensitive workers</p>
          <h1 id="dot-workers-title">Program information for aviation, transit, rail, pipeline, maritime, and other DOT-regulated roles.</h1>
          <p className="lede">
            This preview page summarizes how the DOT Career Protection Program may apply beyond FMCSA-covered workers while final terms, checkout, and operational details are still being completed.
          </p>
          <div className="actions">
            <a className="button" href={`${homePath}#pricing`}>Review pricing</a>
            <a className="button button-secondary" href={homePath}>Back to main page</a>
          </div>
        </div>
        <aside className="notice">
          <strong>Same preventive timing rule.</strong>
          <p>Membership must begin before a DOT drug or alcohol violation or refusal occurs. Eligibility requirements and final program terms apply.</p>
        </aside>
      </section>
    </main>
  );
}

function App() {
  const isDotWorkersPage = window.location.pathname.endsWith('/dot-workers');

  if (isDotWorkersPage) {
    return (
      <>
        <header className="site-header">
          <a className="brand" href={homePath} aria-label="DOT Career Protection Program home">
            {programConfig.brandName}
          </a>
        </header>
        <DotWorkersPage />
        <footer className="site-footer">
          <p>{programConfig.brandName} · {programConfig.domainName}</p>
          <a href={homePath}>Main page</a>
        </footer>
      </>
    );
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="DOT Career Protection Program home">
          {programConfig.brandName}
        </a>
        <nav aria-label="Primary navigation">
          <a href="#benefits">Benefits</a>
          <a href="#eligibility">Eligibility</a>
          <a href="#pricing">Pricing</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div>
            <p className="eyebrow">Preview website for {programConfig.domainName}</p>
            <h1 id="hero-title">Practical protection for DOT-regulated workers before a violation happens.</h1>
            <p className="lede">
              The DOT Career Protection Program is designed for CDL drivers, commercial motor vehicle drivers, and other FMCSA-covered safety-sensitive workers who want preventive education and defined support if an eligible future DOT drug or alcohol violation occurs.
            </p>
            <div className="actions" aria-label="Primary actions">
              <a className="button" href="#pricing">Review membership options</a>
              <a className="button button-secondary" href="#eligibility">Check eligibility basics</a>
            </div>
          </div>
          <aside className="notice" aria-label="Important timing notice">
            <strong>Timing matters.</strong>
            <p>You must join before a DOT drug or alcohol violation or refusal occurs. Benefits cannot be used for an existing violation.</p>
          </aside>
        </section>

        <section className="section" id="benefits" aria-labelledby="benefits-title">
          <p className="eyebrow">Membership benefits</p>
          <h2 id="benefits-title">Education now. Defined support later, if eligible.</h2>
          <div className="cards">
            {benefits.map((benefit) => (
              <article className="card" key={benefit}>
                <p>{benefit}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split" id="eligibility" aria-labelledby="eligibility-title">
          <div>
            <p className="eyebrow">Eligibility and limitations</p>
            <h2 id="eligibility-title">The program is preventive, not retroactive.</h2>
            <p>
              The controlling date is the date of the violation or refusal, not the date it is discovered, entered into a database, discussed with a SAP, or scheduled for evaluation.
            </p>
            <p>
              Return-to-duty related benefits become available after {programConfig.eligibility.waitingPeriodDays} consecutive days of active membership. Paying annually does not remove the waiting period.
            </p>
          </div>
          <div className="panel">
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
          <p className="eyebrow">Membership pricing</p>
          <h2 id="pricing-title">Choose monthly or annual membership.</h2>
          <div className="pricing-grid">
            <article className="price-card">
              <h3>{programConfig.pricing.monthly.label}</h3>
              <p className="price"><span>{programConfig.pricing.monthly.price}</span> {programConfig.pricing.monthly.cadence}</p>
              <a className="button" href="mailto:membership@example.invalid?subject=Monthly%20membership%20interest">Join monthly</a>
            </article>
            <article className="price-card featured">
              <h3>{programConfig.pricing.annual.label}</h3>
              <p className="price"><span>{programConfig.pricing.annual.price}</span> {programConfig.pricing.annual.cadence}</p>
              <p>{programConfig.pricing.annual.savingsNote}</p>
              <a className="button" href="mailto:membership@example.invalid?subject=Annual%20membership%20interest">Join annually</a>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>{programConfig.brandName} · {programConfig.domainName}</p>
        <a href={dotWorkersPath}>Other DOT workers</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
