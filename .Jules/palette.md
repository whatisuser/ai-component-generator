## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2024-04-15 - [Textarea Loading States]
**Learning:** Found an instance where Tailwind `disabled:` modifier classes were fully defined on an input element, but the actual HTML `disabled` attribute was never passed to the component, resulting in styles that could never be seen and inputs that remained editable during async operations.
**Action:** Audit forms for mismatched HTML attributes and CSS state modifiers.
