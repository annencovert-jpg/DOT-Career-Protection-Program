export const programConfig = {
  brandName: 'DOT Career Protection Program',
  domainName: '49CFR40.com',
  pricing: {
    monthly: {
      label: 'Monthly',
      price: '$7.99',
      cadence: '/month',
    },
    annual: {
      label: 'Annual',
      price: '$80',
      cadence: '/year',
      savingsNote: 'Save $15.88 per year compared with paying monthly.',
    },
  },
  eligibility: {
    waitingPeriodDays: 90,
    waitingPeriod: '90 consecutive days of active membership',
    benefitFrequency: 'once during each applicable 12-month benefit period',
  },
  benefits: [
    {
      icon: 'support_agent',
      title: 'SAP Process Support',
      description: 'SAP assessments and required DOT documentation of the process.',
    },
    {
      icon: 'school',
      title: 'RTD Education Assistance',
      description: 'Coverage of eligible education expenses resulting from the SAP assessment.',
    },
    {
      icon: 'biotech',
      title: 'Practice RTD Drug Test',
      description: 'Coverage of one eligible non-DOT test before SAP process completion.',
    },
    {
      icon: 'menu_book',
      title: 'Ongoing Compliance Education',
      description: 'Quarterly newsletters and practical education to help members understand DOT safety and drug-and-alcohol requirements.',
    },
  ],
  workflow: [
    {
      title: 'Complete Your Membership Profile',
      description: 'Provide your basic contact and membership information so we can set up your profile and communicate with you.',
    },
    {
      title: 'Use Your Active Membership',
      description: 'Stay connected to your membership benefits, including SAP Process Support, RTD Education Assistance, Practice RTD Drug Test eligibility, and quarterly compliance education.',
    },
    {
      title: 'Submit a Benefit Request',
      description: 'If you experience an eligible DOT drug or alcohol violation after your waiting period, submit a Benefit Request so eligibility can be reviewed and available membership benefits can be coordinated.',
    },
  ],
  contact: {
    email: 'Contact information coming soon',
    phone: 'Phone support details coming soon',
  },
} as const;
