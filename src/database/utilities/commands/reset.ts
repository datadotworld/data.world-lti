import * as Umzug from 'umzug';
import {Promise} from "bluebird";
import {status} from './status';

export const previous = (umzug: Umzug.Umzug): Promise<any> => {

    return status(umzug).then(({executed, pending}) => {

        if (executed.length === 0) {

            return Promise.reject(new Error('Already at initial state'));

        }

        const prev = executed[executed.length - 1].name;

        return umzug.down({ to: prev });

    });

};

export const reset = (umzug: Umzug.Umzug): Promise<any> => {

    return umzug.down({ to: 0 });

};