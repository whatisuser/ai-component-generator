## 2026-04-01 - Keyboard shortcuts for textareas
**Learning:** Adding keyboard shortcuts (Cmd+Enter/Ctrl+Enter) to textareas is a critical UX pattern for apps with prompt inputs. The shortcut hint (<kbd>) inside the submit button is a good discoverability pattern but it must also respect accessibility states (like loading).
**Action:** When adding shortcuts to inputs, ensure visual hints are added to the submission target, and disabled correctly during loading/async states.
