import fs from "fs";


export const csvFileReader = (fileName: string) => {
    const data: string[][] = [];
};

export const read = (): string[][] => {
    return fs
        .readFileSync("football.csv", {
            encoding: "utf-8",
        })
        .split("\n")
        .map((row: string): string[] => {
            return row.split(",");
        });
};