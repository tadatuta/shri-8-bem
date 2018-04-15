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
        return (
            <Fragment>
                <header>
                    <Title text={this.props.data.title} color={this.props.data.titleColor}/>
                    <Title text={this.props.data.title}
                           color={this.props.data.titleColor}
                           isVisible={true}/>
                </header>
                {this.props.data.image ? (
                    <Image src={this.props.data.image}/>
                ) : null}
                <Info description={this.props.data.description} channel={this.props.data.channelName}/>
            </Fragment>
        );
    }
});
