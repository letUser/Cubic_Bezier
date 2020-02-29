/* VARS */
/* ПЕРЕМЕННЫЕ */
let circles = [];
let bottomTrigger = document.getElementById('bottomTrigger');
circles.push(bottomTrigger);
let topTrigger = document.getElementById('topTrigger');
circles.push(topTrigger);
let line = document.getElementById('line');

/* INIT START PARAMS */
/* ОБЪЯВЛЯЕМ НАЧАЛЬНОЕ ЗНАЧЕНИЕ */
let x1 = 150;
let y1 = 150;
let x2 = 150;
let y2 = 150;

/* ITERATION FOR EVERY CIRCLE-TRIGGER */
/* ЦИКЛ ПО КАЖДОМУ КРУГУ-ТРИГГЕРУ */
for (let circle of circles) {
    circle.onmousedown = () => {
        let onMouseMove = (event) => { //movement visual //визуализируем движение
            circle.setAttribute('cx', event.pageX);
            circle.setAttribute('cy', event.pageY);

            if (event.target === circles[0]) { //if bttm trig, tho //если нижний триггер, то 
                x1 = event.pageX;
                y1 = event.pageY;
            } else { //if not bttm tri, tho //если не ниж, то
                x2 = event.pageX;
                y2 = event.pageY;
            }

            line.setAttribute("d", `M10 290 C ${x1} ${y1}, ${x2} ${y2}, 290 10`); //line coords //коорд линии
        };

        document.addEventListener('mousemove', onMouseMove); //concretize func //конкретизируем функ-ию

        circle.onmouseup = () => {
            document.removeEventListener('mousemove', onMouseMove); //remove conc func //убираем конк
        };
    };

    circle.ondragstart = () => false;
}