import * as Umzug from 'umzug';
import {Promise} from "bluebird";
import {status} from './status';

export const migrate = (umzug: Umzug.Umzug): Promise<any> => {

    return umzug.up();

};

export const next = (umzug: Umzug.Umzug): Promise<any> => {

    return status(umzug).then(({executed, pending}) => {

        if (pending.length === 0) {

            return Promise.reject(new Error('No pending migrations'));

        }

        const next = pending[0].name;

        return umzug.up({ to: next });

    })

};