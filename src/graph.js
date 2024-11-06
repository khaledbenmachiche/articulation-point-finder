class Graph {
  constructor() {
    this.vertices = [];
    this.edges = [];
    this.selectedVertices = [];
    this.vertexCounter = 1;
  }

  addVertex(x, y) {
    for (const vertex of this.vertices) {
      if (vertex.contains(mouseX, mouseY)) return;
    }
    const vertex = new Vertex(x, y, this.vertexCounter);
    this.vertices.push(vertex);
    this.vertexCounter++;
  }

  addEdge(vertex1, vertex2) {
    if (vertex1 !== vertex2) {
      const edge = new Edge(vertex1, vertex2);
      this.edges.push(edge);

      vertex1.adjacencyList.push(vertex2.number);
      vertex2.adjacencyList.push(vertex1.number);
      edge.setSelected(true);

      setTimeout(() => {
        vertex1.setSelected(false);
        vertex2.setSelected(false);
        edge.setSelected(false);
      }, 500);
      this.selectedVertices = [];
    }
  }

  display() {
    for (const edge of this.edges) {
      edge.display();
    }

    for (const vertex of this.vertices) {
      vertex.display();
      vertex.drag();
    }
  }

  deleteVertex(vertexToDelete) {
    if (vertexToDelete === undefined) return;
    const vertexIndex = this.vertices.indexOf(vertexToDelete);

    for (const vertex of this.vertices) {
      vertex.adjacencyList = vertex.adjacencyList.filter((vNumber) => {
        return vNumber !== vertexToDelete.number;
      });
    }
    if (vertexIndex !== -1) {
      this.vertices.splice(vertexIndex, 1);
    }
    this.edges = this.edges.filter((edge) => {
      return edge.vertex1 !== vertexToDelete && edge.vertex2 !== vertexToDelete;
    });
  }

  getClickedVertex() {
    return this.vertices.find((vertex) => vertex.contains(mouseX, mouseY));
  }
}
