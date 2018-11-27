import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class Select extends React.Component {
    static propTypes = {
        options: PropTypes.array.isRequired,
        selected: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired,
    };
    
    constructor(props) {
        super(props);

        this.state = {
            listOpen: false,
        };
    }

    componentDidMount() {
        document.addEventListener('mouseup', this.handleMouseUp, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mouseup', this.handleMouseUp, false);
    }

    handleMouseUp = (e) => {
        const { listOpen } = this.state;
        const element = e.target;
        if (!listOpen) {
            if (this.select.contains(element)) {
                this.toggleList();
            }
            return;
        }
        if (this.list.contains(element) && element.tagName === 'OPTION') {
            this.onOptionSelect(+element.value);
        }
        if (!this.list.contains(element) || element.tagName === 'OPTION') {
            this.toggleList();
        }
    }

    toggleList = () => {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    onOptionSelect = (value) => {
        const {
            options,
            onChange,
        } = this.props;
        const index = options.findIndex(option => option.value === value);
        onChange(index, value);
    }


    render() {
        const {
            listOpen,
        } = this.state;
        const {
            options,
            selected,
        } = this.props;
        const dir = listOpen ? 'up' : 'down';
        return (
            <div ref={r => this.select = r} className='custom-select'>
                <div className='custom-select-header'>{options[selected].label}</div>
                <i className={`custom-select-arrow-icon arrow-${dir} fas fa-sort-${dir}`}></i>
                {listOpen && <ul ref={r => this.list = r} className='option-list'>
                    {
                        options.map((option, idx) => (
                            <option key={idx} className='option-list-item' value={option.value}>{option.label}</option>
                        ))
                    }
                </ul>}
            </div>
        );
    }
}

export default Select;