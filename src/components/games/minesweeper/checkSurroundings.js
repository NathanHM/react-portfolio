export default function checkSurroundings(field, height, width) {

    const new_field = field;

    for (let j = 0; j < height; j++) {
        for (let i = 0; i < width; i++) {

            const surroundings = [];

            if (j > 0) {

                if (i > 0) {
                    surroundings.push(field[i - 1 + width * (j - 1)].value)
                } else {
                    surroundings.push(false)
                }

                surroundings.push(field[i + width * (j - 1)].value)

                if (i < width - 1) {
                    surroundings.push(field[i + 1 + width * (j - 1)].value)
                } else {
                    surroundings.push(false)
                }

            } else {
                surroundings.push(false, false, false)
            }

            if (i > 0) {
                surroundings.push(field[i - 1 + width * j].value)
            } else {
                surroundings.push(false)
            }
            if (i < width - 1) {
                surroundings.push(field[i + 1 + width * j].value)
            } else {
                surroundings.push(false)
            }

            if (j < height - 1) {

                if (i > 0) {
                    surroundings.push(field[i - 1 + width * (j + 1)].value)
                } else {
                    surroundings.push(false)
                }

                surroundings.push(field[i + width * (j + 1)].value)

                if (i < width - 1) {
                    surroundings.push(field[i + 1 + width * (j + 1)].value)
                } else {
                    surroundings.push(false)
                }
            } else {
                surroundings.push(false, false, false)
            }

            new_field[i + j * width].surroundings = surroundings;
            let count = 0;
            surroundings.forEach(cell => {if (cell === 'M') {count++;}});
            if (new_field[i + j * width].value !== 'M') {
                new_field[i + j * width].value = count;
            }

        }
    }

    return new_field;

}