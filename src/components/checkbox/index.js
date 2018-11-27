import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class CheckBox extends React.Component {
    static propTypes = {
        checked: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        style: PropTypes.object,
        onClick: PropTypes.func,
    };
    
    static defaultProps = {
        style: {},
        onClick: () => {},
    };

    render() {
        const {
            checked,
            label,
            style,
            onClick,
        } = this.props;
        return (
            <div className='checkbox' style={style}>
                <input className="styled-checkbox" id={`checkbox-${label}`} type="checkbox" checked={checked} onChange={onClick} />
                <label htmlFor={`checkbox-${label}`}>{label}</label>
            </div>
        );
    }
}

export default CheckBox;