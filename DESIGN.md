---
version: alpha
name: "Healthy Life: Blue Theme"
description: >-
  A light, editorial design system for one-cause websites: consumer campaigns, open letters,
  case files, petitions and explainers that must read as calm, factual and trustworthy.
  Taken from the live site sonybravia.com, which was designed and built with AI.
colors:
  primary: "#2563EB"
  primary-strong: "#1D4ED8"
  primary-ink: "#1E40AF"
  primary-soft: "#EFF6FF"
  primary-soft-2: "#DBEAFE"
  primary-border: "#BFDBFE"
  on-primary: "#FFFFFF"
  primary-bright: "#60A5FA"
  secondary: "#0D1117"
  on-secondary: "#FFFFFF"
  neutral: "#FFFFFF"
  surface: "#FFFFFF"
  surface-2: "#FBFCFD"
  surface-muted: "#F7F8FA"
  surface-sunken: "#F2F4F7"
  on-surface: "#363C47"
  on-surface-strong: "#0D1117"
  on-surface-variant: "#5B6472"
  on-surface-muted: "#697382"
  outline: "#E7EAEF"
  outline-strong: "#D6DBE3"
  error: "#D61F26"
  on-error: "#FFFFFF"
typography:
  headline-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 60px
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: -0.035em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 47px
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: -0.035em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 29px
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: -0.035em
  stat-number:
    fontFamily: Plus Jakarta Sans
    fontSize: 52px
    fontWeight: 800
    lineHeight: 1
    letterSpacing: -0.035em
    fontFeature: '"tnum" 1'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.72
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.72
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13.5px
    fontWeight: 500
    lineHeight: 1.5
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.16em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.16em
rounded:
  sm: 12px
  md: 18px
  lg: 26px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  section: 148px
  section-min: 84px
  shell: 1180px
  shell-narrow: 880px
  gutter: 40px
  gutter-min: 20px
components:
  page:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
  text-selection:
    backgroundColor: "{colors.primary-soft-2}"
    textColor: "{colors.primary-ink}"
  divider:
    backgroundColor: "{colors.outline}"
    height: 1px
  divider-strong:
    backgroundColor: "{colors.outline-strong}"
    height: 1px
  divider-accent:
    backgroundColor: "{colors.primary-border}"
    height: 1px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  button-primary-hover:
    backgroundColor: "{colors.primary-strong}"
  button-dark:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 10px 20px
  button-dark-hover:
    backgroundColor: "{colors.primary}"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-strong}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  button-ghost-hover:
    backgroundColor: "{colors.surface-muted}"
  pill-label:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-ink}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 6px 14px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 32px
  card-nested:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: 20px
  card-callout:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-ink}"
    rounded: "{rounded.md}"
    padding: 28px
  stat-cell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-strong}"
    typography: "{typography.stat-number}"
    padding: 28px
  stat-cell-hot:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.stat-number}"
  section-dark:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    padding: 148px
  headline-card:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary-bright}"
    rounded: "{rounded.lg}"
    padding: 48px
  ticker:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-ink}"
    typography: "{typography.label-sm}"
    padding: 12px
  header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    height: 72px
  input:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.on-surface-strong}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    height: 44px
    padding: 0px 14px
  footer:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.body-sm}"
    padding: 64px
---

# Healthy Life: Blue Theme

## Overview

A calm, factual, editorial look for websites built around one cause: a consumer campaign, an
open letter, a case file, a petition or a long explainer. It must feel trustworthy and serious
without being heavy, so the reader keeps scrolling and believes what they read.

White pages, near-black ink headlines in a heavy geometric sans, one blue accent, small
uppercase monospace labels, soft rounded cards and a lot of air. Every section follows the same
stack: a mono pill label, a heavy headline, one lead paragraph, then evidence (numbers, dates,
documents) in cards. Sections alternate white, muted grey and dark ink to give a long read a
rhythm without adding colours. Light theme only.
