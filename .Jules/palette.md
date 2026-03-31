## 2024-03-31 - Add loading spinners for async operations
**Learning:** For a more responsive feel during async generation processes, text changes like "Generating..." are not enough visual feedback. Users benefit from explicit spinners and correct `focus-visible` boundaries, particularly around disabled or loading buttons, so they know the form was submitted.
**Action:** Consistently pair button disabled states with explicit visual spinners and ensure keyboard focus outlines are styled with `focus-visible` rather than relying only on the browser default.
