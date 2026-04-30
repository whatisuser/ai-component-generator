## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2024-05-19 - Improved Accessibility for Preview Panel and Form

**Learning:** When using visual toggle buttons that act as tabs or selectors (like the Desktop/Mobile viewport toggles in the Preview Panel), wrapping them in a `div` with `role="group"` and an `aria-label` makes their relationship clear to screen readers. Additionally, providing tooltips (via the `title` attribute) on disabled buttons is a highly effective way to explain *why* an action is disabled, preventing user confusion. For forms, using `aria-labelledby` to point to visible headings provides better context than hidden `sr-only` labels.

**Action:** Ensure that all toggle button groups use `role="group"` and `aria-pressed`. For disabled buttons whose state might not be immediately obvious, always provide an explanatory `title` or tooltip. Prefer `aria-labelledby` linking to visible descriptive text over hidden labels.
## 2026-04-30 - Prevent layout shift on buttons with dynamic state text
**Learning:** Buttons that change text content significantly during state transitions (e.g., from "Copy generated code" to "Copied", or "Generate component" to "Generating...") cause jarring layout shifts if their width is dynamic (`w-auto`). This is a common pattern in forms and toolbars that disrupts visual flow.
**Action:** Always set a `min-w-[...]` (minimum width) utility class on buttons that have dynamic text to prevent them from shrinking when transitioning to shorter text. For responsive design, preserve `w-full` on mobile and apply `sm:min-w-[...]` for larger viewports.
