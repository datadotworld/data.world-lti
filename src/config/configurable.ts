interface IConfigurationPair<K, V> {

    key: K;
    value: V;

}

export class Configurable<K, V> {

    /**
     * An Object holding the key-value pairs.
     * @type {Object}
     * @private
     */
    protected index: { [key: string]: IConfigurationPair<K, V> };

    /**
     * Creates an empty configuration.
     * @constructor
     */
    constructor() {

        this.index = {};

    }

    /**
     * Returns an Object of all of the key-value pairs in the index.
     * @return {Object}
     */
    getIndex(): { [key: string]: V } {

        let initialValue: { [key: string]: V } = {};

        return Object.keys(this.index).reduce((acc: any, key: any) => {

            acc[key.toString()] = this.getKeyValue(key);
            return acc;

        }, initialValue);

    }

    /**
     * Retrieves the value associated with the given key.
     * @param {K} key
     * @return {any}
     */
    getKeyValue(key: K): V | undefined {

        const pair: IConfigurationPair<K, V> = this.index[key.toString()];

        let toBeReturned;

        if (pair == null) {

            toBeReturned = undefined;

        } else {

            toBeReturned = pair.value;
        }

        return toBeReturned;

    }

    /**
     * Determines whether the given key exists in the index.
     * @param {Object} key
     * @return {boolean}
     */
    hasKey(key: K): boolean {

        return Object(this.index).hasOwnProperty(key.toString());

    }

    /**
     * Sets the value of the given key to the given value.
     * @param {Object} key
     * @param {Object} value
     */
    setKeyValue(key: K, value: V): void {

        this.index[key.toString()] = { key: key, value: value };

    }

}