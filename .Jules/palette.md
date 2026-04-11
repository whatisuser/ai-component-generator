## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.

## 2025-02-12 - Adding keyboard accessibility to scrollable code regions
**Learning:** Scrollable `overflow: auto` elements containing dynamically generated code (like `<pre>`) often trap content for keyboard-only users because the element itself cannot receive focus.
**Action:** Always add `tabIndex={0}` and clear `focus-visible` ring styling to scrollable `<pre>` elements so keyboard users can navigate to and scroll through the overflowing content.

## 2025-02-12 - Announcing dynamic text changes on utility buttons
**Learning:** Buttons like "Copy to clipboard" that change their text to "Copied" upon interaction do not automatically announce this new state to screen readers unless the element is monitored.
**Action:** Add `aria-live="polite"` to buttons with dynamically updating text (e.g., success/error states on click) to ensure assistive technologies announce the updated result without interrupting the user.
