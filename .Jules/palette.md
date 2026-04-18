## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.

## 2024-04-18 - Synchronizing Loading States
**Learning:** Forgetting to disable all form inputs (like textareas) during an async loading state while the submit button is disabled can lead to conflicting interactions. Users might modify the input mid-request, leading to confusion when the response returns for the old state.
**Action:** Always verify that input fields sharing the same form boundary are properly disabled alongside their primary submission action during loading states.
