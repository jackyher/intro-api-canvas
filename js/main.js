const canvasRectangule = document.getElementById("canvasRectangule");
const canvasTriangule = document.getElementById("canvasTriangule");
const canvasFeather = document.getElementById("canvasFeather");
const canvasLines = document.getElementById("canvasLines");
const canvasBow = document.getElementById("canvasBow");
const canvasCurveBezier = document.getElementById("canvasCurveBezier");
const canvasCurveCubic = document.getElementById("canvasCurveCubic");
const canvasPath2D = document.getElementById("canvasPath2D");

function drawRectangule() {
  const ctx = canvasRectangule.getContext("2d");
  if (canvasRectangule.getContext) {
    ctx.fillStyle = "rgb(121, 171, 252)";
    ctx.strokeStyle = "rgb(121, 171, 252)";
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}

function drawTriangule() {
  const ctx = canvasTriangule.getContext("2d");
  if (canvasTriangule.getContext) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(121, 171, 252)"; //Se pone antes de hacer el dibujo
    ctx.moveTo(25, 100);
    ctx.lineTo(125, 100);
    ctx.lineTo(75, 25);
    ctx.fill();
  }
}

function drawFeather() {
  if (canvasFeather.getContext) {
    const ctx = canvasFeather.getContext("2d");
    ctx.strokeStyle = "rgb(84, 148, 247)";
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo externo
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca (en el sentido de las agujas del reloj)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho
    ctx.stroke();
  }
}

function drawLines() {
  if (canvasLines.getContext) {
    const ctx = canvasLines.getContext("2d");
  
    // Triángulo relleno
    ctx.fillStyle = "rgb(121, 171, 252)";
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();
  
    // Triángulo contorneado
    ctx.strokeStyle = "rgb(84, 148, 247)";
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
  }
}

function drawBow() {
  if (canvasBow.getContext) {
    const ctx = canvasBow.getContext("2d");

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.beginPath();
        const x = 25 + j * 50; // Coordenada x
        const y = 25 + i * 50; // Coordenada y
        const radius = 20; // Radio del Arco
        const startAngle = 0; // Punto inicial del Círculo
        const endAngle = Math.PI + (Math.PI * j) / 2; // Punto final del Círculo
        const counterclockwise = i % 2 !== 0; // En el sentido de las agujas del reloj o en sentido contrario

        ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

        if (i > 1) {
          ctx.fillStyle = "rgb(121, 171, 252)";
          ctx.fill();
        } else {
          ctx.strokeStyle = "rgb(84, 148, 247)";
          ctx.stroke();
        }
      }
    }
  }
}

function drawCurveBezier() {
  if (canvasCurveBezier.getContext) {
    const ctx = canvasCurveBezier.getContext("2d");

    // Ejemplo de curvas cuadráticas
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.strokeStyle = "rgb(84, 148, 247)";
    ctx.stroke();
  }
}

function drawCurveCubic() {
  if (canvasCurveCubic.getContext) {
    const ctx = canvasCurveCubic.getContext("2d");

    // Ejemplo de curvas cúbicas
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fillStyle = "rgb(121, 171, 252)";
    ctx.fill();
  }
}

function drawPath2D() {
  if (canvasPath2D.getContext) {
    const ctx = canvasPath2D.getContext("2d");

    const rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    const circle = new Path2D();
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.strokeStyle = "rgb(84, 148, 247)";
    ctx.stroke(rectangle);
    ctx.fillStyle = "rgb(121, 171, 252)";
    ctx.fill(circle);
  }
}

drawRectangule();
drawTriangule();
drawFeather();
drawLines();
drawBow();
drawCurveBezier();
drawCurveCubic();
drawPath2D();
