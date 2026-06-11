## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2024-05-19 - Improved Accessibility for Preview Panel and Form

**Learning:** When using visual toggle buttons that act as tabs or selectors (like the Desktop/Mobile viewport toggles in the Preview Panel), wrapping them in a `div` with `role="group"` and an `aria-label` makes their relationship clear to screen readers. Additionally, providing tooltips (via the `title` attribute) on disabled buttons is a highly effective way to explain *why* an action is disabled, preventing user confusion. For forms, using `aria-labelledby` to point to visible headings provides better context than hidden `sr-only` labels.

**Action:** Ensure that all toggle button groups use `role="group"` and `aria-pressed`. For disabled buttons whose state might not be immediately obvious, always provide an explanatory `title` or tooltip. Prefer `aria-labelledby` linking to visible descriptive text over hidden labels.
## 2024-05-19 - Improved Accessibility and Feedback on Disabled States

**Learning:** When elements like textareas or action buttons become invalid or disabled (e.g. during a loading state, or before prerequisites are met), visual cues alone (like `cursor-not-allowed` or opacity changes) might not be enough context for screen readers or users who expect an interactive element. Providing an explanatory `title` (or tooltip) that changes based on the context of the disabled state (e.g., "Preview is updating..." vs "Generate a component first...") is crucial for providing actionable feedback on *why* an action cannot be taken. Also, ensure native `disabled` attributes match the visual disabled stylings to prevent unexpected form manipulation or focus capturing during async transitions.

**Action:** Whenever applying visual disable states, explicitly check if the native `disabled` attribute is also required. Ensure any permanently or temporarily disabled interactive element provides context using a `title` or tooltip explaining its state.
