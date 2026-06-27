# MASTER BUILD PROMPT

## DOT Career Protection Program Website — Phase 1

Build a new public website for the **DOT Career Protection Program** using the existing domain **49CFR40.com**.

The new website will replace the current website completely. The old design, architecture, and code do not need to be preserved.

The existing website at `https://49cfr40.com/` may be reviewed as a source of existing ideas, services, background information, and intended content. Do not copy the old wording blindly. Extract useful content, rewrite it clearly, remove outdated material, and flag claims that need verification.

The website should be built as a new GitHub-hosted code project, similar to an existing React/Vite web application workflow. Use Google Stitch for initial visual design and page concepts, then implement the approved design in code.

Do not change the live domain, DNS, or current hosting during this build. Build and test the replacement at a temporary preview address. Domain connection and launch will happen later.

---

# PART 1 — APPROVED BUSINESS DECISIONS

Treat the following decisions as approved unless a genuine technical contradiction is found.

## Public Brand

Primary public brand:

**DOT Career Protection Program**

Domain:

**49CFR40.com**

Use the domain as a supporting identity rather than the dominant public brand.

Recommended treatment:

* Header/logo: DOT Career Protection Program
* Browser title: DOT Career Protection Program | 49CFR40.com
* Footer: DOT Career Protection Program · 49CFR40.com
* Public domain: 49cfr40.com

Do not design the site as though “49 CFR 40” itself is the product name.

---

## Primary Website Goal

The primary goal is to sell membership in the DOT Career Protection Program.

The membership provides:

1. Preventive DOT drug-and-alcohol education.
2. Regular educational emails.
3. Defined benefits if an eligible member later experiences a DOT drug or alcohol violation.
4. General member support and next-step navigation.

The site should educate enough to establish credibility, but it should not become a regulation encyclopedia.

The primary conversion actions are:

* Join monthly.
* Join annually.
* Review benefits.
* Review eligibility and limitations.

---

## Primary Audience

The main homepage should be written primarily for:

* CDL drivers.
* Commercial motor vehicle drivers.
* Other FMCSA-covered safety-sensitive workers.

Use practical worker-facing language.

Do not place this statement anywhere on the site:

> Launching first for CDL drivers and other FMCSA-covered workers. Additional DOT industries may be added later.

---

## Secondary DOT Audience Page

Create a separate landing page for other DOT safety-sensitive workers.

Suggested URL:

`/dot-workers`

This page may speak to workers covered by other DOT agencies, such as:

* Aviation.
* Public transportation.
* Rail.
* Pipeline.
* Maritime.
* Other DOT-regulated safety-sensitive roles.

The page should use broader DOT-worker examples rather than trucking-only examples.

It should contain its own:

* Hero section.
* Audience-specific explanation.
* Benefit summary.
* Eligibility explanation.
* Frequently asked questions.
* Join buttons.

The page may be sent directly to those audiences in outreach campaigns.

Do not present these workers as an afterthought.

Add a discreet “Other DOT workers” link in the website footer. It does not need to occupy a prominent place in the main navigation.

---

# PART 2 — MEMBERSHIP STRUCTURE

## Price

Use the following Phase 1 pricing:

* Monthly membership: **$8 per month**
* Annual prepaid membership: **$90 per year**

Display that annual membership provides a small savings.

Store pricing in one centralized configuration file so it can be changed later without editing multiple pages.

Do not hard-code prices repeatedly throughout the application.

---

## Enrollment Timing

A person must join before a DOT drug or alcohol violation occurs.

A member may not enroll after an existing violation and use benefits for that violation.

The controlling date is the date of the violation or refusal, not:

* The date the worker discovers the violation.
* The date it is entered into a database.
* The date the worker contacts a SAP.
* The date the worker schedules an evaluation.

Explain this plainly and prominently.

---

## Waiting Period

RTD-related benefits become available after **90 consecutive days of active membership**.

A violation occurring during the initial 90-day waiting period is not eligible for paid RTD benefits.

