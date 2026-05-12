## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2024-05-19 - Improved Accessibility for Preview Panel and Form

**Learning:** When using visual toggle buttons that act as tabs or selectors (like the Desktop/Mobile viewport toggles in the Preview Panel), wrapping them in a `div` with `role="group"` and an `aria-label` makes their relationship clear to screen readers. Additionally, providing tooltips (via the `title` attribute) on disabled buttons is a highly effective way to explain *why* an action is disabled, preventing user confusion. For forms, using `aria-labelledby` to point to visible headings provides better context than hidden `sr-only` labels.

**Action:** Ensure that all toggle button groups use `role="group"` and `aria-pressed`. For disabled buttons whose state might not be immediately obvious, always provide an explanatory `title` or tooltip. Prefer `aria-labelledby` linking to visible descriptive text over hidden labels.

## 2024-05-20 - Adding Live Regions for Status Updates

**Learning:** When buttons update their inner text briefly to indicate a successful action (like changing "Copy code" to "Copied!"), screen readers will miss the change unless the element is marked as a live region. Adding `aria-live="polite"` directly to the button ensures the success state is announced without interrupting the user. Also, screen readers can sometimes incorrectly announce decorative loading spinners, so explicitly hiding them with `aria-hidden="true"` reduces noise.

**Action:** Always add `aria-live="polite"` to buttons that change text temporarily to signify state (e.g., success/copied). Always add `aria-hidden="true"` to decorative `svg` elements like loading spinners to keep the screen reader output clean.
