import React from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
    block: 'Card',
    elem: 'Image',
    tag: 'picture',
    content() {
        return (
                <Bem elem="ImageItem"
                     tag="img"
                     src={require(`../../../assets/${this.props.src}`)} />
        );
    }
});
