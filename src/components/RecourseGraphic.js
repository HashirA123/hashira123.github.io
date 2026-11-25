import { useEffect, useRef } from "react";

const gridSize = 32;

function projectPoint(row, column) {
  const x = (column - (gridSize - 1) / 2) / 5;
  const y = (row - (gridSize - 1) / 2) / 5;
  const height = Math.exp(-((x - 0.55) ** 2 + (y + 0.8) ** 2) / 2.4) * 2.6
    + Math.exp(-((x + 1.9) ** 2 + (y - 1.5) ** 2) / 1.7) * 0.75
    + Math.sin(x * 1.8 + y) * Math.cos(y * 1.5) * 0.15;
  return [275 + x * 52 + y * 29, 201 + y * 23 - x * 8 - height * 47];
}

function RecourseGraphic() {
  const canvas = useRef(null);

  useEffect(() => {
    const context = canvas.current.getContext("2d");
    if (!context) return;
    context.setTransform(2, 0, 0, 2, 0, 0);

    const points = Array.from({ length: gridSize }, (_, row) =>
      Array.from({ length: gridSize }, (_, column) => projectPoint(row, column))
    );

    function drawLine(coordinates, color, width) {
      context.beginPath();
      coordinates.forEach(([x, y], index) => {
        if (index === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      });
      context.strokeStyle = color;
      context.lineWidth = width;
      context.stroke();
    }

    points.forEach((row, index) => {
      drawLine(row, "rgba(153, 221, 103, 0.25)", 0.65);
      drawLine(points.map((line) => line[index]), "rgba(153, 221, 103, 0.22)", 0.65);
    });

    points.forEach((row, rowIndex) => row.forEach(([x, y], columnIndex) => {
      if ((rowIndex + columnIndex * 3) % 7 !== 0) return;
      context.fillStyle = "rgba(191, 248, 130, 0.6)";
      context.fillRect(x - 0.65, y - 0.65, 1.3, 1.3);
    }));

    const path = [[21, 5], [20, 9], [18, 13], [16, 16], [13, 19]];
    const route = path.map(([row, column]) => points[row][column]);
    context.shadowColor = "#c8fa85";
    context.shadowBlur = 12;
    drawLine(route, "#d0fb92", 1.8);
    route.forEach(([x, y], index) => {
      context.beginPath();
      context.arc(x, y, index === route.length - 1 ? 5 : 2.5, 0, 2 * Math.PI);
      context.fillStyle = "#deffb4";
      context.fill();
    });
    context.shadowBlur = 0;

    return () => context.clearRect(0, 0, 550, 380);
  }, []);

  return (
    <figure className="recourse-graphic">
      <div className="graphic-heading"><span className="status-dot" /> RESEARCH FOCUS</div>
      <canvas ref={canvas} width={1100} height={760} aria-hidden="true" />
      <figcaption>
        <span>Algorithmic recourse</span>
        <span className="graphic-legend"><span /> Illustrative path</span>
      </figcaption>
    </figure>
  );
}

export default RecourseGraphic;
