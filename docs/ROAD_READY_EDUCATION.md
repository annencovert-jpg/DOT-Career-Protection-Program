# Road Ready education preview

Owner direction, 2026-11-25: add a resource and prevention education page to the Firebase preview of the approved Stitch design. Preserve main and the approved Stitch source branch. This preview branch, `stitch-road-ready-education`, starts from `stitch-direct-homepage-port`. It does not alter the current domain, DNS, payments, benefit terms, or enrollment.

## What is present

- Homepage Resources links for desktop, mobile and footer.
- Static Vite public assets in `website/public/education/`. Direct links `/education/`, `/education/#wheel`, and `/education/#january` through `#december` are suitable for future newsletters.
- Six areas, 18 self-reflection questions, radial displays of confirmed protective habits, a textual equivalent, unanswered and not-applicable handling, and a suggested action. These are not risk scores or fitness determinations.
- Twelve brief education modules, practical activity choices and feedback-based knowledge checks. Topic filters and quiz progress are local page state only.
- Preview of annual participation badge after 12 correct knowledge checks in the current session. This is an illustration, not a downloadable/verified credential. No membership record, login, persistence, submission, medical data, analytics, or email enrollment.
- External resources and regulatory sources were reviewed through official agency pages on 2026-11-25; see links per lesson in curriculum.js. Review before public launch and periodically as rules change.

## Later decisions

A real dated downloadable annual completion badge and renewal, if approved, should require a separate optional member participation record, verified identity, accurate completion rules, privacy review, and data minimization. Completion must never be required for membership benefits. A badge should communicate educational participation, not compliance, medical status, test results, safety certification, or job eligibility. Newsletter campaign content and topic preferences at signup are separate future integration work.

## Deploy to preview hosting

Build the pinned branch using the existing Vite build and Firebase project `dot-career-protection-program`. Keep the Firebase preview noindex/nofollow and do not connect the production domain. Verify /education/ and homepage links after release. Do not merge into main automatically.

## Review v2

Preserves preview v1 and the original Stitch branch. Six directly labeled wheel areas have 18 fixed question slots with color and symbols for practiced, working on, unanswered and not applicable; all have a text equivalent, exact per-question status and totals. No safety rating or test outcome prediction. Every monthly lesson now includes four or more educational sections and three authored knowledge questions with answer-specific feedback. All three correct answers are required for a monthly knowledge check to count; editing an answer updates completion. The annual sample remains only a session demonstration, no identity verification or data collection. Firebase preview deployment requires the owner's review/approval; no DNS or payment changes.
