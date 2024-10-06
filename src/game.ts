import { allWords } from "./words";
import { letters } from "./constants";
import { randomElement, targetInGrid, isDefined } from "./util";

export class Game {
    grid: string[][];
    // wordsInGrid: Set<string>;
    wordsInGrid: Record<string, number[][]>;
    foundWords: string[];
    checkWord: (word: string) => boolean;
    checkAndAddWord: (word: string) => boolean; // checks if word in grid and if yes adds to foundWords
    
    
    constructor(n: number = 4) {
        this.grid = this.generateRandomGrid(n);
        // this.wordsInGrid = this.generateWordsSet();
        this.wordsInGrid = this.generateWordsInGrid();
        this.foundWords = [];
        this.checkWord = (word: string) => {
            return isDefined(this.wordsInGrid[word]);
        };
        
        this.checkAndAddWord = (word: string): boolean => {
            if (this.checkWord(word) && !this.foundWords.includes(word)) {
                this.foundWords.push(word);
                return true;
            }
            return false;
        };
        console.log(this.wordsInGrid);
    }

    getSpacesForWord(word: string): number[][] {
        return this.wordsInGrid[word];
    }

    generateWordsInGrid(): Record<string, number[][]> {
        const words: Record<string, number[][]> = {};
        allWords.forEach((word) => {
            if (word.length > 2) {
                const targetReport = targetInGrid(this.grid, word);
                if (targetReport.found) {
                    words[word] = targetReport.spaces;
                }
            }
        });
        return words;
    }

    // generateWordsSet(): Set<string> {
    //     const set = new Set<string>();
    //     allWords.forEach((word) => {
    //         if (word.length > 2) {
    //             if (targetInGrid(this.grid, word).found) {
    //                 set.add(word);
    //             }
    //         }
    //     });
    //     return set;
    // }

    generateRandomGrid(n: number): string[][] {
        let grid: string[][] = [];
        for (let i = 0; i < n; i++) {
            let row: string[] = [];
            for (let j = 0; j < n; j++) {
                row.push(randomElement(letters));
            }
            grid.push(row);
        }
        return grid;
    }
}