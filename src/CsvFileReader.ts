import fs from "fs";


export const csvFileReader = (fileName: string) => {
    const data: string[][] = [];
};

export const read = (fileName: string): string[][] => {
    return fs
        .readFileSync(fileName, {
            encoding: "utf-8",
        })
        .split("\n")
        .map((row: string): string[] => {
            return row.split(",");
        });
};