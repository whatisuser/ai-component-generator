## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2024-05-19 - Improved Accessibility for Preview Panel and Form

**Learning:** When using visual toggle buttons that act as tabs or selectors (like the Desktop/Mobile viewport toggles in the Preview Panel), wrapping them in a `div` with `role="group"` and an `aria-label` makes their relationship clear to screen readers. Additionally, providing tooltips (via the `title` attribute) on disabled buttons is a highly effective way to explain *why* an action is disabled, preventing user confusion. For forms, using `aria-labelledby` to point to visible headings provides better context than hidden `sr-only` labels.

**Action:** Ensure that all toggle button groups use `role="group"` and `aria-pressed`. For disabled buttons whose state might not be immediately obvious, always provide an explanatory `title` or tooltip. Prefer `aria-labelledby` linking to visible descriptive text over hidden labels.
## 2024-05-22 - Improving clarity of disabled interactive states

**Learning:** When buttons or inputs are disabled dynamically based on application state (e.g., during async operations or when required fields are empty), users often don't understand *why* the element is unresponsive. While visual cues like `cursor-not-allowed` help indicate the state, they don't explain the reasoning. Adding a native tooltip using the `title` attribute explicitly clarifies the requirement (e.g., "Enter a prompt first") or the blocking condition (e.g., "Cannot reload while generating"), significantly reducing user frustration. Additionally, decorative loading spinners should use `aria-hidden="true"` so screen readers don't read them as confusing nested elements.

**Action:** Whenever dynamically disabling interactive elements, always provide an explanatory `title` attribute detailing the reason. Ensure decorative SVGs used for loading states are explicitly hidden from assistive technologies.
