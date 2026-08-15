## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2024-05-19 - Improved Accessibility for Preview Panel and Form

**Learning:** When using visual toggle buttons that act as tabs or selectors (like the Desktop/Mobile viewport toggles in the Preview Panel), wrapping them in a `div` with `role="group"` and an `aria-label` makes their relationship clear to screen readers. Additionally, providing tooltips (via the `title` attribute) on disabled buttons is a highly effective way to explain *why* an action is disabled, preventing user confusion. For forms, using `aria-labelledby` to point to visible headings provides better context than hidden `sr-only` labels.

**Action:** Ensure that all toggle button groups use `role="group"` and `aria-pressed`. For disabled buttons whose state might not be immediately obvious, always provide an explanatory `title` or tooltip. Prefer `aria-labelledby` linking to visible descriptive text over hidden labels.

## 2026-08-15 - Adding native HTML disabled props alongside Tailwind classes
**Learning:** Relying solely on Tailwind `disabled:` classes for visual states is insufficient for accessibility and actual state management. The HTML `disabled` prop must be explicitly mapped to ensure form elements are truly non-interactive and properly announced by screen readers. Furthermore, adding explanatory native tooltips (via the `title` attribute) on disabled interactive elements helps users understand why an action is unavailable.
**Action:** Always verify that the HTML `disabled={...}` prop is explicitly applied alongside Tailwind `disabled:` classes. When disabling interactive elements due to missing input, provide a helpful native tooltip explaining the required action.
