## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2024-05-19 - Improved Accessibility for Preview Panel and Form

**Learning:** When using visual toggle buttons that act as tabs or selectors (like the Desktop/Mobile viewport toggles in the Preview Panel), wrapping them in a `div` with `role="group"` and an `aria-label` makes their relationship clear to screen readers. Additionally, providing tooltips (via the `title` attribute) on disabled buttons is a highly effective way to explain *why* an action is disabled, preventing user confusion. For forms, using `aria-labelledby` to point to visible headings provides better context than hidden `sr-only` labels.

**Action:** Ensure that all toggle button groups use `role="group"` and `aria-pressed`. For disabled buttons whose state might not be immediately obvious, always provide an explanatory `title` or tooltip. Prefer `aria-labelledby` linking to visible descriptive text over hidden labels.

## 2026-09-07 - Added disabled states to textarea and disabled states and title explaining disabled state to the button.
**Learning:** Interactive elements such as a form button and textarea should be disabled when the generation/submission requires a response, which provides great visual feedback via disabling input editing and styling that the system is currently processing the input. Explaining why an element is disabled using standard native tooltips such as the HTML title attribute allows a user to more easily understand why an element cannot be interacted with and is generally best practice for accessibility.
**Action:** Use native HTML title attribute and conditionally toggle it if the form text prompt is empty so a screen reader or user on hover can know the requirements to generate.
