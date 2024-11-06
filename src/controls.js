function setupButtons() {
  let addVerticesButton = select("#add-vertex-btn");
  let addEdgesButton = select("#add-edge-btn");
  let findArticulationPointsButton = select("#find-ap-btn");
  let deleteVertexButton = select("#delete-vertex-btn");
  let effacerCanvaButton = select("#effacer-canvas-btn");
  let saveToImageButton = select("#save-img-button");

  addVerticesButton.mousePressed(addVertices);
  addEdgesButton.mousePressed(addEdges);
  findArticulationPointsButton.mousePressed(findArticulationPoints);
  deleteVertexButton.mousePressed(deleteVertex);
  effacerCanvaButton.mousePressed(resetCanvas);
  saveToImageButton.mousePressed(saveCanvasAsPNG);
}

function resetCanvas() {
  graph = new Graph();
  resetSelection();
  mode = "V";
  document.body.style.cursor = "default";
}
function saveCanvasAsPNG() {
  saveCanvas(canvas, 'graph-snapshot', 'png');
}


function resetSelection() {
  graph.selectedVertices = [];
  for (const vertex of graph.vertices) {
    vertex.setSelected(false);
    vertex.setIsAP(false);
  }
}


function addVertices() {
  document.body.style.cursor = "cell";
  mode = "V";
  resetSelection();
}

function addEdges() {
  document.body.style.cursor = "copy";
  mode = "E";
  resetSelection();
}

function deleteVertex() {
  document.body.style.cursor = "no-drop";
  mode = "D";
  resetSelection();
}

function findArticulationPoints() {
  document.body.style.cursor = "pointer";
  mode = "S";
  getArticulationPoints(graph);
}


function isInsideCanvas(x, y, canvas) {
  if (mouseX < 10 | mouseY < 10) return false;
  return true;
  if (x >= 0 && x <= canvas.width && y >= 75 && y <= canvas.height - 75)
    return true;
  else return false;
}
