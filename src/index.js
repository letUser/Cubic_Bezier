import "./styles.css";

/* MAKE WRAPP */
/* СОЗДАЕМ ОБЕРТКУ */
let div = document.createElement('div');
div.classList.add('cubic');
document.body.prepend(div);

/* ADD SVG */
/* ПОДКЛЮЧАЕМ SVG */
let svg = document.createElement('object');
svg.setAttribute('id', 'bezier');
svg.setAttribute('type', 'image/svg+xml');
svg.setAttribute('data', 'src/line.svg');
div.append(svg);

let i = document.getElementById('bezier').contentDocument.body;
console.log(i)