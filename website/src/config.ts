export const programConfig = {
  // Brand and domain
  brandName: 'DOT Career Protection Program',
  domainName: '49CFR40.com',

  // Pricing (Phase 1) - CORRECTED TO APPROVED VALUES
  pricing: {
    monthly: {
      price: 8,
      priceString: '$8',
      cadence: '/month',
      label: 'Monthly membership',
    },
    annual: {
      price: 90,
      priceString: '$90',
      cadence: '/year',
      label: 'Annual prepaid membership',
      savingsPercent: 17,
    },
  },

  // Eligibility and benefits
  eligibility: {
    waitingPeriodDays: 90,
    benefitFrequency: 'once during each applicable 12-month benefit period',
  },

  // Hero section
  hero: {
    eyebrow: 'FOR DOT-COVERED PROFESSIONALS',
    headline: 'Protect the career you worked to build.',
    description: 'Membership provides practical DOT education now and helps pay eligible SAP, required course, and practice-test costs if a future violation happens.',
    primaryCtaText: 'Join for $8/month',
    secondaryCtaText: 'See membership benefits',
    disclaimer: 'Membership must begin before a DOT drug or alcohol violation or refusal occurs. Eligibility rules and waiting periods apply.',
  },

  // Benefits section
  benefits: {
    eyebrow: 'WHAT MEMBERSHIP PROVIDES',
    headline: 'Education now. Help with return-to-duty costs if a violation happens.',
    cards: [
      {
        label: 'Before a violation',
        title: 'Ongoing DOT education',
        description: 'Practical education helps members understand drug-and-alcohol rules, testing requirements, refusals, timing risks, and common mistakes.',
      },
      {
        label: 'After an eligible violation',
        title: 'Help with eligible process expenses',
        description: 'Membership helps pay eligible SAP services, required education, and one practice drug test so cost is less likely to delay progress.',
      },
    ],
    disclaimer: 'Eligibility rules, waiting periods, benefit limits, and final membership terms apply.',
  },

  // Timeline/How it Works
  timeline: {
    headline: 'How Membership Works',
    description: 'A simple, transparent process designed to provide security from day one through any potential challenges.',
    steps: [
      {
        number: 1,
        title: 'Enroll Early',
        description: 'Join while your record is clean. Membership must be active before any violation occurs to be eligible for member assistance.',
      },
      {
        number: 2,
        title: 'Stay Informed',
        description: 'Access our library of compliance training and receive regular industry updates to stay fully informed of DOT rules.',
      },
      {
        number: 3,
        title: 'Get Support',
        description: 'If an eligible violation occurs, we activate member assistance, providing SAP navigation and return-to-duty guidance.',
      },
    ],
  },

  // Pricing plans
  pricingPlans: {
    headline: 'Choose Your Protection Plan',
    description: 'Affordable career assistance for the people who keep our country moving.',
    monthly: {
      label: 'Flexible Monthly',
      features: [
        'Full SAP Process Support',
        'RTD Training Materials',
        'Compliance Alerts',
      ],
      cta: 'Select Monthly',
    },
    annual: {
      label: 'Annual Protection',
      badge: 'BEST VALUE',
      features: [
        'Save on annual membership',
        'Member Support Access',
        'Full Program Benefits',
      ],
      cta: 'Select Annual',
    },
  },

  // FAQ
  faq: [
    {
      question: 'Who is eligible for the program?',
      answer: 'CDL drivers and other FMCSA-covered professionals may join before a DOT drug or alcohol violation or refusal occurs. Return-to-duty benefits become available after 90 consecutive days of active membership, subject to eligibility requirements and final membership terms.',
    },
    {
      question: 'Does this pay for my drug tests?',
      answer: 'The program covers practice tests and RTD educational materials. Costs for official employer-mandated tests or legal fees are not included.',
    },
    {
      question: 'Is my information confidential?',
      answer: 'Your membership and any inquiries you make are confidential and are not reported to your employer or any federal databases.',
    },
  ],

  // Final CTA section
  finalCta: {
    headline: 'Secure your career today.',
    description: 'Join professional drivers who trust DOT Career Protection to safeguard their future on the road.',
    cta: 'Start Your Protection Now',
  },

  // Contact info (placeholder)
  contact: {
    email: 'Contact information coming soon',
    phone: 'Phone support details coming soon',
  },
};
