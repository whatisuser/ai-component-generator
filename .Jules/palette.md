## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2024-05-19 - Improved Accessibility for Preview Panel and Form

**Learning:** When using visual toggle buttons that act as tabs or selectors (like the Desktop/Mobile viewport toggles in the Preview Panel), wrapping them in a `div` with `role="group"` and an `aria-label` makes their relationship clear to screen readers. Additionally, providing tooltips (via the `title` attribute) on disabled buttons is a highly effective way to explain *why* an action is disabled, preventing user confusion. For forms, using `aria-labelledby` to point to visible headings provides better context than hidden `sr-only` labels.

**Action:** Ensure that all toggle button groups use `role="group"` and `aria-pressed`. For disabled buttons whose state might not be immediately obvious, always provide an explanatory `title` or tooltip. Prefer `aria-labelledby` linking to visible descriptive text over hidden labels.
## 2024-05-20 - Accessible Form Disabling Strategies

**Learning:** When using Tailwind's `disabled:` classes for visual feedback on form elements (like greyed-out backgrounds or `cursor-not-allowed`), the underlying HTML `disabled` attribute *must* be explicitly mapped to the state (e.g., `disabled={isLoading}`). Relying only on JavaScript state to prevent action isn't enough; screen readers need the explicit DOM state to announce it as inactive, and the CSS classes need it to apply. Additionally, when disabling submit buttons due to empty input, a simple `title` attribute explaining the requirement helps avoid user frustration.

**Action:** Always ensure that `disabled={state}` is mapped directly on `<textarea>`, `<input>`, and `<button>` elements during async operations or empty states. Provide explanatory tooltips via `title` when disabling elements that don't have obvious reasons for being inactive.
