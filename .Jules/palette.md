## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2024-05-19 - Improved Accessibility for Preview Panel and Form

**Learning:** When using visual toggle buttons that act as tabs or selectors (like the Desktop/Mobile viewport toggles in the Preview Panel), wrapping them in a `div` with `role="group"` and an `aria-label` makes their relationship clear to screen readers. Additionally, providing tooltips (via the `title` attribute) on disabled buttons is a highly effective way to explain *why* an action is disabled, preventing user confusion. For forms, using `aria-labelledby` to point to visible headings provides better context than hidden `sr-only` labels.

**Action:** Ensure that all toggle button groups use `role="group"` and `aria-pressed`. For disabled buttons whose state might not be immediately obvious, always provide an explanatory `title` or tooltip. Prefer `aria-labelledby` linking to visible descriptive text over hidden labels.

## 2024-05-20 - Enhancing Forms with Explicit Disabled States and Screen Reader Feedback
**Learning:** When building async forms, explicitly disabling input elements (like textareas) and submit buttons is critical for preventing duplicate submissions and confusion. Adding a tooltip via the `title` attribute to disabled submit buttons greatly clarifies why the action is unavailable. Additionally, when a button changes its text to provide inline feedback (e.g., 'Copied'), adding `aria-live="polite"` ensures screen readers immediately announce the change without needing manual focus management.
**Action:** Always disable both the form inputs and the submit button during async operations, provide tooltips for disabled submit buttons when the reason might not be obvious (e.g., missing input), and add `aria-live="polite"` to buttons that update their text to reflect a successful action.
