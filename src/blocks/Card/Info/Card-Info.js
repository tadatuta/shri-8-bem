import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
    block: 'Card',
    elem: 'Info',
    content() {
        const autor = this.props.channel ? (
            <Bem elem="InfoActionsChannel">{this.props.channel}</Bem>
        ) : null;

        return (
            <Fragment>
                <Bem elem="InfoDescription">{this.props.description}</Bem>
                <Bem elem="InfoActions">
                    {autor}
                    <Bem elem="InfoActionsMore" tag="a" href="#"/>
                    <Bem elem="InfoActionsLike" tag="a" href="#"/>
                </Bem>
            </Fragment>
        );
    }
});