Preventive education and ordinary member communications may begin immediately.

Paying annually does not eliminate the waiting period.

---

## Benefit Frequency

Eligible RTD benefits may be used once during each applicable 12-month benefit period.

Use plain language and make the detailed calculation subject to the final membership terms.

Do not describe the benefit as unlimited.

---

## Education Participation

Educational activities are optional.

Do not require:

* Email opens.
* Quiz completion.
* Monthly activity completion.
* Course participation as a condition of eligibility.

HubSpot may periodically send:

* Self-check questionnaires.
* Brief quizzes.
* Safety-reflection exercises.
* Risk-awareness checkups.
* Educational reminders.

These are intended to help members evaluate their own safety and decision-making. They are not conditions for receiving benefits.

This operational detail does not need prominent website treatment.

---

# PART 3 — INCLUDED MEMBERSHIP BENEFITS

Present benefits clearly while repeatedly stating that eligibility requirements and program terms apply.

## Preventive Education

Members receive regular educational emails intended to help them:

* Better understand DOT drug and alcohol rules.
* Recognize common risk patterns.
* Avoid preventable violations.
* Understand refusals and testing requirements.
* Think more accurately about timing, alcohol, medications, cannabis, stimulants, and testing decisions.
* Avoid the belief that a previous violation guarantees another violation can never happen.

The tone should not assume that members are irresponsible or have a substance-use disorder.

The core insight is:

> A person can sincerely believe, “That will never happen to me again,” and still face another violation because violations are not caused only by deliberate drug use or obvious impairment.

Show realistic risks without using panic, shame, or exaggerated fear.

---

## SAP Benefit

Provisionally include:

> One standard DOT SAP service package through an approved participating provider.

The provisional package may include:

* One initial SAP evaluation.
* The SAP’s education and/or treatment recommendation.
* Routine administrative coordination.
* Review of permitted completion documentation.
* One follow-up SAP evaluation.
* Standard required SAP reporting.

Clearly state that:

* The SAP controls the professional recommendation.
* The program does not guarantee a favorable SAP decision.
* Treatment costs are not automatically included.
* Additional evaluations may not be included.
* Missed-appointment charges may not be included.
* The exact provider package remains subject to membership terms.

Build this language so the details can be edited later.

Do not promise reimbursement for any SAP chosen by the member.

---

## Return-to-Duty Test

Include payment for:

> One eligible return-to-duty test.

The test must be properly ordered or authorized through the applicable DOT process and completed through an approved arrangement.

Do not imply that the benefit includes:

* Follow-up tests.
* Random tests.
* Pre-employment tests.
* Post-accident tests.
* Reasonable-suspicion tests.
* Testing for a separate violation.
* Unlimited retesting.

---

## Courses

Include:

> Up to three eligible return-to-duty education courses.

Potential course topics may include:

* Return-to-duty process education.
* Cannabis education.
* Stimulant education.
* Alcohol education.
* Refusal and testing-process education.

Do not publicly present Safe Start Institute as a separate brand.

The courses should appear to members as part of the DOT Career Protection Program benefit.

Do not claim that an included course replaces treatment or any outside provider specifically required by the SAP.

---

## Member Support

Use this approved description:

> Member support for general program questions, educational resources, and next-step navigation during regular business hours.

Explicitly exclude:

* Legal advice.
* Medical advice.
* Employer representation.
* Guaranteed immediate response.
* Interpretation of an individual laboratory or test result.
* SAP decision-making.
* A guarantee of employment, reinstatement, licensing, or return to duty.

Do not call this unlimited consulting.

---

## Career and Second-Chance Resources

Create flexible provisional language.

The program may provide:

* General career resources.
* Educational information.
* Links to relevant outside resources.
* Referrals when appropriate.
* Information for workers trying to understand next steps.

Do not promise:

* Job placement.
* A guaranteed employer referral.
* Access to a guaranteed employer network.
* Employment after a violation.
* Career counseling unless that service is actually established.

