import solvers from './';

solvers.forEach((solver) => {
  test('Add Two Numbers', () => {
    // sample expect
    expect(solver([2, 4, 3], [5, 6, 4])).toEqual([7, 0, 8]);
  });
});
