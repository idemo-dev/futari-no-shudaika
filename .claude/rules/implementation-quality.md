# Implementation Quality Rules

## Purpose
Prevent superficial implementations that pass checks but don't solve problems.

## Rules

1. **No Placeholder Logic**
   - Functions must contain real implementation
   - `// TODO` without immediate follow-up is forbidden
   - Empty catch blocks are forbidden

2. **Error Handling**
   - Errors must be handled meaningfully
   - Silent failures are forbidden
   - User-facing errors need clear messages

3. **Type Safety**
   - Avoid `any` type in TypeScript
   - Use proper types for function parameters and returns

4. **Code Organization**
   - One component per file
   - Related utilities in dedicated modules
   - Follow existing project patterns

## Before Marking Complete

1. Code compiles without errors
2. Feature works as described in the task
3. Edge cases are handled
4. No console errors in browser
