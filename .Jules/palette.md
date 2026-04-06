## 2024-05-15 - Added keyboard shortcut to AI prompt form
**Learning:** For AI generation workflows, users typically want to submit via keyboard (Cmd/Ctrl+Enter) since they are typing long prompts, but we need to visually surface this shortcut so they discover it. The visual hint should ideally only show up on desktop breakpoints where hardware keyboards are presumed.
**Action:** Always map Cmd/Ctrl+Enter to primary generation actions in multi-line prompt textareas, and include `<kbd>` hints on desktop breakpoints.
