## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2024-05-19 - Improved Accessibility for Preview Panel and Form

**Learning:** When using visual toggle buttons that act as tabs or selectors (like the Desktop/Mobile viewport toggles in the Preview Panel), wrapping them in a `div` with `role="group"` and an `aria-label` makes their relationship clear to screen readers. Additionally, providing tooltips (via the `title` attribute) on disabled buttons is a highly effective way to explain *why* an action is disabled, preventing user confusion. For forms, using `aria-labelledby` to point to visible headings provides better context than hidden `sr-only` labels.

**Action:** Ensure that all toggle button groups use `role="group"` and `aria-pressed`. For disabled buttons whose state might not be immediately obvious, always provide an explanatory `title` or tooltip. Prefer `aria-labelledby` linking to visible descriptive text over hidden labels.

## 2024-06-25 - ARIA Hint Refinement
**Learning:** Adding `aria-hidden="true"` to visually-hidden keyboard shortcut hints isn't always optimal. While it prevents repetitive readout if the hint content is redundant with the preceding text, it can completely hide the shortcut from desktop screen reader users who could benefit from it.
**Action:** Prefer using the `aria-keyshortcuts` attribute on the target input element itself (e.g., `<textarea aria-keyshortcuts="Meta+Enter">`) rather than visually hiding text and tweaking `aria-hidden` when documenting keyboard shortcuts for assistive technologies.
