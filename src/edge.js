class Edge {
  constructor(vertex1, vertex2) {
    this.vertex1 = vertex1;
    this.vertex2 = vertex2;
    this.selected = true;
  }

  display() {
    if (this.selected) {
      stroke(255, 0, 0);
    } else {
      stroke(0, 0, 0);
    }
    line(
      this.vertex1.position.x,
      this.vertex1.position.y,
      this.vertex2.position.x,
      this.vertex2.position.y
    );
  }

  setSelected(selected) {
    this.selected = selected;
  }
}
