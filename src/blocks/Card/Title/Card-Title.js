import React from 'react';
import { decl } from 'bem-react-core';

import 'm:isVisible';

export default decl({
    block: 'Card',
    elem: 'Title',
    tag: 'h3',
    mods({ isVisible }) {
        return { isVisible };
    },
    content() {
        const style = {
            color: this.props.color
        };

        return (
            <span style={style}>{this.props.text}</span>
        );
    }
});
