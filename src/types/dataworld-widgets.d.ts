export as namespace dataworld;

export interface DatasetSelectorOptions {

    client_id: string
    hideSearchBar?: boolean
    hideViewButton?: boolean
    linkText?: string
    query?: string
    tabs?: Array<string>

}

export interface SelectedDataset {

    id: string
    owner: string

}

export class DatasetSelector {

    constructor(options: DatasetSelectorOptions);

    cancel(callback: () => void): void;

    show(): void;

    success(callback: (Array<SelectedDataset>)): void;

}