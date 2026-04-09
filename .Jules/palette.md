## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2023-10-27 - Disabled inputs and Tailwind styling
**Learning:** Tailwind classes like `disabled:cursor-not-allowed` visually suggest a disabled state but do not actually disable the element or make it inaccessible to screen readers without the HTML `disabled` attribute or `aria-disabled="true"`.
**Action:** Always ensure that when applying `disabled:*` Tailwind classes, the corresponding HTML `disabled` attribute is also applied to the element.
