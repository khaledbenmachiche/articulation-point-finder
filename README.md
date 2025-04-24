# Articulation Point Finder
## Features

- **Graph Builder:** Add, connect, and delete vertices on an interactive canvas.
- **Articulation Points Detection:** Uses DFS to identify vertices whose removal increases the number of connected components.
- **Interactive UI:**
  - Add vertices and edges
  - Delete vertices
  - Clear canvas
  - Save canvas as PNG
  - Find articulation points
- **Visual Feedback:** Articulation points are highlighted on the canvas.
- **Drag-and-Drop:** Move vertices by dragging.

---

## Algorithm Explained

### Articulation Points (Cut Vertices)
- A vertex in an undirected graph is an articulation point if removing it (and its edges) disconnects the graph.
- The algorithm uses **Depth-First Search (DFS)** to compute:
  - **Discovery time (disc)**: When a vertex is first visited.
  - **Low-link value (low)**: The earliest discovery time reachable from the vertex.
- A vertex `u` is an articulation point if:
  - It is the root of the DFS tree and has at least two children, or
  - It is not the root, and one of its children's subtrees has no back edge above `u`.
- Time Complexity: `O(V + E)` (where `V` is the number of vertices and `E` is the number of edges).

---

## How to Use

1. Open `index.html` in a modern web browser.
2. Use the buttons to:
   - **Add Vertex**: Click on the canvas to place vertices.
   - **Add Edge**: Select two vertices to connect them with an edge.
   - **Delete Vertex**: Click a vertex to remove it and its edges.
   - **Clear Canvas**: Reset the graph.
   - **Save Image**: Download the canvas as a PNG.
   - **Find Articulation Points**: Highlight articulation points on the graph.
3. Drag vertices to reposition them.
4. Articulation points are displayed with a black fill (non-articulation points are white).

---

## Technologies Used

- **JavaScript** (ES6)
- **p5.js** for canvas interaction
- **HTML/CSS** for layout and styling

---

## Example Output

- **Canvas Visualization:**
  - Vertices: Circles labeled with numbers.
  - Edges: Blue lines connecting vertices.
  - Articulation Points: Black-filled vertices.
  - Non-Articulation Points: White-filled vertices.
- **Interaction Example:**
  - Add vertices by clicking on the canvas.
  - Connect vertices by selecting two vertices in "Add Edge" mode.
  - Click "Find Articulation Points" to highlight critical vertices.

---

## Notes

- The graph must be undirected and connected for accurate articulation point detection.
- Vertices are automatically numbered starting from 1.
- Edges are visually highlighted briefly when added for user feedback.
- Performance is efficient for small to medium-sized graphs due to the `O(V + E)` complexity.

---

## License

MIT License. Feel free to use, modify, and share!

