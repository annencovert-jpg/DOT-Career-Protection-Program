# Decisions

This document records approved project decisions taken from `docs/MASTER_BUILD_SPEC.md`. It should not be used to invent unresolved details.

## Approved Brand Decisions

- Primary public brand: **DOT Career Protection Program**.
- Planned public domain: **49CFR40.com** / `49cfr40.com`.
- The domain supports the brand; it is not the dominant product name.
- Recommended public treatment:
  - Header/logo: DOT Career Protection Program
  - Browser title: DOT Career Protection Program | 49CFR40.com
  - Footer: DOT Career Protection Program · 49CFR40.com

## Approved Primary Goal

- The primary website goal is to sell membership in the DOT Career Protection Program.
- Primary conversion actions:
  - Join monthly.
  - Join annually.
  - Review benefits.
  - Review eligibility and limitations.

## Approved Audience Decisions

- The main homepage should be written primarily for CDL drivers, commercial motor vehicle drivers, and other FMCSA-covered safety-sensitive workers.
- A separate landing page is planned for other DOT safety-sensitive workers at `/dot-workers`.
- The footer should include a discreet “Other DOT workers” link.

## Approved Membership Decisions

- Monthly membership price: **$8 per month**.
- Annual prepaid membership price: **$90 per year**.
- Annual membership should be displayed as providing a small savings.
- Pricing should eventually live in one centralized configuration file.
- A person must join before a DOT drug or alcohol violation occurs to use benefits for that violation.
- The controlling date is the date of the violation or refusal.
- RTD-related benefits become available after **90 consecutive days of active membership**.
- Paying annually does not eliminate the waiting period.
- Eligible RTD benefits may be used once during each applicable 12-month benefit period, subject to final membership terms.
- Educational activities are optional and are not conditions for receiving benefits.

## Approved Benefit Decisions

Approved membership benefit categories include:

- Preventive educational emails.
- General member support.
- One standard DOT SAP service package through an approved participating provider, subject to terms.
- One eligible return-to-duty test, subject to terms.
- Up to three eligible return-to-duty education courses, subject to terms.
- Career and second-chance resources as general resources, not guaranteed job placement or employer referral.

## Approved Phase 1 Operating Model

- There is no member dashboard in Phase 1.
- Enrollment is planned through hosted checkout, with contact and membership information sent to HubSpot later.
- HubSpot is planned for onboarding, welcome emails, monthly educational emails, forms, segmentation, and manual benefit-support workflows.
- Benefits are administered manually.
- Member assistance is handled through forms, email, and phone support.

## Approved Technical Direction for Later Phases

The master build spec recommends a future React/Vite/TypeScript static-site workflow with centralized configuration, resource publishing, forms, SEO, accessibility, and preview deployment. These are future implementation decisions, not Stage 0 work.

## Stage 0 Decision

Stage 0 established the repository foundation and planning documents only. No website, framework, hosting, payment, HubSpot, DNS, or production integration was added in Stage 0.

## Stage 1 Decision

The owner approved moving beyond Stage 0 to add the actual public website as a React/Vite app in the top-level `website/` directory.

- Preserve existing founding documents, specifications, notes, and documentation.
- Set up GitHub Pages preview deployment with GitHub Actions.
- Build from `website/` and deploy `website/dist` as the GitHub Pages artifact.
- Do not connect the live `49CFR40.com` domain yet.
