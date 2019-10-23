import React, { Component, CSSProperties } from 'react';
import Link from './Link';

type AlertProps = {
    text: string,
    bgColor?: string,
    link?: string
}

const css: CSSProperties = {
    display: 'inline-block',
    position: 'relative',
    padding: '0.75rem 1.25rem',
    border: '1px solid transparent',
    borderRadius: '0.25rem',
    width: 'fit-content',
    fontSize: 16,
    color: '#fafafa'
}

export default class Alert extends Component<AlertProps, {}> {
    render() {
        const { text, bgColor = 'green', link } = this.props;
        if (link) {
            return (
                <Link link={link}>
                    <div style={{ backgroundColor: bgColor, ...css }}>
                        {text}
                    </div>
                </Link>
            )
        }
        return (
            <div style={{ backgroundColor: bgColor, ...css }}>
                {text}
            </div>
        )
    }
}