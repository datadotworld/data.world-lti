import * as React from 'react';

export interface LaunchContextInterface {

    name: string

}

export const defaultContext = {

    name: 'Wilson'

};

export const LaunchContext = React.createContext(defaultContext);
