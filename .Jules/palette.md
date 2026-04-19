## 2026-04-05 - Adding visual feedback to async form submissions
**Learning:** Combining a loading spinner alongside keyboard shortcuts (Cmd/Ctrl + Enter) significantly improves both perceived performance during async generation operations and the discoverability of power-user features. Users need an immediate visual cue that their keyboard shortcut worked.
**Action:** When adding shortcut submissions to forms, ensure the visual disabled/loading state applies instantly and clearly since the user's focus is usually on the input rather than the submit button.
## 2026-04-19 - Disconnected Disabled States
**Learning:** It is common to find components with CSS classes representing disabled or loading states (like `disabled:cursor-not-allowed`) but missing the actual HTML `disabled` property tied to the state logic. This leaves forms and inputs fully editable during async submissions.
**Action:** When inspecting loading states or disabled styling, always verify that the `disabled` HTML attribute is actually applied and connected to the relevant loading/submitting state variable.