Treat this as a resource, not a promised benefit.

---

# PART 4 — PHASE 1 OPERATING MODEL

There is no member dashboard in Phase 1.

The Phase 1 enrollment workflow is:

1. Visitor reviews benefits and terms.
2. Visitor selects monthly or annual membership.
3. Visitor completes hosted checkout.
4. Contact and membership information are sent to HubSpot.
5. HubSpot sends onboarding and welcome emails.
6. HubSpot begins monthly educational emails.
7. Benefits are administered manually.
8. Member assistance is handled through forms, email, and phone support.

Do not build:

* Member login.
* Member portal.
* Benefit balance dashboard.
* Private course library.
* Document vault.
* Clinical record system.
* Violation case-management system.

These may be considered later.

---

## Checkout Integration

Keep checkout provider-agnostic initially.

Create configuration values for:

* Monthly checkout URL.
* Annual checkout URL.
* Post-checkout redirect URL.
* HubSpot form or workflow identifiers.

Use placeholder URLs until a payment provider is selected.

The buttons must be easy to connect later to:

* Stripe Checkout.
* HubSpot payment links.
* Another hosted payment service.

Do not build a custom payment form.

---

## HubSpot Integration

Prepare the site for HubSpot.

HubSpot will manage:

* New contacts.
* Membership onboarding.
* Monthly educational emails.
* Welcome emails.
* Membership-related forms.
* Contact segmentation.
* Basic member communication.
* Manual benefit-support workflows.

Create integration placeholders and documentation showing where HubSpot forms or scripts will be inserted.

Do not expose private API keys in browser code or commit secrets to GitHub.

---

## Benefit Request Form

Create a simple hidden or secondary page that can be linked from member emails.

Suggested URL:

`/member-help`

The form may collect only the minimum information needed to begin contact:

* Member name.
* Membership email.
* Phone number.
* General category of assistance requested.
* Preferred contact method.
* Short non-clinical explanation.

Do not collect through the public website form:

* Clinical records.
* Treatment records.
* Laboratory reports.
* Detailed drug-use histories.
* Medical information.
* SAP reports.
* Employer documents.
* Uploaded violation documents.

Tell members that a staff member will contact them regarding the appropriate next step.

---

# PART 5 — WEBSITE ARCHITECTURE

Create the following pages.

## 1. Home

Primary audience: CDL drivers and FMCSA workers.

Recommended sections:

1. Header and navigation.
2. Hero.
3. Core problem.
4. Why another violation can happen even when someone believes it never will.
5. Preventive education benefit.
6. RTD financial and service benefits.
7. How membership works.
8. 90-day waiting-period explanation.
9. Pricing.
10. Member support.
11. Five public educational resources.
12. Frequently asked questions.
13. Final join call to action.
14. Footer.

Recommended hero direction:

**Protect the career you worked to build.**

Supporting concept:

DOT violations can happen through more than intentional drug use or obvious impairment. Membership provides ongoing education now and defined support if an eligible violation happens later.

Primary CTA:

**Join for $8/month**

Secondary CTA:

**See What Membership Includes**

Avoid claims that the program prevents every violation or guarantees a return to work.

---

## 2. Other DOT Workers Landing Page

URL:

`/dot-workers`

Adapt the homepage message for non-FMCSA DOT workers.

Avoid trucking-exclusive wording.

Use relevant categories without becoming overly technical.

Provide the same membership prices and general benefits, subject to applicable program terms.

---

## 3. How It Works

Explain:

1. Join before a violation.
2. Begin receiving preventive education.
3. Maintain active membership.
4. Complete the 90-day waiting period.
5. Contact the program if an eligible violation occurs.
6. Eligibility is reviewed.
7. Approved benefits are coordinated manually.

Include a visual timeline.

---

## 4. Membership Benefits

Provide a clear benefit breakdown:

* Preventive educational emails.
* General member support.
* One approved SAP package.
* One eligible RTD test.
* Up to three eligible courses.
* Career and next-step resources.

