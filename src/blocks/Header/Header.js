import React from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
    block: 'Header',
    tag: 'header',
    content() {
        return (
            <Bem elem="Logo" tag="a" href="/" alt="Яндекс Дзен"/>
        );
    }
});
