Bordered timeline chart with a maroon gradient header and date/event rows. Crimson mono dates with a right-rule, serif event copy. Use for chronologies of change.

```jsx
<Timeline
  title="Timeline of Major Changes"
  subtitle="From Nauvoo to the present day"
  rows={[
    { date: '1842', event: <><strong>Endowment introduced</strong> by Joseph Smith…</> },
    { date: '1990', event: <><strong>Largest single revision.</strong> Blood oath penalties eliminated…</> },
  ]}
/>
```

`title`/`subtitle` are optional (header hides if both omitted). `event` accepts rich nodes for inline `<strong>` emphasis.
