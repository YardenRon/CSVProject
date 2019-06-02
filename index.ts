import { FileUtils } from './Utils/file-utils';
import { Contact } from './models/contact';

const FILE1_PATH = "./data/yesterday.txt";
const FILE2_PATH = "./data/today.txt";

function stringToContact(str: string): Contact {
    const contactDetails = str.split(',');
    return new Contact(parseInt(contactDetails[0]),
        contactDetails[1],
        contactDetails[2]);
}

function printContact(line: string): void {
    const contact = stringToContact(line);
    console.log(contact.toString());
}

// FileUtils.processLineByLine(FILE1_PATH, printContact);
// const result = FileUtils.findDiff(FILE1_PATH, FILE2_PATH);
// FileUtils.split(FILE1_PATH, 5);
FileUtils.sort(FILE1_PATH);