Separate:

* Included.
* Not included.
* Subject to eligibility.

---

## 5. Eligibility and Limitations

This page must be easy to understand.

Explain:

* Join-before-violation rule.
* 90-day waiting period.
* Active-payment requirement.
* Once-per-12-month limitation.
* Approved-provider requirement.
* No guarantee of employment or SAP outcome.
* General exclusions.
* Cancellation and re-enrollment rules as editable placeholders.
* Full membership terms control when details conflict.

Do not hide material limitations only in the legal footer.

---

## 6. Education and Resources

Create a resource library with the ability to add articles easily.

The initial public resource library should contain approximately five useful articles.

Suggested articles:

1. What 49 CFR Part 40 Means for CDL Drivers.
2. What Happens After a DOT Drug or Alcohol Violation.
3. Why Joining After a Violation Is Too Late for Membership Benefits.
4. Refusal: Why It Can Trigger the Same Return-to-Duty Process.
5. Why “It Will Never Happen Again” Is Not a Safety Plan.

Do not build a paid article paywall in Phase 1.

Members receive ongoing education through email.

The public resource library is intended to:

* Establish trust.
* Answer common questions.
* Support search visibility.
* Lead readers toward membership.

---

## 7. Employer and Team Training

Create a separate page.

Possible services may include:

* DOT drug and alcohol awareness education.
* Workforce education.
* Safety-oriented team education.
* Custom educational sessions.
* General employer resources.

Use a request-information form.

Do not let employer services dominate the worker membership message.

Do not promise training that has not been developed.

---

## 8. About

Use relevant information from the current website about:

*
* The program’s purpose.
*
* Why the program was created.
* The goal of helping workers prepare before a crisis occurs.

Rewrite the content professionally.

Do not copy exaggerated or unsupported claims.

Keep the focus on credibility, practical experience, and worker education.

---

## 9. Frequently Asked Questions

Include questions such as:

* Can I join after a violation?
* Why is there a 90-day waiting period?
* What happens immediately after I join?
* Is education required?
* What SAP services are included?
* Can I choose any SAP?
* Is treatment included?
* How many tests are included?
* Are follow-up tests included?
* Are courses included?
* Does membership guarantee I keep my job?
* Is this legal or medical advice?
* Can workers outside trucking join?
* What happens if I cancel?
* How do I request help?

Answers must be plain, direct, and editable.

---

## 10. Contact

Include:

* General inquiry form.
* Phone contact placeholder.
* Email contact placeholder.
* Business-hours language.
* Employer-training inquiry option.
* Member-help link.

Do not invite users to submit confidential clinical or test information.

---

## 11. Join

Create:

* Monthly membership card.
* Annual membership card.
* Benefit summary.
* Waiting-period notice.
* Join-before-violation notice.
* Automatic-renewal disclosure placeholder.
* Cancellation-policy placeholder.
* Links to full membership terms.
* Configurable checkout buttons.

The material conditions must appear before the checkout buttons.

---

## 12. Welcome Page

Suggested URL:

`/welcome`

Explain:

* Enrollment received.
* Check email for confirmation.
* Add the sender to contacts.
* Educational emails will begin.
* Membership benefits are subject to eligibility and waiting-period rules.
* How to contact member support.
* How to update contact information.

---

## 13. Legal and Policy Pages

Create editable draft pages for:

* Privacy Policy.
* Terms of Use.
* Membership Terms.
* Payment and Cancellation Terms.
* Accessibility Statement.
* Disclaimer.

Mark them clearly as drafts requiring final business and legal review before live enrollment.

Do not invent legal assurances.

---

# PART 6 — CONTENT STRATEGY

## Voice

Use:

* Direct language.
* Worker-first explanations.
* Short paragraphs.
* Calm, practical language.
* Respectful treatment of workers.
* Clear limitations.
* Strong calls to action without manipulation.

Avoid:

