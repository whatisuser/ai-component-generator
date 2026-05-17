## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2024-05-19 - Improved Accessibility for Preview Panel and Form

**Learning:** When using visual toggle buttons that act as tabs or selectors (like the Desktop/Mobile viewport toggles in the Preview Panel), wrapping them in a `div` with `role="group"` and an `aria-label` makes their relationship clear to screen readers. Additionally, providing tooltips (via the `title` attribute) on disabled buttons is a highly effective way to explain *why* an action is disabled, preventing user confusion. For forms, using `aria-labelledby` to point to visible headings provides better context than hidden `sr-only` labels.

**Action:** Ensure that all toggle button groups use `role="group"` and `aria-pressed`. For disabled buttons whose state might not be immediately obvious, always provide an explanatory `title` or tooltip. Prefer `aria-labelledby` linking to visible descriptive text over hidden labels.
## 2024-05-17 - Textarea loading state in Prompt Form
**Learning:** The prompt textarea had disabled styling (`disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500`) pre-configured in its Tailwind classes, but it was missing the actual `disabled={isLoading}` HTML attribute, leaving the element interactive while generation was in progress.
**Action:** When adding or verifying button loading states, always cross-check the associated input fields in the same form/component to ensure their interactive attributes (like `disabled`) are kept in sync with the overall form state to prevent duplicate submissions or out-of-sync edits.
