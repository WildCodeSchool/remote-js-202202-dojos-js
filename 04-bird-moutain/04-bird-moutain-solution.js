function peakHeight(mountain) {
    let height = 1;
    let heightMap = mountain.slice();

    heightMap = heightMap.map(line => line.map(char => char === ' ' ? 0 : '^'))
    // for (let i = 0; i < heightMap.length; i++) {
    //     for (let j = 0; j < heightMap[i].length; j++) {
    //         if (heightMap[i][j] === ' ') {
    //             heightMap[i][j] = 0;
    //         }
    //     }
    // }

    // S'il y a des 0 partout, c'est qu'il n'y a pas de montagne
    if (heightMap.reduce((acc, val) => acc.concat(val), []).every(element => element === 0))
        return 0;
    
    // let flatMoutain = true;
    // for (let i = 0; i < heightMap.length; i++) {
    //     for (let j = 0; j < heightMap[i].length; j++) {
    //         if (heightMap[i][j] !== 0) {
    //             flatMoutain = false;
    //         }
    //     }
    // }
    // if (flatMoutain) {
    //     return 0;
    // }

    const checkedLines = Array(heightMap.length).fill(false);
    // La première et la dernière ligne seront forcément à 1 de hauteur lorsqu'il y a un ^
    heightMap[0] = heightMap[0].map(char => char === '^' ? 1 : 0);
    checkedLines[0] = true;
    heightMap[heightMap.length - 1] = heightMap[heightMap.length - 1].map(char => char === '^' ? 1 : 0);
    checkedLines[checkedLines.length - 1] = true;

    // La première et la dernière colonne seront forcément à 1 de hauteur lorsqu'il y a un ^
    // Et on peut ignorer la première et la dernière lignes déjà traitées
    const columnHeight = heightMap[0].length - 1;
    for (let i = 1; i < heightMap.length - 1; i++) {
        heightMap[i][0] = (heightMap[i][0] === '^') ? 1 : 0;
        heightMap[i][columnHeight] = (heightMap[i][columnHeight] === '^') ? 1 : 0;
    }

    while (checkedLines.some(elem => !elem)) {
        const startIndex = checkedLines.indexOf(false);
        const endIndex = checkedLines.lastIndexOf(false);
        for (let i = startIndex; i <= endIndex; i++) {
            const line = heightMap[i];
            for (let j = 1; j < line.length - 1; j++) {
                const oneNeighborLessAndNotFilled = (
                    heightMap[i - 1][j] === height - 1 ||
                    heightMap[i + 1][j] === height - 1 ||
                    heightMap[i][j - 1] === height - 1 ||
                    heightMap[i][j + 1] === height - 1
                ) && heightMap[i][j] === '^';

                if (oneNeighborLessAndNotFilled) heightMap[i][j] = height;
            }
            // Si toute la ligne est remplie de nombre, la ligne est vérifiée
            checkedLines[i] = heightMap[i].every(element => Number(element) >= 0);
        }
        if (checkedLines.some(element => !element))
            height++;
    }
    //console.log(heightMap);
    return height;
}

const mountain = [
    "  ^^^^^     ".split(''),
    "  ^^^^^     ".split(''),
    "  ^^^^^     ".split(''),
    "  ^^^^^     ".split(''),
    "  ^^^^^     ".split('')
];

console.log(peakHeight(mountain));

module.exports = peakHeight;