* Government-agency tone.
* Dense regulatory language.
* Shame.
* Scare tactics.
* Moral judgment.
* Claims that every violation reflects addiction.
* Claims that every violation is accidental.
* Promises of guaranteed employment.
* Statements that the membership guarantees compliance.

---

## Main Emotional Insight

The website should challenge this belief:

> “I already learned my lesson. I will never have another violation.”

Do not attack or mock that belief.

Explain that another violation can still arise from:

* Misunderstanding testing instructions.
* A refusal.
* Timing errors.
* Alcohol remaining in the body.
* Medication decisions.
* Cannabis assumptions.
* Missed calls or administrative failures.
* Overconfidence.
* Incomplete knowledge of DOT rules.
* A new lapse during stress or disruption.

The message should be:

> Confidence is not the same as preparation.

The membership exists to provide continued education and a defined support structure before another problem occurs.

---

## Regulatory Accuracy

Before publishing legal or regulatory claims:

1. Verify them against current official DOT and applicable agency sources.
2. Record the source URL and date verified.
3. Avoid broad claims that differ across DOT agencies.
4. Separate FMCSA-specific information from general DOT information.
5. Use plain-language summaries without changing the legal meaning.
6. Flag any claim that cannot be confirmed.

Do not rely solely on the current website for regulatory claims.

---

# PART 7 — GOOGLE STITCH DESIGN PROCESS

Use Google Stitch to create the initial design direction.

## Stitch Prompt 1 — Design System

Create a responsive design system for a public membership website called **DOT Career Protection Program**.

The website serves CDL drivers, FMCSA-covered workers, and other DOT safety-sensitive workers.

The visual style should be:

* Professional.
* Protective.
* Practical.
* Modern.
* Trustworthy.
* Mobile-first.
* Easy to read in a truck cab, break room, or on a phone.
* Distinct from a government website.
* Distinct from an insurance company.
* Calm rather than fear-driven.

Use:

* Dark navy.
* Slate.
* White.
* A restrained safety-orange accent.
* Large readable typography.
* Strong contrast.
* Generous spacing.
* Clear cards.
* Simple icons.
* Rounded elements used moderately.
* Clear primary and secondary buttons.

Avoid:

* Police lights.
* Handcuffs.
* Crashes.
* Frightened workers.
* Drug imagery.
* Government seals.
* Fake badges.
* Overused shield graphics.
* Dense dashboards.
* Corporate stock-photo clichés.

Create:

* Typography scale.
* Color tokens.
* Button styles.
* Form styles.
* Benefit cards.
* Pricing cards.
* FAQ accordion.
* Timeline component.
* Resource/article cards.
* Warning and disclosure boxes.
* Header.
* Footer.
* Mobile navigation.

---

## Stitch Prompt 2 — FMCSA Homepage

Design a complete mobile-first homepage for **DOT Career Protection Program**.

Primary audience:

CDL drivers and FMCSA-covered workers.

Primary goal:

Sell an $8-per-month or $90-per-year membership that provides preventive educational emails and defined return-to-duty benefits, subject to eligibility.

Include:

* Clear hero.
* Primary join button.
* Benefit overview.
* Explanation that a future violation can happen even when someone believes it never will.
* How-it-works timeline.
* 90-day waiting-period disclosure.
* Join-before-violation disclosure.
* SAP package.
* One RTD test.
* Up to three courses.
* Member support.
* Pricing.
* Five educational resource cards.
* FAQ preview.
* Final CTA.
* Professional footer.

The page should feel trustworthy and practical, not punitive or alarmist.

---

## Stitch Prompt 3 — Other DOT Workers Page

Create a second landing page matching the same design system.

Audience:

DOT safety-sensitive workers outside FMCSA, including aviation, transit, rail, pipeline, and maritime workers.

Use broader transportation imagery and examples.

Do not describe these workers as a later or secondary audience.

Retain the same membership structure and clear eligibility disclosures.

---

## Stitch Prompt 4 — Interior Pages

Design consistent layouts for:

