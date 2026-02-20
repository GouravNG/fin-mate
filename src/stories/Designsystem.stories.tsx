import React, { type CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

// ─── Types ───────────────────────────────────────────────────────────────────

interface FontColorRow {
  token: string
  cssVar: string
  equiv: string
  sample: string
  font: string
}

interface PaletteColor {
  label: string
  var: string
  bordered?: boolean
}

interface TypeRow {
  meta: string
  text: string
  style: CSSProperties
}

interface Stat {
  label: string
  value: string
  change: string
  positive: boolean
}

interface TableRow {
  id: string
  customer: string
  product: string
  status: 'Paid' | 'Refunded' | 'Pending'
  revenue: string
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: '3rem' }}>
    <p
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '0.65rem',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--muted-foreground)',
        marginBottom: '1rem',
      }}
    >
      {title}
    </p>
    {children}
  </div>
)

const Card = ({ children, noPad }: { children: React.ReactNode; noPad?: boolean }) => (
  <div
    style={{
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: noPad ? 0 : '1.5rem',
      overflow: noPad ? 'hidden' : undefined,
    }}
  >
    {children}
  </div>
)

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: 'var(--background)',
      color: 'var(--foreground)',
      fontFamily: 'var(--font-sans)',
      padding: '2.5rem',
      minHeight: '100vh',
    }}
  >
    {children}
  </div>
)

// ─── Data ────────────────────────────────────────────────────────────────────

const fontColors: FontColorRow[] = [
  {
    token: 'text-foreground',
    cssVar: '--foreground',
    equiv: '≈ black',
    sample: 'Primary text — headings, important values',
    font: 'var(--font-sans)',
  },
  {
    token: 'text-muted-foreground',
    cssVar: '--muted-foreground',
    equiv: '≈ slate-500',
    sample: 'Secondary text — labels, descriptions, subtitles',
    font: 'var(--font-sans)',
  },
  {
    token: 'text-primary',
    cssVar: '--primary',
    equiv: '≈ green',
    sample: '+15.11% — positive trends, success states',
    font: 'var(--font-mono)',
  },
  {
    token: 'text-destructive',
    cssVar: '--destructive',
    equiv: '≈ red',
    sample: '-4.51% — negative values, errors, refunds',
    font: 'var(--font-mono)',
  },
  {
    token: 'text-muted-foreground + font-mono',
    cssVar: '--muted-foreground',
    equiv: '≈ slate-400',
    sample: '#2999 · Feb 14, 2025 — IDs, metadata, timestamps',
    font: 'var(--font-mono)',
  },
]

const paletteColors: PaletteColor[] = [
  { label: 'primary', var: '--primary' },
  { label: 'destructive', var: '--destructive' },
  { label: 'foreground', var: '--foreground' },
  { label: 'muted-foreground', var: '--muted-foreground' },
  { label: 'muted', var: '--muted' },
  { label: 'border', var: '--border' },
  { label: 'card', var: '--card', bordered: true },
  { label: 'background', var: '--background', bordered: true },
]

const chartColors: PaletteColor[] = [
  { label: 'chart-1', var: '--chart-1' },
  { label: 'chart-2', var: '--chart-2' },
  { label: 'chart-3', var: '--chart-3' },
  { label: 'chart-4', var: '--chart-4' },
  { label: 'chart-5', var: '--chart-5' },
]

const typeRows: TypeRow[] = [
  {
    meta: 'font-heading · 2.5rem · 400',
    text: 'Dashboard Overview',
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: '2.5rem',
      fontWeight: 400,
      color: 'var(--foreground)',
    },
  },
  {
    meta: 'font-heading · 1.5rem · 400',
    text: 'Revenue Analytics',
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: '1.5rem',
      fontWeight: 400,
      color: 'var(--foreground)',
    },
  },
  {
    meta: 'font-sans · 1rem · 400',
    text: 'Showing total orders for the last 6 months',
    style: { fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--foreground)' },
  },
  {
    meta: 'font-sans · 0.875rem · muted',
    text: 'January – June 2024 · Secondary label',
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.875rem',
      color: 'var(--muted-foreground)',
    },
  },
  {
    meta: 'font-mono · 2rem · 600',
    text: '$40,199.05',
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '2rem',
      fontWeight: 600,
      color: 'var(--foreground)',
    },
  },
  {
    meta: 'font-mono · 1rem · 500 · positive',
    text: '+15.11%',
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '1rem',
      fontWeight: 500,
      color: 'var(--primary)',
    },
  },
  {
    meta: 'font-mono · 1rem · 500 · negative',
    text: '-4.51%',
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '1rem',
      fontWeight: 500,
      color: 'var(--destructive)',
    },
  },
  {
    meta: 'font-mono · 0.75rem · muted',
    text: '#2999 · Feb 14, 2025 · ORDER-8821',
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.75rem',
      color: 'var(--muted-foreground)',
    },
  },
]

