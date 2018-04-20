import * as path from 'path';
import * as Umzug from 'umzug';
import {Promise} from "bluebird";

export const status = (umzug: Umzug.Umzug): Promise<any> => {

    let results = {} as any;

    return umzug.execute()
        .then(executed => {

            results.executed = executed;
            return umzug.pending();

        }).then(pending => {

            results.pending = pending;
            return results;

        }).then(({ executed, pending }) => {

            executed = executed.map((m: any) => {

                m.name = path.basename(m.file, '.js');
                return m;

            });

            pending = pending.map((m: any) => {

                m.name = path.basename(m.file, '.js');
                return m;

            });

            const current = executed.length > 0 ? executed[0].file : '<NO_MIGRATIONS>';
            const status = {

                current: current,
                executed: executed.map((m: any) => m.file),
                pending: pending.map((m: any) => m.file)

            };

            console.log(JSON.stringify(status, null, 2));

            return { executed, pending };
        });

};