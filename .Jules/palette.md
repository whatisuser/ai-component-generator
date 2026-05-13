## 2024-05-24 - Disabled State Tailwind Classes on Input Elements

**Learning:** When using Tailwind CSS, disabled state styling (e.g. `disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed`) can be present on an input element but will not visually apply until the native `disabled` boolean attribute is dynamically toggled. If the boolean is missing during an active loading state, users lack clear visual feedback that the input is locked, which is confusing UX.

**Action:** Always verify that interactive inputs tied to async operations have both visual disabled classes defined AND the functional `disabled={isLoading}` attribute linked to state.
