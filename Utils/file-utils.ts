import { FileDifference } from "../models/file-difference";
import fs = require('fs');
import readLine = require('readline');

export class FileUtils {

    static async processLineByLine(filePath: string, lineHandler: (line: string) => void): Promise<void> {
        try {
            const rl = readLine.createInterface({
                input: fs.createReadStream(filePath),
                crlfDelay: Infinity
            });
    
            rl.on('line', lineHandler);
        } catch (err) {
            console.log(err);
        }
    }

    static findDiff(file1Path: string, file2Path: string): FileDifference {
        const diff = new FileDifference();
        return diff;
    }

}