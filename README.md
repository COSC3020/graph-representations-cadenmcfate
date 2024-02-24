[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hFs1pb0z)
# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

## Answer

We are iterating through the entire matrix, which we know has a memory complexity of $\Theta(|V|)$, and since it takes constant time to make changes to the adjacency list, we get a runtime complexity of $\Theta(|V|^2)$. It is evident that the runtime complexity depends on the number of vertices. And we can see that the number of edges doesn't change the runtime complexity since it takes constant time to handle the edges once they are discovered.

## Bonus answer

The runtime complexity of the conversion from an adjacency list to an adacency matrix depends on the number of vertices AND the number of edges. We iterate through the adjacency list in the first for loop, which is $|V|$, and then we have another for loop of $|V|$ complexity to initialize the current column in the matrix to all zeros. Following this is another for loop that iterates through the sub-lists in the adjacency list. This for loop executes $|E|$ times altogether. Combining these terms we get $|V|^2 + |E|$, so our runtime complexity is $\Theta(|V|^2 + |E|)$. The $|E|$ term does not get ignored.


