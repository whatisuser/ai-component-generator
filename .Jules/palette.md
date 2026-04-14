## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.

## 2023-10-27 - Explicitly disable inputs during async operations
**Learning:** During an asynchronous operation, simply changing the styling (such as adding `disabled:cursor-not-allowed`) is insufficient; you must also explicitly set the `disabled` attribute. If the `disabled` attribute is omitted, the input element may appear disabled while still accepting user input and interacting unexpectedly.
**Action:** Always ensure that when applying disabled state styles, the actual boolean `disabled` attribute is passed to the HTML element.
