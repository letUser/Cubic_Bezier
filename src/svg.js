/* VARS */
/* ПЕРЕМЕННЫЕ */
let circles = [];
let bottomTrigger = document.getElementById('bottomTrigger');
circles.push(bottomTrigger);
let topTrigger = document.getElementById('topTrigger');
circles.push(topTrigger);
let line = document.getElementById('line');
let text = document.getElementById('text');
text.style.userSelect = "none";

/* INIT START PARAMS */
/* ОБЪЯВЛЯЕМ НАЧАЛЬНОЕ ЗНАЧЕНИЕ */
let x1 = 150;
let y1 = 150;
let x2 = 150;
let y2 = 150;

/* ITERATION FOR EVERY CIRCLE-TRIGGER */
/* ЦИКЛ ПО КАЖДОМУ КРУГУ-ТРИГГЕРУ */
for (let circle of circles) {
    circle.onmouseover = () => {
        circle.style.cursor = "grab";
    }

    circle.onmousedown = () => {
        circle.style.cursor = "grabbing";

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

            line.setAttribute("d", `M0 300 C ${x1} ${y1}, ${x2} ${y2}, 300 0`); //change coords //меняем координаты

            text.innerHTML = `cubic-bezier(${bezier(x1)} ${bezier(y1)}, ${bezier(x2)} ${bezier(y2)})`; //show Bezier props //показываем значения Безье
        };

        document.addEventListener('mousemove', onMouseMove); //concretize func //конкретизируем функ-ию

        circle.onmouseup = () => { //remove conc func //убираем конк
            document.removeEventListener('mousemove', onMouseMove);
            circle.style.cursor = "grab";
        };
        document.onmouseup = () => {
            document.removeEventListener('mousemove', onMouseMove);
            circle.style.cursor = "grab";
        };
    };

    circle.ondragstart = () => false; //kill native event //убираем нативный ивент
}

let bezier = (num) => { //visualize Bezier //визуализируем Безье
    return ((num * 100 / 300) / 100).toFixed(2);
}

text.innerHTML = `cubic-bezier(${bezier(x1)} ${bezier(y1)}, ${bezier(x2)} ${bezier(y2)})`;