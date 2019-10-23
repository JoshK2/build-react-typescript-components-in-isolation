import React, { Component, CSSProperties } from 'react';

type ButtonProps = {
    text: string,
    disable?: boolean,
    onClick: Function
}

const css: CSSProperties = {
    padding: '5px 9px',
    border: '0',
    borderRadius: '3px',
    fontSize: 16,
    cursor: 'pointer',
    color: '#fafafa',
    outline: 'none'
}

export default class Button extends Component<ButtonProps, {}> {
    render() {
        const { text, disable = false, onClick } = this.props;
        return (
            <button style={{ backgroundColor: disable ? '#cdcdcd' : '#2196F3', ...css }} onClick={(e) => onClick(e)}>
                {text}
            </button>
        )
    }
}