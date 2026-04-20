## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.

## 2024-05-18 - Missing Disabled Props and Toggle Button Context
**Learning:** Even when `disabled:` Tailwind classes are correctly applied to a `<textarea>`, the visual styling won't trigger unless the `disabled` prop is actually passed down. Also, custom viewport toggle buttons need `aria-pressed` to communicate their active state to screen readers since they act like a radio group.
**Action:** Always check that components passing interactive state (`isLoading`, `isSubmitting`) properly bind the corresponding HTML attributes (`disabled`, `aria-busy`, `aria-pressed`) instead of relying solely on CSS classes.
