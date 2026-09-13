## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2024-05-19 - Improved Accessibility for Preview Panel and Form

**Learning:** When using visual toggle buttons that act as tabs or selectors (like the Desktop/Mobile viewport toggles in the Preview Panel), wrapping them in a `div` with `role="group"` and an `aria-label` makes their relationship clear to screen readers. Additionally, providing tooltips (via the `title` attribute) on disabled buttons is a highly effective way to explain *why* an action is disabled, preventing user confusion. For forms, using `aria-labelledby` to point to visible headings provides better context than hidden `sr-only` labels.

**Action:** Ensure that all toggle button groups use `role="group"` and `aria-pressed`. For disabled buttons whose state might not be immediately obvious, always provide an explanatory `title` or tooltip. Prefer `aria-labelledby` linking to visible descriptive text over hidden labels.

## 2026-09-13 - Prevent Invalid Form Submissions with Disabled States
**Learning:** Relying purely on JavaScript validation (e.g., checking if a prompt is empty on click) leaves the UI visually ambiguous. Users might click a seemingly active button only for nothing to happen, leading to confusion. Additionally, leaving text inputs active during async operations can lead to lost user input if they try to edit while the previous request is processing.
**Action:** Always visually and functionally disable submit buttons when the form is in an invalid state (like an empty prompt), and provide a native tooltip via the `title` attribute to explain why. Also, always disable text inputs during loading states so users cannot make edits that will be ignored or overwritten.
