import { read, csvFileReader } from './CsvFileReader';


enum matchResult {
    homeWin = "H",
    awayWin = "A",
    draw = "D",
}

const matches: string[][] = read('football.csv');

let manUnitedWins: number = 0;

for (let match of matches) {
    if (match[1] === "Man United" && match[5] === matchResult.homeWin) {
        manUnitedWins++;
    } else if (match[2] === "Man United" && match[5] === matchResult.awayWin) {
        manUnitedWins++;
    }
}

console.log("test", `Man United won ${manUnitedWins} games`);
