// String.prototype.yell = function(){
//     return `omg ${this.toUpperCase()}!!! Aaaaa`
// }

// Array.prototype.pop = function(){
//     return "i forget to fucked up sorry"
// }

function hex(r,g,b){
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r,g,b){
    retirn `${r}, ${g}, ${b}`;
}

function makecolor(r,g,b){
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function(){
        const {r,g,b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    color.hex = function(){
        const {r,g,b} = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

const firstcolor = makecolor(35,255,150);
firstcolor.hex();

