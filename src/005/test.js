import solvers from './';

solvers.forEach((solver) => {
  test('Longest Palindromic Substring', () => {
    // sample expect
    expect(solver(1, 2)).toBe(3);
  });
});
