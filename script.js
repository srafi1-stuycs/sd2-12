const norway = [14, 14, 11];
const usa = [9, 8, 6];
var svg;
var gold, silver, bronze;
var goldText, silverText, bronzeText;

function norwayMedals() {
    gold.setAttribute('r', norway[0] * 5);
    goldText.innerHTML = norway[0];
    silver.setAttribute('r', norway[1] * 5);
    silverText.innerHTML = norway[1];
    bronze.setAttribute('r', norway[2] * 5);
    bronzeText.innerHTML = norway[2];
}

function usaMedals() {
    gold.setAttribute('r', usa[0] * 5);
    goldText.innerHTML = usa[0];
    silver.setAttribute('r', usa[1] * 5);
    silverText.innerHTML = usa[1];
    bronze.setAttribute('r', usa[2] * 5);
    bronzeText.innerHTML = usa[2];
}

function createCircle(x, y, color) {
    var ret = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    ret.setAttribute('cx', x);
    ret.setAttribute('cy', y);
    ret.setAttribute('fill', color);
    ret.setAttribute('r', 20);
    return ret;
}

function createText(x, y) {
    var ret = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    ret.setAttribute('x', x - 15);
    ret.setAttribute('y', y);
    ret.setAttribute('font-size', 30);
    return ret;
}

function main() {
    gold = createCircle(100, 250, '#fd0');
    goldText = createText(100, 250);
    silver = createCircle(250, 250, '#aaa');
    silverText = createText(250, 250);
    bronze = createCircle(400, 250, '#da0');
    bronzeText = createText(400, 250);
    svg = document.getElementById('vimage');
    svg.appendChild(gold);
    svg.appendChild(goldText);
    svg.appendChild(silver);
    svg.appendChild(silverText);
    svg.appendChild(bronze);
    svg.appendChild(bronzeText);
}
