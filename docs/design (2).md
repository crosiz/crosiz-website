# Crosiz — Design System v2
> Results-first agency. Dark, editorial, human. Inspired by Devsinc + Bigfolio.
> NOT AI-looking. Every section earns its place.

---

## Philosophy

Big agencies don't sell technology. They sell outcomes.
Every headline, button, and section must answer:
"What does the CLIENT get?"

Bad:  "AI Integration Services"
Good: "Cut manual work by 80% with intelligent automation"

Bad:  "Custom Software Development"
Good: "We build platforms that scale to millions of users"

---

## Brand Colors

```css
:root {
  /* Backgrounds */
  --bg:           #080808;
  --bg-2:         #0d0d0d;
  --bg-3:         #111111;
  --bg-card:      #0f0f0f;
  --bg-nav:       rgba(8, 8, 8, 0.85);
  --border:       #1c1c1c;
  --border-hover: #2e2e2e;

  /* Crosiz Brand — swap these to your actual brand */
  --accent:       #00E5FF;   /* electric cyan */
  --accent-2:     #0066FF;   /* deep blue secondary */
  --accent-dim:   rgba(0, 229, 255, 0.08);
  --accent-glow:  rgba(0, 229, 255, 0.15);

  /* Text */
  --text-1:  #F0F0F0;
  --text-2:  #888888;
  --text-3:  #444444;
  --text-inv: #080808;

  /* Status */
  --green:  #00D26A;
  --red:    #FF4D4D;
  --yellow: #FFB800;
}
```

---

## Typography

```css
/* In app/layout.tsx via next/font/google */
Syne       — weights 400 600 700 800  → all headings
DM Sans    — weights 300 400 500      → body, UI
JetBrains Mono — 400 500             → code blocks, tags, labels
```

### Type Scale
--text-hero:  clamp(3.5rem, 9vw, 8rem)   weight 800  leading 0.92
--text-h1:    clamp(2.5rem, 5vw, 4.5rem) weight 700  leading 0.95
--text-h2:    clamp(1.75rem, 3vw, 2.5rem) weight 700
--text-h3:    1.25rem                     weight 600
--text-body:  1rem                        weight 400  leading 1.75
--text-sm:    0.875rem                    leading 1.6
--text-xs:    0.75rem   font: JetBrains  tracking 0.08em uppercase

### Typographic Rules
- Hero lines break intentionally at 2–3 words per line on desktop
- Labels always: JetBrains Mono + uppercase + 0.1em tracking + var(--text-2)
- Never bold body text unless it's a stat or key term
- Section numbers: Syne, huge, 10–15% opacity, absolute positioned

---

## Spacing
--sp-1:  0.25rem   4px
--sp-2:  0.5rem    8px
--sp-3:  0.75rem   12px
--sp-4:  1rem      16px
--sp-6:  1.5rem    24px
--sp-8:  2rem      32px
--sp-12: 3rem      48px
--sp-16: 4rem      64px
--sp-24: 6rem      96px
--sp-32: 8rem      128px
--sp-section: clamp(5rem, 10vw, 9rem)  ← section vertical padding
--container: 1320px
--gutter: clamp(1.25rem, 5vw, 4rem)

---

## Animations

```css
--ease:       cubic-bezier(0.16, 1, 0.3, 1);
--ease-in:    cubic-bezier(0.7, 0, 0.84, 0);
--ease-back:  cubic-bezier(0.34, 1.56, 0.64, 1);
--fast:   150ms
--mid:    350ms
--slow:   600ms
--slower: 900ms
```

### Rules
- Page load: staggered fade-up (label → headline → sub → buttons)
- Scroll: opacity 0→1 + translateY 32→0, threshold 0.12
- Hover on cards: translateY(-4px) + border brightens
- Mega menu: slides down with opacity + scale(0.98→1)
- Never animate things that don't need it
- No bounce on serious elements (cards, forms)

---

## Component Visual Rules

### Buttons
Primary:  bg var(--accent) | text var(--text-inv) | px 1.75rem py 0.875rem | radius 4px | no shadow
Ghost:    border 1px var(--border-hover) | text var(--text-1) | same sizing
hover: border var(--accent) + text var(--accent)
Small:    px 1rem py 0.5rem | text-xs

### Tags / Pills
bg: var(--bg-3) | border: 1px var(--border) | radius: 3px
font: JetBrains Mono | text-xs uppercase | px 0.625rem py 0.25rem
color: var(--text-2) | hover: border var(--accent) | color var(--accent)

### Cards
bg: var(--bg-card) | border: 1px var(--border) | radius: 8px
hover: border-color var(--border-hover) + translateY(-3px)
transition: 300ms var(--ease)
inner padding: 1.75rem

### Section Labels (above every section title)
JetBrains Mono | uppercase | text-xs | color var(--accent)
letter-spacing: 0.12em | margin-bottom: 1rem

---

## What Makes It NOT Look AI

1. Use real, specific copy — no "cutting-edge solutions"
2. Uneven grid layouts — not everything 3-col equal
3. Big section numbers in the background (faded)
4. Lines/dividers that bleed edge-to-edge
5. Typography does the work — minimal icons
6. Whitespace is intentional, not padding-happy
7. Avoid rounded corners > 8px on "serious" elements
8. No gradient buttons
9. No purple-on-white anything
10. Every image has a real purpose