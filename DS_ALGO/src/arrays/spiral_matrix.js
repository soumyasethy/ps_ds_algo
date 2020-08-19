/*Given a matrix of m * n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example:

Given the following matrix:
    [
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
        [ 7, 8, 9 ]
    ]
You should return   [1, 2, 3, 6, 9, 8, 7, 4, 5]*/

module.exports = {
  //param A : array of array of integers
  //return a array of integers
  spiralOrder: function(A) {
    let arr = [],
      i = 0,
      k = 0,
      l = 0,
      m = A.length,
      n = A[0].length;

    while (k < m && l < n) {
      // Print the first row from the remaining rows
      for (i = l; i < n; ++i) {
        arr.push(A[k][i]);
      }
      k++;

      // Print the last column from the remaining columns
      for (i = k; i < m; ++i) {
        arr.push(A[i][n - 1]);
      }
      n--;

      // Print the last row from the remaining rows
      if (k < m) {
        for (i = n - 1; i >= l; --i) {
          arr.push(A[m - 1][i]);
        }
        m--;
      }

      // Print the first column from the remaining columns
      if (l < n) {
        for (i = m - 1; i >= k; --i) {
          arr.push(A[i][l]);
        }
        l++;
      }
    }

    return arr;
  }
};
