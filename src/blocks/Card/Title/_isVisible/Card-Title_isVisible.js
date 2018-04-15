import React from 'react';
import { declMod } from 'bem-react-core';

export default declMod({ isVisible: true }, {
    block: 'Card',
    elem: 'Title',
    tag: 'div',
    content() {
        const style = {
            color: this.props.color
        };

        return (
            // eslint-disable-next-line
            <a href="#" style={style}>{this.props.text}</a>
        );
    }
});
