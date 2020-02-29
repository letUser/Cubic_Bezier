import "./styles.css";

let div = document.createElement('div');
div.style.width = "300px";
div.style.height = "300px";
document.body.prepend(div);

let svg = document.createElement('object');
svg.setAttribute('id', 'bezier');
svg.setAttribute('type', 'image/svg+xml');
svg.setAttribute('data', 'src/line.svg');
div.append(svg);