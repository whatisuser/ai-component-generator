## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2024-05-15 - Segmented Control Accessibility
**Learning:** When building custom segmented controls (like Desktop/Mobile viewport toggles) out of adjacent buttons rather than native radio inputs, they must be wrapped in `role="group"` with an `aria-label`, and the active state must be communicated via `aria-pressed={true/false}` on the buttons.
**Action:** Always check adjacent toggle buttons for `role="group"` and `aria-pressed` states to ensure screen reader users can perceive the grouping and the active selection.
