import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';
import cards from '../../assets/data';

import Card from 'b:Card';

export default decl({
    block: 'Wrapper',
    tag: 'main',

    _renderCards() {
        return cards.map((card, index) => {
            let size = '';

            switch (card.size) {
                case 's':
                    size = 'small';
                    break;
                case 'm':
                    size = 'medium';
                    break;
                case 'l':
                    size = 'large';
                    break;
                default:
                    break;
            }

            return <Card key={`card-${index}`}
                         data={card}
                         size={size}
                         withoutImage={Boolean(!card.image)}/>
        });
    },

    content() {
        const main = this._renderCards();

        return (
            <Fragment>
                {main}
            </Fragment>
        );
    }
});
