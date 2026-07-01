## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2024-05-19 - Improved Accessibility for Preview Panel and Form

**Learning:** When using visual toggle buttons that act as tabs or selectors (like the Desktop/Mobile viewport toggles in the Preview Panel), wrapping them in a `div` with `role="group"` and an `aria-label` makes their relationship clear to screen readers. Additionally, providing tooltips (via the `title` attribute) on disabled buttons is a highly effective way to explain *why* an action is disabled, preventing user confusion. For forms, using `aria-labelledby` to point to visible headings provides better context than hidden `sr-only` labels.

**Action:** Ensure that all toggle button groups use `role="group"` and `aria-pressed`. For disabled buttons whose state might not be immediately obvious, always provide an explanatory `title` or tooltip. Prefer `aria-labelledby` linking to visible descriptive text over hidden labels.
## 2024-05-19 - Improved Accessibility for Form Inputs and Disabled Buttons

**Learning:** Disabling form inputs like `textarea` during async operations prevents users from accidentally modifying data mid-submission and provides a clearer visual cue that a request is processing. Furthermore, when interactive elements like submit buttons are disabled due to missing input (e.g., an empty prompt), standard `disabled` states lack explanation for screen readers and sighted users. Providing a native tooltip (via the `title` attribute) explaining *why* the button is disabled (e.g., "Enter a prompt to generate a component") drastically improves usability and accessibility by offering clear, actionable feedback rather than leaving the user guessing.

**Action:** Always map the `isLoading` state to form inputs (like `textarea` or `input`) using the `disabled` attribute to prevent interaction during async actions. When conditionally disabling a submit button based on missing input, accompany the `disabled` attribute with an explanatory `title` tooltip to improve the clarity of the disabled state.
