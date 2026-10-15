💡 What: Added the `disabled={isLoading}` prop to the prompt textarea.
🎯 Why: Prevents user edits from being lost or jumbled during the async generation operation.
📸 Before/After: Before, the textarea remained editable while generation was in progress. Now, it enters a disabled state.
♿ Accessibility: The disabled state clearly communicates to the user (both visually and to screen readers) that the form is currently processing and cannot accept input.
