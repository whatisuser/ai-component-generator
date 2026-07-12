## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2024-05-19 - Improved Accessibility for Preview Panel and Form

**Learning:** When using visual toggle buttons that act as tabs or selectors (like the Desktop/Mobile viewport toggles in the Preview Panel), wrapping them in a `div` with `role="group"` and an `aria-label` makes their relationship clear to screen readers. Additionally, providing tooltips (via the `title` attribute) on disabled buttons is a highly effective way to explain *why* an action is disabled, preventing user confusion. For forms, using `aria-labelledby` to point to visible headings provides better context than hidden `sr-only` labels.

**Action:** Ensure that all toggle button groups use `role="group"` and `aria-pressed`. For disabled buttons whose state might not be immediately obvious, always provide an explanatory `title` or tooltip. Prefer `aria-labelledby` linking to visible descriptive text over hidden labels.
## 2024-05-19 - Improved Disabled States and Tooltips for Form Elements

**Learning:** When using Tailwind CSS, pseudo-classes like `disabled:bg-slate-50` require the corresponding HTML prop (e.g., `disabled={true}`) to actually be applied to the DOM element. Without the HTML prop, the Tailwind styles will simply remain inactive. Furthermore, disabling a submit button proactively when input is missing, paired with a native `title` tooltip explaining the required state (e.g., "Enter a prompt to generate a component"), creates a self-explaining, accessible form that prevents empty state submissions without relying entirely on validation error messaging.

**Action:** Ensure all interactive elements utilizing `disabled:` Tailwind utility classes also explicitly map the HTML/React `disabled={...}` prop based on application state. Always pair conditionally disabled action buttons with a clear native `title` or explanatory tooltip to inform the user why the interaction is not currently available.
