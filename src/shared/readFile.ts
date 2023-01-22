import * as fs from 'fs';
import * as path from 'path';
import {parse} from "csv-parse/sync";

export const readFile = (fileName:string, delimiter=";"):Array<string[]> => {
    const dataFolderName:string = process.env.DATA_FOLDER_NAME ? process.env.DATA_FOLDER_NAME : 'files';
    const dataPathToRead = path.join(__dirname, '..', '..', dataFolderName, fileName);

    const fileRead = fs.readFileSync(dataPathToRead);
    return parse(fileRead, { delimiter, from_line: 2 });
}