# Eco Track — Daily Carbon Log

A carbon footprint tracker built using Google Forms, Google Sheets, 
and Google Data Studio, with automated email reports via Apps Script.

## Features
- Google Form collects daily transport, electricity, meal, and water-waste data
- Google Sheets calculates Carbon Count per response using weighted emission factors
- Live dashboard (Data Studio) with leaderboard, device usage, and meal breakdown
- Apps Script auto-emails each user their Carbon Count, rank, and a PDF alert if over the limit

## Links
- [Live Form](https://docs.google.com/forms/d/e/1FAIpQLSfcVKZRBUbHU6XKTWXiF9yrsqddI06qFrh_4Ww5J7_Y_iCX5w/viewform?usp=dialog)
- [Live Dashboard](https://datastudio.google.com/reporting/123deedb-22ca-48da-a67b-f1b7a8340185)

## Tech Stack
- Google Forms
- Google Sheets (formulas: SUMPRODUCT, INDEX/MATCH, IFERROR)
- Google Data Studio (Looker Studio)
- Google Apps Script (JavaScript)

## Apps Script
See `carbon-email-script.js` for the automation that emails 
each respondent their result and generates a PDF alert for 
high-carbon submissions.
## Environment Report Tracker

A lifecycle tracking system for environment reports, built for the 
Environmental Sustainability track (Algolympia 2026, Team Tech Rangers).

### Features
- Add environment reports (category, location, severity, description)
- Status lifecycle: New → In Review → Action Taken → Resolved
- Persisted status with a visible history timeline per report
- Category filtering and keyword search
- Sample report seeded for demo purposes
-- Severity filtering with reset, plus category and status breakdown summary

### Live Demo
[Open Environment Report Tracker](https://pranshushikhar.github.io/eco-track-carbon-log/environment-report-tracker.html)

### Tech Stack
Single-file HTML/CSS/JavaScript app using browser localStorage for 
persistence — no backend or database required.
