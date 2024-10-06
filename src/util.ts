// returns random element of array, or undefined if array has no elements
export const randomElement = (arr: any[]): any => {
    if (arr.length > 0) {
        return arr[Math.floor(arr.length * Math.random())];
    }
}

export const isDefined = (ele: any): boolean => {
    if (ele === undefined || ele === null) {
        return false;
    }
    return true;
};

type TargetReport = {
    found: boolean, // whether the target is in the grid
    spaces: number[][] // all the positions occupied by target in grid
}

// returns true if target string is in grid according to boggle rules, false otherwise
export const targetInGrid = (grid: string[][], target: string): TargetReport => {
    let targetFound = false;
    let spacesFound: number[][] = [];
    
    // if first letter is present in grid, do partial search starting at that space
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === target[0]) {
                const remainingTarget = target.split("").slice(1, target.length).join("");
                const used = [[row, col]];
                const subAnswer = partialGridSearch(grid, remainingTarget, [row, col], used);
                if (subAnswer.found) {
                    targetFound = true;
                    spacesFound = subAnswer.spaces;
                }
            }
        }
    }
    
    return {
        found: targetFound,
        spaces: spacesFound
    };
}

// recursive helper for targetInGrid. Searches for target starting at specified position and ignoring
// any spaces already specified as used
// - startPos in form of [row, col]
// - used in form [[row1, col1], [row2, col2], ...] for all spaces not to search
const partialGridSearch = (grid: string[][], target: string, startPos: number[], used: number[][]): TargetReport => {
    if (target.length === 0) {
        return {
            found: true,
            spaces: used
        };
    }
    const nextChar = target[0];
    const dirsToLook = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1]
    ];
    for (let i = 0; i < dirsToLook.length; i++) {
        const dir = dirsToLook[i];
        const spaceToLook = [startPos[0] + dir[0], startPos[1] + dir[1]];
        if (!offGrid(grid, spaceToLook) && !alreadyUsed(used, spaceToLook)) {
            if (grid[spaceToLook[0]][spaceToLook[1]] === nextChar) {
                const newTarget = target.split("").slice(1, target.length).join("");
                const newUsed = deepCopy(used);
                newUsed.push(spaceToLook);
                const subSearchAnswer = partialGridSearch(grid, newTarget, spaceToLook, newUsed);
                if (subSearchAnswer.found) {
                    return subSearchAnswer;
                }
            }
        }
    }
    return {
        found: false,
        spaces: []
    };
}

// // returns true if target string is in grid according to boggle rules, false otherwise
// export const targetInGrid = (grid: string[][], target: string): boolean => {
//     let targetFound = false;
    
//     // if first letter is present in grid, do partial search starting at that space
//     for (let row = 0; row < grid.length; row++) {
//         for (let col = 0; col < grid[0].length; col++) {
//             if (grid[row][col] === target[0]) {
//                 const remainingTarget = target.split("").slice(1, target.length).join("");
//                 const used = [[row, col]];
//                 if (partialGridSearch(grid, remainingTarget, [row, col], used)) {
//                     targetFound = true;
//                 }
//             }
//         }
//     }
    
//     return targetFound;
// }

// // recursive helper for targetInGrid. Searches for target starting at specified position and ignoring
// // any spaces already specified as used
// // - startPos in form of [row, col]
// // - used in form [[row1, col1], [row2, col2], ...] for all spaces not to search
// const partialGridSearch = (grid: string[][], target: string, startPos: number[], used: number[][]): boolean => {
//     if (target.length === 0) {
//         return true;
//     }
//     const nextChar = target[0];
//     const dirsToLook = [
//         [-1, -1],
//         [-1, 0],
//         [-1, 1],
//         [0, 1],
//         [1, 1],
//         [1, 0],
//         [1, -1],
//         [0, -1]
//     ];
//     for (let i = 0; i < dirsToLook.length; i++) {
//         const dir = dirsToLook[i];
//         const spaceToLook = [startPos[0] + dir[0], startPos[1] + dir[1]];
//         if (!offGrid(grid, spaceToLook) && !alreadyUsed(used, spaceToLook)) {
//             if (grid[spaceToLook[0]][spaceToLook[1]] === nextChar) {
//                 const newTarget = target.split("").slice(1, target.length).join("");
//                 const newUsed = deepCopy(used);
//                 newUsed.push(spaceToLook);
//                 if (partialGridSearch(grid, newTarget, spaceToLook, newUsed)) {
//                     return true;
//                 }
//             }
//         }
//     }
//     return false;
// }

// deep copys an array
const deepCopy = (arr: any[]): any[] => {
    return arr.map((ele) => {
        if (Array.isArray(ele)) {
            return deepCopy(ele);
        } else {
            return ele;
        }
    });
};

const alreadyUsed = (used: number[][], pos: number[]): boolean => {
    let posFound = false;
    used.forEach((usedPos) => {
        if (pos[0] === usedPos[0] && pos[1] === usedPos[1]) {
            posFound = true;
        }
    });
    return posFound;
}

const offGrid = (grid: string[][], pos: number[]): boolean => {
    const numRows = grid.length;
    const numCols = grid[0].length;
    if (pos[0] < 0 || pos[0] > numRows - 1) {
        return true;
    }
    if (pos[1] < 0 || pos[1] > numCols - 1) {
        return true;
    }
    return false;
}