* How It Works.
* Membership Benefits.
* Eligibility and Limitations.
* Education and Resources.
* Employer and Team Training.
* About.
* FAQ.
* Contact.
* Join.
* Welcome.
* Member Help.

Ensure all pages have strong mobile layouts.

---

## Stitch Prompt 5 — Mobile Review

Review all generated designs at mobile widths.

Correct:

* Oversized hero text.
* Crowded pricing cards.
* Long lines of text.
* Hard-to-tap buttons.
* Hidden disclosures.
* Navigation problems.
* Forms that require excessive typing.
* Horizontal overflow.
* Weak contrast.

The primary build target is mobile.

---

# PART 8 — TECHNICAL BUILD

## Recommended Stack

Use:

* React.
* Vite.
* TypeScript.
* React Router.
* Semantic HTML.
* CSS modules, Tailwind, or another maintainable styling system.
* GitHub repository.
* Automated preview deployment.
* Firebase Hosting, Cloudflare Pages, or another static host compatible with the project.

Prefer the simplest maintainable architecture.

Do not add a backend unless a confirmed requirement demands one.

---

## Repository Structure

Create a clean structure similar to:

* `src/components`
* `src/pages`
* `src/layouts`
* `src/content`
* `src/content/resources`
* `src/config`
* `src/styles`
* `src/lib`
* `public/images`
* `public/icons`
* `docs`

Create centralized configuration for:

* Brand name.
* Domain.
* Monthly price.
* Annual price.
* Phone.
* Email.
* Business hours.
* Checkout URLs.
* HubSpot identifiers.
* Social links.
* Legal-page status.

---

## Resource Publishing System

Build a simple content system for articles.

Preferred Phase 1 method:

* Markdown or MDX files.
* Frontmatter for title, description, publication date, author, topic, and SEO information.
* Automatic resource-index generation.
* Reusable article layout.
* Easy instructions for adding a new article.

Do not build a custom CMS in Phase 1.

Document the process so a new resource can be added by:

1. Copying a template file.
2. Updating frontmatter.
3. Writing the content.
4. Committing the file.
5. Allowing the site to redeploy.

---

## Forms

Create accessible form components for:

* Contact.
* Employer training.
* Member help.
* General interest or email signup.

Prepare them for HubSpot embed or submission integration.

Use:

* Labels.
* Validation.
* Clear error messages.
* Confirmation messages.
* Spam protection placeholder.
* Privacy notice.

Do not store form submissions in the browser.

---

# PART 9 — SEARCH AND DISCOVERABILITY

Create search-friendly pages without keyword stuffing.

Use page titles and descriptions focused on actual worker questions.

Examples:

* DOT Career Protection Membership for CDL Drivers.
* What Happens After a DOT Drug Test Violation?
* DOT SAP and Return-to-Duty Support.
* 49 CFR Part 40 Help for CDL Drivers.
* DOT Drug and Alcohol Education for Safety-Sensitive Workers.

Implement:

* Unique page titles.
* Meta descriptions.
* Canonical URLs.
* Open Graph metadata.
* Social preview images.
* Sitemap.
* Robots file.
* Structured data where appropriate.
* Clean URLs.
* Article metadata.
* Internal links.
* Custom 404 page.

Do not assume the domain alone will produce search traffic.

---

# PART 10 — ACCESSIBILITY AND QUALITY

Meet strong accessibility standards.

Include:

* Keyboard navigation.
* Visible focus states.
* Semantic headings.
* Form labels.
* Sufficient contrast.
* Descriptive links.
* Alt text.
* Reduced-motion support.
* Accessible accordions.
* Accessible mobile menu.
* Screen-reader-friendly disclosures.

Test at minimum:

* Small phone.
* Large phone.
* Tablet.
* Chromebook or laptop.
* Large desktop.

Test:

* Navigation.
* Checkout placeholders.
* Forms.
* Resource pages.
* Error states.
* Mobile menu.
* Footer links.
* Long content.
* Pricing configuration.
* Direct access to `/dot-workers`.
* Direct access to `/member-help`.
* Refreshing routes on the selected host.

