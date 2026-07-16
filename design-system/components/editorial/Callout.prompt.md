Multi-column comparison callout — each column has a mono label, Playfair crimson title, and serif body. Odd columns tint automatically. Use for "Claim vs Record vs Reality" framings.

```jsx
<Callout columns={[
  { label: 'LDS Claim', title: 'Restored Ancient Ordinance', body: 'The endowment was "kept hid…"' },
  { label: 'Historical Record', title: 'Created Seven Weeks After', body: 'Joseph Smith became a Master Mason…' },
  { label: 'Biblical Reality', title: 'No Precedent in Scripture', body: 'Neither Testament contains…' },
]} />
```

Best at 2–3 columns. Collapses gracefully but designed for the 3-up editorial layout.
