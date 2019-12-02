# Adjacent Bit
Given bit matrix of m rows and n columns, find whether no adjacent bits are same. Adjacency is assumed horizontal and vertical only.
Input Format

The first line contains a single integer t, denoting the number of test cases. 
The first line of each test case contains two space separated integers m and n denoting the number of rows and number of columns in the matrix respectively. Following m lines each contains n space separated bits.
Output Format

For each test case if no pair of adjacent bits are equal, then print 1 else print 0.
Constraints

1 <= t <= 1000 
1 <= m <= 100 
1 <= n <= 100
Sample Input

3
2 2
0 1
1 0
1 2
0 0
2 1
1
1
Sample Output

1
0
0
