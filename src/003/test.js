import solvers from './';

solvers.forEach((solver) => {
  test('Longest Substring Without Repeating Characters', () => {
    // sample expect
    expect(solver("bomgcwnyosztzoqdyutrbxsuzignicqkresvbgwravnzjdekzabaxvvwddmoheaai")).toBe(12);
  });
});
