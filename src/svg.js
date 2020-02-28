let circles = [];
let x2 = document.getElementById('x2');
circles.push(x2);
let y2 = document.getElementById('y2');
circles.push(y2);

for (let circle of circles) {
    circle.onmousedown = () => {

        let moveAt = (pageX, pageY) => {
            circle.setAttribute('cx', pageX);
            circle.setAttribute('cy', pageY);
        };

        let onMouseMove = (event) => {
            moveAt(event.pageX, event.pageY);
        };

        document.addEventListener('mousemove', onMouseMove);

        circle.onmouseup = () => {
            document.removeEventListener('mousemove', onMouseMove);
            circle.onmouseup = null;
        };
    };

    circle.ondragstart = () => false;
}