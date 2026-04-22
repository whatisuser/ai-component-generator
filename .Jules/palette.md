## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2024-04-22 - Viewport Toggle Button Accessibility
**Learning:** Found an accessibility issue pattern with standard `<button>` elements used as a toggle group for viewport switching in `components/preview-panel.tsx`. They lacked `aria-pressed`, `role="group"`, and a group label, making it difficult for screen readers to understand they were a set of toggles.
**Action:** When implementing custom toggle button groups, always wrap them in an element with `role="group"` and an `aria-label`, and use the `aria-pressed` attribute on the individual buttons to explicitly announce their current state.
