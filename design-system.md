# Design System — Finance Management UI

---

## Typography

### Font Stack

| Token          | Font           | Use Case                                                              |
| -------------- | -------------- | --------------------------------------------------------------------- |
| `font-sans`    | Geist          | Body text, labels, UI copy, descriptions, navigation                  |
| `font-heading` | Prata          | Page titles, section headers, hero text, card titles                  |
| `font-mono`    | JetBrains Mono | **All monetary values**, numbers, percentages, order IDs, dates, code |

### Why JetBrains Mono for Numbers?

Monospaced fonts assign equal width to every character, including digits. This means columns of numbers like `$40,199.05` and `$1,200.00` align perfectly vertically without any visual drift — critical for finance tables and dashboards. It also gives numbers a distinct, data-driven feel that separates them from prose copy.

### Usage Examples

```jsx
// Page / section heading
<h1 className="font-heading text-4xl font-normal">Dashboard</h1>

// Body / labels
<p className="font-sans text-sm text-muted-foreground">Total orders this month</p>

// Money value
<span className="font-mono text-3xl font-semibold">$40,199.05</span>

// Percentage change (positive)
<span className="font-mono text-sm font-medium text-primary">+15.11%</span>

// Percentage change (negative)
<span className="font-mono text-sm font-medium text-destructive">-4.51%</span>

// Order ID / reference
<span className="font-mono text-xs text-muted-foreground">#2999</span>

// Date range
<span className="font-mono text-sm">Feb 14, 2025 – Feb 20, 2025</span>
```

### Type Scale

| Class       | Size  | Usage                               |
| ----------- | ----- | ----------------------------------- |
| `text-xs`   | 12px  | Metadata, timestamps, IDs           |
| `text-sm`   | 14px  | Table cells, labels, secondary info |
| `text-base` | 16px  | Body text, descriptions             |
| `text-lg`   | 18px  | Card subtitles                      |
| `text-2xl`  | 24px  | Stat values (small), card titles    |
| `text-3xl`  | 30px  | Primary stat values                 |
| `text-4xl+` | 36px+ | Hero numbers, page titles           |

---

## Color

All colors use `oklch` for perceptually uniform lightness. Defined as CSS variables and mapped to Tailwind utilities.

### Core Palette

| Token                  | Tailwind Class                        | Usage                                             |
| ---------------------- | ------------------------------------- | ------------------------------------------------- |
| `--primary`            | `text-primary` / `bg-primary`         | Brand green, CTAs, active states, positive trends |
| `--primary-foreground` | `text-primary-foreground`             | Text on primary-colored backgrounds               |
| `--destructive`        | `text-destructive` / `bg-destructive` | Negative values, refunds, errors, losses          |
| `--foreground`         | `text-foreground`                     | Primary text                                      |
| `--muted-foreground`   | `text-muted-foreground`               | Secondary labels, descriptions, subtitles         |
| `--background`         | `bg-background`                       | Page background                                   |
| `--card`               | `bg-card`                             | Card surfaces                                     |
| `--border`             | `border-border`                       | Dividers, table lines, input borders              |
| `--muted`              | `bg-muted`                            | Subtle backgrounds, row hover, tags               |

### Chart Colors

Five shades of green for data visualizations — all map to the same hue so they feel cohesive.

| Token       | Tailwind Class | Lightness                          |
| ----------- | -------------- | ---------------------------------- |
| `--chart-1` | `fill-chart-1` | Darkest — primary data series      |
| `--chart-2` | `fill-chart-2` | Dark                               |
| `--chart-3` | `fill-chart-3` | Mid                                |
| `--chart-4` | `fill-chart-4` | Light                              |
| `--chart-5` | `fill-chart-5` | Lightest — secondary/tertiary data |

### Finance-Specific Color Rules

```jsx
// Always use primary for positive/up
<span className="text-primary">+25.66%</span>

// Always use destructive for negative/down
<span className="text-destructive">-4.51%</span>

// Neutral/unchanged
<span className="text-muted-foreground">0.00%</span>

// Large money value — foreground, not primary
<span className="font-mono text-foreground text-3xl font-semibold">$40,199.05</span>
```

---

## Spacing & Layout

Uses Tailwind's default spacing scale. Recommended patterns for finance UI:

| Context           | Padding     | Gap     |
| ----------------- | ----------- | ------- |
| Page container    | `px-6 py-8` | —       |
| Card              | `p-6`       | —       |
| Stat row          | `p-4`       | `gap-8` |
| Table row         | `px-4 py-3` | —       |
| Table header      | `px-4 py-2` | —       |
| Form / filter bar | `px-4 py-2` | `gap-3` |

