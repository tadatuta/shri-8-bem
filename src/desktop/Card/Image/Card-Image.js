import React from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
    block: 'Card',
    elem: 'Image',
    tag: 'picture',
    _getBigImage() {
        const arr = this.props.src.split('.');
        arr[0] = arr[0] + '@2x';

        return arr.join('.');
    },
    content() {
        return (
            <Bem elem="ImageItem"
                 tag="img"
                 src={require(`../../../assets/${this._getBigImage()}`)}/>
        );
    }
});
