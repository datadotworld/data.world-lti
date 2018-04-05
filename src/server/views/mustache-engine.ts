import * as fs from 'fs';
import * as Mustache from 'mustache';

export default function (path: string, options:any, callback:any) {

    fs.readFile(path, (error: NodeJS.ErrnoException, content: Buffer) => {

        if (error) {

            return callback(error);

        } else {

            return callback(null, Mustache.render(content.toString(), options));

        }

    });

};