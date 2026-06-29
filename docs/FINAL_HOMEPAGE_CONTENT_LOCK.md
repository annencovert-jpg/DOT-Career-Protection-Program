# Final Homepage Content Lock

**Date:** 2024
**Status:** Approved content as of Phase 1 implementation

This document locks the approved content values used in the DOT Career Protection Program homepage. These values are centralized in `website/src/config.ts` and should not be changed without explicit owner approval.

## Brand and Identity

- **Primary Brand:** DOT Career Protection Program
- **Supporting Domain:** 49CFR40.com
- **Logo:** Material Symbols "add_road" icon in safety orange

## Pricing (Approved Phase 1 Values)

- **Monthly Membership:** $8/month
- **Annual Membership:** $90/year (represents 17% savings over monthly)
- All pricing is centralized in `website/src/config.ts`

## Key Claims (Approved Language)

### Hero Section
- **Headline:** "Protect the career you worked to build."
- **Primary CTA:** "Join for $8/month"
- **Secondary CTA:** "See membership benefits"

### What Membership Provides
- "Education now. Help with return-to-duty costs if a violation happens."
- Before violation: "Ongoing DOT education"
- After eligible violation: "Help with eligible process expenses"

### Timeline/How It Works
- **Step 1 - Enroll Early:** Join while your record is clean. Membership must be active before any violation occurs to be eligible for member assistance.
- **Step 2 - Stay Informed:** Access our library of compliance training and receive regular industry updates to stay fully informed of DOT rules.
- **Step 3 - Get Support:** If an eligible violation occurs, we activate member assistance, providing SAP navigation and return-to-duty guidance.

## Eligibility & Limitations

- **Preventive Timing Rule:** Membership must begin before a DOT drug or alcohol violation or refusal occurs
- **Waiting Period:** Return-to-duty benefits become available after 90 consecutive days of active membership
- **Annual vs Monthly:** Paying annually does not eliminate the waiting period
- **Benefit Frequency:** Once during each applicable 12-month benefit period

## Prohibited Language

The following terms/claims are explicitly NOT to be used anywhere on the site:

- ❌ Coverage / Claims / Policy / Premium
- ❌ Recovery plan
- ❌ Clean record (used only in "join while your record is clean")
- ❌ Fully compliant (changed to "fully informed")
- ❌ Strictly confidential (changed to "confidential")
- ❌ Immediate activation
- ❌ Priority 24/7 support
- ❌ Thousands of drivers
- ❌ Guaranteed employment
- ❌ Guaranteed return to work
- ❌ Starting at [price]
- ❌ Absolute confidentiality promises

## FAQ Content (Approved)

**Q: Who is eligible for the program?**
A: CDL drivers and other FMCSA-covered professionals may join before a DOT drug or alcohol violation or refusal occurs. Return-to-duty benefits become available after 90 consecutive days of active membership, subject to eligibility requirements and final membership terms.

**Q: Does this pay for my drug tests?**
A: The program covers practice tests and RTD educational materials. Costs for official employer-mandated tests or legal fees are not included.

**Q: Is my information confidential?**
A: Your membership and any inquiries you make are confidential and are not reported to your employer or any federal databases.

## Final CTA Section

- **Headline:** "Secure your career today."
- **Description:** "Join professional drivers who trust DOT Career Protection to safeguard their future on the road."
- **CTA Button:** "Start Your Protection Now"

## Technical Implementation

- **Configuration File:** `website/src/config.ts`
- **Hero Image:** Locally saved at `website/src/assets/hero-driver.jpg` (219 KB)
- **Styling:** Tailwind CSS (v4+) with local configuration
- **Image Import:** React import of asset, applied to hero section

## Enforcement

Any future changes to:
- Pricing
- Brand messaging
- Eligibility language
- Approved claims or disclaimers

...require explicit owner approval before implementation.

Changes to the centralized config (`website/src/config.ts`) require update to this lock document.
