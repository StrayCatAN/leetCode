import solvers from './';

solvers.forEach((solver) => {
  test('Median of Two Sorted Arrays', () => {
    // sample expect
    expect(solver([1],[2,3,4,5,6,7,8,9,10])).toBe(4.5);
  });
});
