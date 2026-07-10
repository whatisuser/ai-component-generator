## 2024-05-20 - Preventing concurrent modifications during async generation

**Learning:** When users submit a prompt for a long-running async operation (like AI generation), leaving the input field enabled allows them to modify their prompt while generation is in progress. This creates confusion when the final generated output corresponds to their *original* prompt, not the modified text they currently see. Additionally, dynamically disabled submit buttons need a `title` attribute so users know exactly why they cannot submit.

**Action:** Always disable textareas/inputs during long-running async operations to lock the state and explicitly map the disabled state. For submit buttons disabled due to missing input, always provide a native tooltip (via `title` attribute) explaining the requirement.

## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2024-05-19 - Improved Accessibility for Preview Panel and Form

**Learning:** When using visual toggle buttons that act as tabs or selectors (like the Desktop/Mobile viewport toggles in the Preview Panel), wrapping them in a `div` with `role="group"` and an `aria-label` makes their relationship clear to screen readers. Additionally, providing tooltips (via the `title` attribute) on disabled buttons is a highly effective way to explain *why* an action is disabled, preventing user confusion. For forms, using `aria-labelledby` to point to visible headings provides better context than hidden `sr-only` labels.

**Action:** Ensure that all toggle button groups use `role="group"` and `aria-pressed`. For disabled buttons whose state might not be immediately obvious, always provide an explanatory `title` or tooltip. Prefer `aria-labelledby` linking to visible descriptive text over hidden labels.
