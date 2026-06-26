## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2024-05-19 - Improved Accessibility for Preview Panel and Form

**Learning:** When using visual toggle buttons that act as tabs or selectors (like the Desktop/Mobile viewport toggles in the Preview Panel), wrapping them in a `div` with `role="group"` and an `aria-label` makes their relationship clear to screen readers. Additionally, providing tooltips (via the `title` attribute) on disabled buttons is a highly effective way to explain *why* an action is disabled, preventing user confusion. For forms, using `aria-labelledby` to point to visible headings provides better context than hidden `sr-only` labels.

**Action:** Ensure that all toggle button groups use `role="group"` and `aria-pressed`. For disabled buttons whose state might not be immediately obvious, always provide an explanatory `title` or tooltip. Prefer `aria-labelledby` linking to visible descriptive text over hidden labels.

## 2024-06-26 - Providing reasons for disabled states

**Learning:** Disabling action buttons (like submit) when input is missing prevents unnecessary interactions, but without explaining *why* it's disabled, users might think the application is broken. Using a native tooltip (like the `title` attribute) provides a lightweight and accessible way to clarify the requirement. Furthermore, disabling input fields like textareas during async operations visually communicates that the system is processing and prevents the user from typing into a void.

**Action:** Whenever a form submit button is conditionally disabled based on missing input, add a `title` attribute explaining the required action (e.g., "Enter a prompt first"). Also, ensure form inputs are disabled during loading states to prevent conflicting user input.
