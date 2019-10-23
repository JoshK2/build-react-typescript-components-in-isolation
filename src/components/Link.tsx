import React, { Component, CSSProperties } from 'react';

type LinkProps = {
    link: string
}

const css: CSSProperties = {
    fontSize: 16,
    color: '#000000',
}

export default class Link extends Component<LinkProps, {}> {
    render() {
        const { link, children } = this.props;
        return <a href={link} style={css}>{children}</a>
    }
}