## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2024-05-19 - Improved Accessibility for Preview Panel and Form

**Learning:** When using visual toggle buttons that act as tabs or selectors (like the Desktop/Mobile viewport toggles in the Preview Panel), wrapping them in a `div` with `role="group"` and an `aria-label` makes their relationship clear to screen readers. Additionally, providing tooltips (via the `title` attribute) on disabled buttons is a highly effective way to explain *why* an action is disabled, preventing user confusion. For forms, using `aria-labelledby` to point to visible headings provides better context than hidden `sr-only` labels.

**Action:** Ensure that all toggle button groups use `role="group"` and `aria-pressed`. For disabled buttons whose state might not be immediately obvious, always provide an explanatory `title` or tooltip. Prefer `aria-labelledby` linking to visible descriptive text over hidden labels.
## 2026-09-03 - Disable Inputs During Generation and Empty States
**Learning:** Disabling the submit button when an input is empty prevents unnecessary API calls and provides immediate feedback. Explaining *why* a button is disabled using a native tooltip () further clarifies the UI state. Disabling textareas during active loading states prevents users from losing keystrokes if the submission unexpectedly wipes state, or simply clarifies that the app is busy processing.
**Action:** Always map empty input conditions and loading states to HTML `disabled` attributes. Include a `title` attribute to explain the disabled condition.
## 2026-09-03 - Disable Inputs During Generation and Empty States
**Learning:** Disabling the submit button when an input is empty prevents unnecessary API calls and provides immediate feedback. Explaining *why* a button is disabled using a native tooltip ('title') further clarifies the UI state. Disabling textareas during active loading states prevents users from losing keystrokes if the submission unexpectedly wipes state, or simply clarifies that the app is busy processing.
**Action:** Always map empty input conditions and loading states to HTML disabled attributes. Include a title attribute to explain the disabled condition.
