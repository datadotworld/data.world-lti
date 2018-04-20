import {Promise} from 'bluebird';

export const fallback = (attemptedCmd: string): Promise<any> => {

    return new Promise((resolve, reject) => {

        setImmediate(() => {

            try {

                console.log(`Invalid command: ${ attemptedCmd }`);
                resolve();

            } catch (e) {

                console.log(e);
                reject(e);

            }

        });

    });

};