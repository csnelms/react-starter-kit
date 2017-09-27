import React from 'react';

import Search from './Search.js';

const config = {
    baseURL: 'https://cfdev1.npe.clearcapital.net/sandbox_csn2/ccfile/root/sites/intranet/',
    baseToolsURL: 'https://cfdev1.npe.clearcapital.net/sandbox_csn2/ccfile/root/sites/tools/'
};

class SolicitationsMain extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Search config={config} />
            </div>
        );
    }

}

export default SolicitationsMain;