---

# PART 11 — CONTENT EXTRACTION FROM CURRENT SITE

Review the current website at:

`https://49cfr40.com/`

Create an inventory with these columns:

* Existing page or section.
* Existing idea.
* Keep.
* Rewrite.
* Remove.
* Verify.
* Destination on new site.
* Reason.

Preserve useful business intent, including where appropriate:

* Program purpose.
* Founder or team information.
* Education concepts.
* Membership ideas.
* Member assistance.
* Employer training.
* Career resources.

Remove or revise:

* Outdated dates.
* Empty pages.
* Broken downloads.
* Unsupported promises.
* Job-placement guarantees.
* Vague benefits.
* Overly broad regulatory statements.
* Duplicate material.
* Language inconsistent with the approved membership model.

Do not let the old website determine the new information architecture.

---

# PART 12 — REQUIRED BUILD OUTPUTS

Produce:

1. Current-site content inventory.
2. New sitemap.
3. Page-by-page content outline.
4. Brand and messaging guide.
5. Stitch design prompts.
6. Approved design-system specification.
7. React/Vite project.
8. Responsive pages.
9. Five initial public resource articles.
10. HubSpot integration placeholders.
11. Checkout-link placeholders.
12. Member-help form.
13. Employer-training form.
14. Legal-page drafts.
15. SEO metadata.
16. Accessibility review.
17. Testing checklist.
18. Preview deployment instructions.
19. Domain-launch plan for a later phase.
20. Plain-language README explaining how Anne can edit the site.

---

# PART 13 — EXECUTION ORDER

Execute in this order.

## Phase 1 — Audit

* Review the current site.
* Build the content inventory.
* Flag unsupported or uncertain claims.
* Identify missing content.

## Phase 2 — Strategy

* Finalize sitemap.
* Finalize brand treatment.
* Draft page messaging.
* Create conversion flow.
* Create the FMCSA and other-DOT audience paths.

## Phase 3 — Stitch Design

* Generate the design system.
* Generate homepage.
* Generate other-DOT landing page.
* Generate interior pages.
* Review mobile designs.
* Record design tokens and component decisions.

## Phase 4 — Repository Setup

* Create project.
* Configure TypeScript.
* Configure routing.
* Configure styles.
* Add centralized business configuration.
* Add reusable components.

## Phase 5 — Page Build

* Build all public pages.
* Build resource library.
* Add five initial articles.
* Build forms.
* Add disclosures.
* Add responsive navigation and footer.

## Phase 6 — Integrations

* Add checkout URL placeholders.
* Add HubSpot placeholders.
* Add post-checkout welcome page.
* Add member-help workflow.
* Document remaining live-connection steps.

## Phase 7 — Quality Review

* Test mobile.
* Test accessibility.
* Test routing.
* Test forms.
* Test content accuracy.
* Review all promises and limitations.
* Confirm no private or clinical information is collected.

## Phase 8 — Preview

* Deploy to a temporary preview address.
* Do not point the live domain.
* Provide the preview URL.
* Provide a list of remaining launch decisions.

---

# PART 14 — IMPORTANT RESTRICTIONS

Do not:

* Connect the live domain yet.
* Cancel the current hosting.
* Activate real recurring payments without approval.
* Publish unreviewed membership terms.
* Promise job placement.
* Guarantee that a worker will return to duty.
* Guarantee continued employment.
* Guarantee a SAP outcome.
* Collect clinical information.
* Build a member dashboard.
* Build a custom payment system.
* Add unnecessary backend infrastructure.
* Use the old site’s design as the visual model.
* hide the 90-day waiting period.
* Hide the join-before-violation requirement.
* Make optional education appear mandatory.

When a detail remains undecided, place it in centralized configuration or clearly mark it for review rather than inventing a permanent rule.

Complete the new site as a polished Phase 1 preview that can later be connected to HubSpot, hosted checkout, and the existing 49CFR40.com domain.
