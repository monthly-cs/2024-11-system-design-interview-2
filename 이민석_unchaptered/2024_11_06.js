const gridListGenerator = (gridId, area) => {
    const col   = gridId % 6               // 16 % 6             = 4;
    const row   = Math.ceil(gridId / 6)    // Math.floor(16 / 6) = 2;

    const grid  = [
        [1,  2,  3,  4,  5,  6],
        [7,  8,  9,  10, 11, 12],
        [13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35, 36]
    ];

    if (area === 1) return [grid[row-1][col-1]];

    const gap = area - 1;

    return grid.slice(row-1-gap, row+gap)
                .map(row => row.slice(col-1-gap, col+gap))
                .flat();
}

const gridId = 16;
const area = 1;
const gridList = gridListGenerator(gridId, area);
console.log(gridList);