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

/* CREATE HEADER */
/* СОЗДАЕМ HEADER */
let header = document.createElement('div');
header.classList.add('header');
header.innerHTML = `<p> Cubic Bezier UI serve </p>`;
document.body.prepend(header);