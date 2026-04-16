## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.

## 2026-04-16 - Accessibility of Preview States and Inputs
**Learning:** Found an accessibility issue pattern specific to this app's preview components: dynamic rendering boundaries (like react-live error boundaries) need explicit `role="alert"` and `aria-live="assertive"` so screen readers are immediately aware when isolated component execution fails. Also, disabled states on inputs during async tasks must be explicitly set via the `disabled` prop to prevent continued interaction, not just visually styled.
**Action:** Always verify that dynamic error surfaces use ARIA live regions and ensure visual disabled states on forms are backed by the actual HTML attribute.
