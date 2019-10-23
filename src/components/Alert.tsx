import React, { Component, CSSProperties } from 'react';

type AlertProps = {
    text: string,
    bgColor?: string
}

const css: CSSProperties = {
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
        const { text, bgColor = 'green' } = this.props;
        return (
            <div style={{ backgroundColor: bgColor, ...css }}>
                {text}
            </div>
        )
    }
}