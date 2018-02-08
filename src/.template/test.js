import solvers from './';

solvers.forEach((solver) => {
  test('{{problemName}}', () => {
    // sample expect
    expect(solver(1, 2)).toBe(3);
  });
});
