import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import 'b:Page';
import Header from 'b:Header';
import Wrapper from 'b:Wrapper';

export default decl({
    block: 'App',
    content() {
        return (
            <Fragment>
                <Header/>
                <Wrapper/>
            </Fragment>
        );
    }
});
