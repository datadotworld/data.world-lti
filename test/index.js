function importAll (r) {

    r.keys().forEach(r);

}

importAll(require.context('../', true, /\.test.ts$/));