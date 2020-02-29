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
let x1 = 140;
let y1 = 140;
let x2 = 140;
let y2 = 140;

/* ITERATION FOR EVERY CIRCLE-TRIGGER */
/* ЦИКЛ ПО КАЖДОМУ КРУГУ-ТРИГГЕРУ */
for (let circle of circles) {
    circle.onmousedown = () => {
        let onMouseMove = (event) => { //movement visual //визуализируем движение
            circle.setAttribute('cx', event.pageX);
            circle.setAttribute('cy', event.pageY);

            if (event.pageX >= 300) { //overflow block //блок выхода за поля
                circle.setAttribute('cx', "300");
                if (event.target === circle[0]) x1 = 300;
                if (event.target === circle[1]) x2 = 300;
            } else if (event.pageX <= 0) {
                circle.setAttribute('cx', "0");
                if (event.target === circle[0]) x1 = 0;
                if (event.target === circle[1]) x2 = 0;
            } else if (event.pageY >= 300) {
                circle.setAttribute('cy', "300");
                if (event.target === circle[0]) y1 = 300;
                if (event.target === circle[1]) y2 = 300;
            } else if (event.pageY <= 0) {
                circle.setAttribute('cy', "0");
                if (event.target === circle[0]) y1 = 0;
                if (event.target === circle[1]) y2 = 0;
            } else {
                if (event.target === circles[0]) { //if bttm trig, then //если нижний триггер, то 
                    x1 = event.pageX;
                    y1 = event.pageY;
                } else if (event.target === circles[1]) { //if not bttm tri, then //если не ниж, то
                    x2 = event.pageX;
                    y2 = event.pageY;
                }
            }

            line.setAttribute("d", `M10 290 C ${x1} ${y1}, ${x2} ${y2}, 290 10`);
        };

        document.addEventListener('mousemove', onMouseMove); //concretize func //конкретизируем функ-ию

        circle.onmouseup = () => document.removeEventListener('mousemove', onMouseMove);
        document.onmouseup = () => document.removeEventListener('mousemove', onMouseMove);
        //remove conc func //убираем конк
    };

    circle.ondragstart = () => false; //kill native event //убираем нативный ивент
}

console.log(document.parentNode);