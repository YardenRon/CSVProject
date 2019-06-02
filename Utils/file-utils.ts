import { FileDifference } from "../models/file-difference";
import fs = require('fs');
import readLine = require('readline');
import splitter = require('split-file');
import path = require('path');

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

    static async sortExternal(filePath: string, chunksNum: number): Promise<void> {
        // split file
        // sort each chunk
        // k-way merge those chunks
    }

    static async split(filePath: string, chunksNum: number): Promise<void> {
        try {
            const splittedFilesPaths = await splitter.splitFile(filePath, chunksNum);
            splittedFilesPaths.forEach(element => {
                console.log(element);
            });
        } catch(err) {
            console.log(err);
        }
    }

    static async sort(filePath: string): Promise<void> {
        const data = [];
        const rl = readLine.createInterface({
            input: fs.createReadStream(filePath),
            crlfDelay: Infinity,
            terminal: false
        });
        
        rl.on('line', (line) => data.push(line.split(',')));
        
        rl.on('close', () => {
            data.sort((a, b) => parseInt(a[0])-parseInt(b[0]));
        
            const pathDetails = path.parse(filePath);
            const outputPath = pathDetails['dir'] + '\\' + pathDetails['name'] + "_sorted" + pathDetails['ext'];
            const writer = fs.createWriteStream(outputPath);
            data.forEach(line => writer.write(line.join(',') + '\n'));
            writer.end();     
        });
    }

    static async merge(filesPaths: string[]): Promise<void> {

    }

    static findDiff(file1Path: string, file2Path: string): FileDifference {
        const diff = new FileDifference();
        return diff;
    }

}