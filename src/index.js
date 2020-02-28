import "./styles.css";

let div = document.createElement('div');
div.style.width = "200px";
div.style.height = "200px";
document.body.prepend(div);

let svg = document.createElement('object');
svg.setAttribute('id', 'bezier');
svg.setAttribute('type', 'image/svg+xml');
svg.setAttribute('data', 'src/line.svg');
div.append(svg);

// let line = document.createElement('input');
// line.setAttribute('type', 'text');
// document.body.append(line);