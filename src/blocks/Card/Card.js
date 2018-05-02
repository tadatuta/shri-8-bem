import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Title from 'e:Title';
import Image from 'e:Image';
import Info from 'e:Info';

import 'm:size=small | m:size=medium | m:size=large | m:withoutImage';

export default decl({
    block: 'Card',
    tag: 'article',
    mods({ size, withoutImage }) {
        return { size, withoutImage };
    },
    content() {
        const data = this.props.data;
        return (
            <Fragment>
                <header>
                    <Title text={data.title} color={data.titleColor}/>
                    <Title text={data.title}
                           color={data.titleColor}
                           isVisible={true}/>
                </header>
                {data.image ? (
                    <Image src={data.image}/>
                ) : null}
                <Info description={data.description} channel={data.channelName}/>
            </Fragment>
        );
    }
});
