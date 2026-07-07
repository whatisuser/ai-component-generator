## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2024-05-19 - Improved Accessibility for Preview Panel and Form

**Learning:** When using visual toggle buttons that act as tabs or selectors (like the Desktop/Mobile viewport toggles in the Preview Panel), wrapping them in a `div` with `role="group"` and an `aria-label` makes their relationship clear to screen readers. Additionally, providing tooltips (via the `title` attribute) on disabled buttons is a highly effective way to explain *why* an action is disabled, preventing user confusion. For forms, using `aria-labelledby` to point to visible headings provides better context than hidden `sr-only` labels.

**Action:** Ensure that all toggle button groups use `role="group"` and `aria-pressed`. For disabled buttons whose state might not be immediately obvious, always provide an explanatory `title` or tooltip. Prefer `aria-labelledby` linking to visible descriptive text over hidden labels.

## 2024-05-19 - Ensure Interactive Elements Map Disabled Props to Modifier Classes

**Learning:** It's common to style interactive elements (like `textarea` and `button`) with Tailwind's `disabled:` modifier classes (e.g., `disabled:cursor-not-allowed`, `disabled:opacity-60`) while forgetting to actually apply the HTML `disabled={condition}` prop. This causes the element to remain interactive (e.g., users can type while a request is in flight) even if the UI visually implies a disabled state under some conditions.
**Action:** Always verify that interactive elements styled with `disabled:` modifiers have the corresponding HTML `disabled` prop mapped correctly, and consider adding explanatory tooltips (via the `title` attribute) to improve accessibility and user understanding of the disabled state.
