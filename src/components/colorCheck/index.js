import React from 'react';

import CheckBox from '../checkbox';

import './styles.css';

class ColorCheck extends React.Component {
    render() {
        const {
            checked,
            color,
            onSelect,
            style,
        } = this.props;
        return (
            <div className='colorCheck' style={style}>
                <CheckBox
                    label={`${color.name} (${color.quantity})`}
                    checked={checked}
                    onClick={onSelect}
                />
                <div className='colorCheckSpace' onClick={onSelect}/>
                <div
                    className='colorCircle'
                    style={{
                        backgroundColor: color.value,
                    }}
                    onClick={onSelect}
                />
            </div>
        );
    }
}

export default ColorCheck;