const stats: Stat[] = [
  { label: 'Revenue', value: '$40,199.05', change: '+15.11%', positive: true },
  { label: 'Total Orders', value: '1,789', change: '+25.66%', positive: true },
  { label: 'New Orders', value: '341', change: '+11.23%', positive: true },
  { label: 'Refunds', value: '11', change: '-4.51%', positive: false },
]

const tableRows: TableRow[] = [
  {
    id: '#2999',
    customer: 'Josh Adams',
    product: 'Figma UI Kit',
    status: 'Paid',
    revenue: '$199.00',
  },
  { id: '#2998', customer: 'Sara Lee', product: 'Pro Plan', status: 'Paid', revenue: '$49.00' },
  {
    id: '#2997',
    customer: 'Mike Chen',
    product: 'Analytics Add-on',
    status: 'Refunded',
    revenue: '$29.00',
  },
  {
    id: '#2996',
    customer: 'Anna Smith',
    product: 'Starter Plan',
    status: 'Pending',
    revenue: '$19.00',
  },
]

const statusStyle = (status: TableRow['status']): CSSProperties => {
  const styles: Record<TableRow['status'], CSSProperties> = {
    Paid: {
      background: 'color-mix(in oklch, var(--primary) 15%, transparent)',
      color: 'var(--primary)',
    },
    Refunded: {
      background: 'color-mix(in oklch, var(--destructive) 12%, transparent)',
      color: 'var(--destructive)',
    },
    Pending: {
      background: 'color-mix(in oklch, var(--muted-foreground) 15%, transparent)',
      color: 'var(--muted-foreground)',
    },
  }
  return styles[status]
}

// ─── Story Components ─────────────────────────────────────────────────────────

const FontColorsComponent = () => (
  <Wrapper>
    <Section title="Font Colors — semantic tokens vs common equivalents">
      <Card>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {fontColors.map((c) => (
            <div
              key={c.token}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.75rem 1rem',
                background: 'var(--muted)',
                borderRadius: 'calc(var(--radius) - 2px)',
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: `var(${c.cssVar})`,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  flex: 1,
                  fontSize: '0.9rem',
                  fontFamily: c.font,
                  color: `var(${c.cssVar})`,
                }}
              >
                {c.sample}
              </span>
              <code
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--muted-foreground)',
                }}
              >
                {c.token}
              </code>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.7rem',
                  color: 'var(--muted-foreground)',
                  minWidth: 80,
                  textAlign: 'right',
                }}
              >
                {c.equiv}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  </Wrapper>
)

const ColorPaletteComponent = () => (
  <Wrapper>
    <Section title="Core Palette">
      <Card>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {paletteColors.map((c) => (
            <div
              key={c.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 'calc(var(--radius) - 2px)',
                  background: `var(${c.var})`,
                  border: c.bordered ? '1px solid var(--border)' : undefined,
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--muted-foreground)',
                  textAlign: 'center',
                }}
              >
                {c.label}
              </span>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid var(--border)', margin: '1.5rem 0 1rem' }} />
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--muted-foreground)',
            marginBottom: '0.75rem',
          }}
        >
          Chart Colors
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {chartColors.map((c) => (
            <div
              key={c.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 'calc(var(--radius) - 2px)',
                  background: `var(${c.var})`,
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--muted-foreground)',
                }}
              >
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  </Wrapper>
)

const TypographyComponent = () => (
  <Wrapper>
    <Section title="Type Scale — font-heading / font-sans / font-mono">
      <Card>
        {typeRows.map((row, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '1.5rem',
              padding: '0.875rem 0',
              borderBottom: i < typeRows.length - 1 ? '1px solid var(--border)' : undefined,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--muted-foreground)',
                minWidth: 220,
              }}
            >
              {row.meta}
            </span>
            <span style={row.style}>{row.text}</span>
          </div>
        ))}
      </Card>
    </Section>
  </Wrapper>
)

