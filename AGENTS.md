# AGENTS.md

## Project

This repository is for the DOT Career Protection Program public website project for the planned domain `49CFR40.com`.

## Current Stage

The repository is currently in **Stage 0: repository foundation and documentation setup only**.

Do not build the website during Stage 0.

The project stage may change only when the owner explicitly authorizes the next stage. When that happens, update this section and any stage-specific restrictions before beginning the new work.

## Required Sources of Truth

Before planning or making changes, read:

1. `docs/MASTER_BUILD_SPEC.md`
2. `docs/DECISIONS.md`
3. `docs/OPEN_ITEMS.md`
4. Any additional documentation relevant to the requested task

`docs/MASTER_BUILD_SPEC.md` is the primary project specification.

A later approved entry in `docs/DECISIONS.md` may amend or replace an earlier instruction in the master specification only when the change is explicit.

Do not modify, summarize, replace, or reorganize `docs/MASTER_BUILD_SPEC.md` unless the owner specifically requests it.

Do not treat an item in `docs/OPEN_ITEMS.md` as an approved decision.

## Stage 0 Restrictions

Do not initialize or add:

* React
* Vite
* TypeScript
* Tailwind
* Firebase
* Cloudflare
* HubSpot
* Payment providers
* Hosting or DNS configuration
* Production-domain connections
* Secrets or credentials

Do not perform the current-site audit during Stage 0. Keep audit files as placeholders until the audit is explicitly authorized.

Do not begin design, content production, application development, integration work, or deployment during Stage 0.

## Decision and Documentation Rules

* Do not invent unresolved business, legal, pricing, eligibility, integration, benefit, cancellation, or operational decisions.
* Record unresolved matters in `docs/OPEN_ITEMS.md`.
* When the owner approves a material decision, record it in `docs/DECISIONS.md`.
* Identify when a new decision replaces or changes an earlier decision.
* Update affected planning documents after a decision changes.
* Do not leave contradictory active instructions across project documents.
* Clearly mark drafts, placeholders, assumptions, and items requiring legal or regulatory review.

## Content and Compliance Rules

* Keep the worker-facing tone calm, practical, direct, and respectful.
* Do not use shame, panic, or exaggerated fear.
* Do not promise job placement.
* Do not guarantee return to duty, continued employment, licensing, reinstatement, or a SAP outcome.
* Do not provide or imply legal or medical advice.
* Do not collect clinical, treatment, laboratory, medical, or SAP-report information through public website forms.
* Do not publish unverified regulatory claims as established facts.
* Do not publish draft legal documents as final.
* Do not hide material eligibility rules, exclusions, or waiting periods.

## Technical Rules

When development is later authorized:

* Prefer simple, maintainable architecture.
* Keep the website mobile-first.
* Use semantic and accessible HTML.
* Do not add a backend unless an approved requirement requires one.
* Store changeable business values in centralized configuration.
* Do not expose API keys, tokens, passwords, or private credentials.
* Do not commit `.env` files containing secrets.
* Do not activate production payments, hosting, DNS, or the production domain without explicit approval.

## Task Boundaries

* Work only on the stage and task requested.
* Do not silently expand the scope.
* Do not complete later phases early.
* Stop when the requested task is complete.
* Ask for owner review when a business decision is required rather than making the decision independently.

## Completion Report

At the end of each task, report:

* Files created
* Files modified
* Important decisions or assumptions
* Checks or tests completed
* Known limitations
* Unresolved questions
* Recommended next step

For future coding tasks, work is not complete until the relevant build, lint, tests, mobile review, and accessibility checks have been completed or any inability to complete them has been clearly reported.
