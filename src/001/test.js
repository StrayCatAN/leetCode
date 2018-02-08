import solvers from './';

solvers.forEach((solver) => {
  test('Two Sum', () => {
    // sample expect
    expect(solver([3, 2, 4], 6)).toEqual([1, 2]);
  });
});
