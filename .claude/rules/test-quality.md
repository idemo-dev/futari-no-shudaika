# Test Quality Rules

## Purpose
Ensure tests remain meaningful and catch real issues.

## Rules

1. **No Empty Tests**
   - Tests must contain at least one assertion
   - `expect().toBe()` with no meaningful check is forbidden

2. **No Disabling Tests**
   - Do not use `.skip` or comment out failing tests
   - Fix the test or the code, not skip the problem

3. **Descriptive Test Names**
   - Test names must describe the expected behavior
   - Bad: `test('works')`
   - Good: `test('displays error when email is invalid')`

4. **Test Real Behavior**
   - Tests should verify actual functionality
   - Avoid testing implementation details

## When Tests Fail

1. Understand why the test is failing
2. Fix the code if it's a bug
3. Update the test if requirements changed
4. Never delete tests just because they fail
