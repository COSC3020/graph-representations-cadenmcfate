function convertToAdjList(adjMatrix) {
    let adjList = [];
    for (let u = 0; u < adjMatrix.length; u++) {
	adjList[u] = [];
	for (let v = 0; v < adjMatrix.length; v++) {
	    if (adjMatrix[u][v]) {
		adjList[u].push(v);
	    }
	}
    }
    return adjList;
}

function convertToAdjMatrix(adjList) {
    let adjMatrix = [];
    for (let u = 0; u < adjList.length; u++) {
	adjMatrix[u] = [];
	for (let i = 0; i < adjList.length; i++) adjMatrix[u][i] = 0;
	for (let v = 0; v < adjList[u].length; v++) adjMatrix[u][adjList[u][v]] = 1;
    }
    return adjMatrix;
}


//console.log(convertToAdjList(convertToAdjMatrix([[1],[0],[0,1]])));

