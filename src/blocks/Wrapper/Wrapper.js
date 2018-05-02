import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';
import cards from '../../assets/data';

import Card from 'b:Card';

export default decl({
    block: 'Wrapper',
    tag: 'main',
    content() {
        return <Fragment>
            {cards.map((card, index) =>
                <Card key={`card-${index}`}
                    data={card}
                    size={{ s: 'small', m: 'medium', l: 'large' }[card.size]}
                    withoutImage={!card.image}/>
            )}
        </Fragment>;
    }
});
