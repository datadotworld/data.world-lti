import * as fs from 'fs';
import * as Mustache from 'mustache';
import * as p from 'path';

export default function (path: string, directory: string, options:any) {

    console.log(p.join(process.cwd(), directory, path));

    fs.readFile(p.resolve(__dirname, path), (error: NodeJS.ErrnoException, content: Buffer) => {

        return Mustache.render(content.toString(), options);

    });

};