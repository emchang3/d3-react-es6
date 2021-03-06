// steelblue: 70, 130, 180
import * as d3 from 'd3';

export const colorScale = (point, color, data, focused, index) => {
    let min = 0;
    let max = d3.max(data);

    const range = max - min;
    const spot = point - min;

    let ratio = spot / range;

    if (focused === index) {
        ratio = 1.25;
    }

    // Need to map it in reverse to the color.

    const red = 255 - (ratio * (255 - color[0]));
    const green = 255 - (ratio * (255 - color[1]));
    const blue = 255 - (ratio * (255 - color[2]));

    return `rgb(${parseInt(red)}, ${parseInt(green)}, ${parseInt(blue)})`;
}

export const colorScale2 = (point, color, max) => {
    const min = 0;
    const range = max - min;
    const spot = point - min;

    let ratio = spot / range;

    const red = 220 - (ratio * (220 - color[0]));
    const green = 220 - (ratio * (220 - color[1]));
    const blue = 220 - (ratio * (220 - color[2]));

    return `rgb(${parseInt(red)}, ${parseInt(green)}, ${parseInt(blue)})`;
}
