import { allWords } from "./words";
import { letters } from "./constants";
import { randomElement, targetInGrid, isDefined } from "./util";

export class Game {
    gridSize: number;
    grid: string[][];
    wordsInGrid: Record<string, number[][]>;
    foundWords: string[];
    allWords: string[];
    numWordsInGrid: number;
    
    constructor(n: number = 4) {
        this.gridSize = n;
        this.allWords = allWords;
        this.grid = this.generateRandomGrid(this.gridSize);
        this.wordsInGrid = this.generateWordsInGrid();
        this.foundWords = [];
        this.numWordsInGrid = Object.keys(this.wordsInGrid).length;
    }

    setWords(newWords: string[]): void {
        this.allWords = newWords;
        this.wordsInGrid = this.generateWordsInGrid();
        this.foundWords = [];
        this.numWordsInGrid = Object.keys(this.wordsInGrid).length;
    }

    setGrid(grid: string[][]): void {
        this.grid = grid;
        this.wordsInGrid = this.generateWordsInGrid();
        this.foundWords = [];
        this.numWordsInGrid = Object.keys(this.wordsInGrid).length;
    }

    resetGame(): void {
        this.grid = this.generateRandomGrid(this.gridSize);
        this.wordsInGrid = this.generateWordsInGrid();
        this.foundWords = [];
        this.numWordsInGrid = Object.keys(this.wordsInGrid).length;
    }

    checkAndAddWord(word: string): boolean {
        if (this.checkWord(word) && !this.foundWords.includes(word)) {
            this.foundWords.push(word);
            return true;
        }
        return false;
    }

    checkWord(word: string): boolean {
        return isDefined(this.wordsInGrid[word]);
    }

    getSpacesForWord(word: string): number[][] {
        return this.wordsInGrid[word];
    }

    generateWordsInGrid(): Record<string, number[][]> {
        const words: Record<string, number[][]> = {};
        this.allWords.forEach((word) => {
            if (word.length > 2) {
                const targetReport = targetInGrid(this.grid, word);
                if (targetReport.found) {
                    words[word] = targetReport.spaces;
                }
            }
        });
        return words;
    }

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