const StatCardsComponent = () => (
  <Wrapper>
    <Section title="Stat Cards — font-mono numbers">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '1rem',
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '1.25rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                color: 'var(--muted-foreground)',
              }}
            >
              {s.label}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1.75rem',
                fontWeight: 600,
                color: 'var(--foreground)',
                marginTop: '0.25rem',
              }}
            >
              {s.value}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 500,
                color: s.positive ? 'var(--primary)' : 'var(--destructive)',
                marginTop: '0.25rem',
              }}
            >
              {s.change}
            </p>
          </div>
        ))}
      </div>
    </Section>
  </Wrapper>
)

const TableComponent = () => (
  <Wrapper>
    <Section title="Table — mono for IDs and amounts">
      <Card noPad>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              {(['#', 'Customer', 'Product', 'Status', 'Revenue'] as const).map((h, i) => (
                <th
                  key={h}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: 'var(--muted-foreground)',
                    textAlign: i === 4 ? 'right' : 'left',
                    padding: '0.6rem 1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, i) => (
              <tr
                key={row.id}
                style={{
                  borderBottom: i < tableRows.length - 1 ? '1px solid var(--border)' : undefined,
                }}
              >
                <td
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--muted-foreground)',
                    padding: '0.75rem 1rem',
                  }}
                >
                  {row.id}
                </td>
                <td
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    color: 'var(--foreground)',
                    padding: '0.75rem 1rem',
                  }}
                >
                  {row.customer}
                </td>
                <td
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    color: 'var(--muted-foreground)',
                    padding: '0.75rem 1rem',
                  }}
                >
                  {row.product}
                </td>
                <td style={{ padding: '0.75rem 1rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      fontWeight: 500,
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'calc(var(--radius) - 4px)',
                      ...statusStyle(row.status),
                    }}
                  >
                    {row.status}
                  </span>
                </td>
                <td
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: 'var(--foreground)',
                    padding: '0.75rem 1rem',
                    textAlign: 'right',
                  }}
                >
                  {row.revenue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </Section>
  </Wrapper>
)

const ButtonsComponent = () => (
  <Wrapper>
    <Section title="Buttons & Badges">
      <Card>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--muted-foreground)',
            marginBottom: '1rem',
          }}
        >
          Buttons
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {(
            [
              {
                label: 'Get Started',
                bg: 'var(--primary)',
                color: 'var(--primary-foreground)',
                border: 'none',
              },
              {
                label: 'Learn More',
                bg: 'var(--secondary)',
                color: 'var(--secondary-foreground)',
                border: '1px solid var(--border)',
              },
              {
                label: 'Cancel',
                bg: 'transparent',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
              },
              {
                label: 'Delete',
                bg: 'var(--destructive)',
                color: 'var(--destructive-foreground)',
                border: 'none',
              },
            ] as { label: string; bg: string; color: string; border: string }[]
          ).map((b) => (
            <button
              key={b.label}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 500,
                padding: '0.5rem 1.25rem',
                borderRadius: 'var(--radius)',
                border: b.border,
                background: b.bg,
                color: b.color,
                cursor: 'pointer',
              }}
            >
              {b.label}
            </button>
          ))}
        </div>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--muted-foreground)',
            marginBottom: '0.75rem',
          }}
        >
          Status Badges
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {(['Paid', 'Refunded', 'Pending'] as TableRow['status'][]).map((s) => (
            <span
              key={s}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                fontWeight: 500,
                padding: '0.25rem 0.625rem',
                borderRadius: 'calc(var(--radius) - 4px)',
                ...statusStyle(s),
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </Card>
    </Section>
  </Wrapper>
)

const AllTokensComponent = () => (
  <Wrapper>
    <FontColorsComponent />
    <ColorPaletteComponent />
    <TypographyComponent />
    <StatCardsComponent />
    <TableComponent />
    <ButtonsComponent />
  </Wrapper>
)

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Design System/Tokens',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Visual reference for all design tokens — colors, typography, and components.',
      },
    },
  },
}

export default meta

type Story = StoryObj

// ─── Exports ──────────────────────────────────────────────────────────────────

export const FontColors: Story = { render: () => <FontColorsComponent /> }
export const ColorPalette: Story = { render: () => <ColorPaletteComponent /> }
export const Typography: Story = { render: () => <TypographyComponent /> }
export const StatCards: Story = { render: () => <StatCardsComponent /> }
export const Table: Story = { render: () => <TableComponent /> }
export const Buttons: Story = { render: () => <ButtonsComponent /> }
export const AllTokens: Story = { render: () => <AllTokensComponent /> }