---

## Border Radius

| Token         | Class        | Usage                       |
| ------------- | ------------ | --------------------------- |
| `--radius-sm` | `rounded-sm` | Tags, badges, small chips   |
| `--radius-md` | `rounded-md` | Inputs, buttons             |
| `--radius-lg` | `rounded-lg` | Cards (default)             |
| `--radius-xl` | `rounded-xl` | Modal dialogs, large panels |

---

## Shadows

Subtle green-tinted shadows to match the brand palette.

| Token         | Class       | Usage                    |
| ------------- | ----------- | ------------------------ |
| `--shadow-sm` | `shadow-sm` | Cards, default elevation |
| `--shadow-md` | `shadow-md` | Dropdowns, popovers      |
| `--shadow-lg` | `shadow-lg` | Modals, floating panels  |

---

## Components — Finance Patterns

### Stat Card

```jsx
<div className="bg-card rounded-lg p-6 shadow-sm border border-border">
  <p className="font-sans text-sm text-muted-foreground">Revenue</p>
  <div className="flex items-baseline gap-3 mt-1">
    <span className="font-mono text-3xl font-semibold text-foreground">$40,199.05</span>
    <span className="font-mono text-sm font-medium text-primary">+15.11%</span>
  </div>
</div>
```

### Table Number Cell

```jsx
// Monetary value — right aligned, mono
<td className="font-mono text-sm text-right text-foreground">$199.00</td>

// ID — muted, mono
<td className="font-mono text-xs text-muted-foreground">#2999</td>
```

### Status Badge

```jsx
// Paid
<span className="font-sans text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-sm">
  Paid
</span>

// Refunded
<span className="font-sans text-xs font-medium bg-destructive/10 text-destructive px-2 py-0.5 rounded-sm">
  Refunded
</span>
```

### Chart Card (from screenshots)

```jsx
<div className="bg-card rounded-lg p-6 shadow-sm border border-border">
  <h3 className="font-heading text-base font-normal text-foreground">Area Chart – Gradient</h3>
  <p className="font-sans text-sm text-muted-foreground mt-0.5">
    Showing total visitors for the last 6 months
  </p>
  {/* chart goes here */}
  <div className="mt-4 pt-4 border-t border-border">
    <p className="font-sans text-sm font-semibold text-foreground">
      Trending up by 5.2% this month ↗
    </p>
    <p className="font-sans text-xs text-muted-foreground">January – June 2024</p>
  </div>
</div>
```

---

## Font Colors

Never use `text-black`, `text-white`, or `text-slate-*` — always use the semantic tokens below. They automatically adapt to dark mode.

| Common Equivalent            | Your Token                  | Tailwind Class            | Usage                                     |
| ---------------------------- | --------------------------- | ------------------------- | ----------------------------------------- |
| `text-black`                 | `--foreground`              | `text-foreground`         | Headings, primary text, important values  |
| `text-slate-500`             | `--muted-foreground`        | `text-muted-foreground`   | Subtitles, descriptions, secondary labels |
| `text-slate-300`             | `--border` (avoid for text) | `text-muted`              | Disabled, placeholder-like text           |
| `text-white` (on colored bg) | `--primary-foreground`      | `text-primary-foreground` | Text on green/primary backgrounds         |
| green / positive             | `--primary`                 | `text-primary`            | Positive trends, success states           |
| red / negative               | `--destructive`             | `text-destructive`        | Negative values, errors, refunds          |

```jsx
<h1 className="text-foreground">$40,199.05</h1>           // ~black
<p className="text-muted-foreground">Total revenue</p>     // ~slate-500
<span className="text-primary">+15.11%</span>              // green
<span className="text-destructive">-4.51%</span>           // red
<span className="text-muted-foreground">#2999</span>       // ~slate-500
```

---

## Dark Mode

All color variables are redefined under `.dark`. No extra work needed — just toggle the `dark` class on `<html>`. The green palette, shadows, and contrast all adapt automatically.

---

## Quick Reference Cheatsheet

```
Headings          → font-heading
Body / UI copy    → font-sans
Money / numbers   → font-mono
Positive trend    → text-primary
Negative trend    → text-destructive
Secondary text    → text-muted-foreground
Cards             → bg-card rounded-lg shadow-sm border border-border
Primary button    → bg-primary text-primary-foreground rounded-md
```
