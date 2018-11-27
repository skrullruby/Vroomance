import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class FilterButton extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        filled: PropTypes.bool.isRequired,
        onClear: PropTypes.func.isRequired,
        onApply: PropTypes.func.isRequired,
        detailStyle: PropTypes.object,
    };

    constructor() {
        super();

        this.state = {
            showDetail: false,
            width: 0,
        };
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleMouseDown, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleMouseDown, false);
    }

    handleMouseDown = (e) => {
        const element = e.target;
        if (this.button === element || (this.button === element.parentElement && element.id === 'filterName')) {
            this.toggleDetail();
            return;
        }
        if (this.detail && !this.detail.contains(element)) {
            this.setState({ showDetail: false });
        }
    }

    toggleDetail = () => {
        const { showDetail } = this.state;
        this.setState({
            showDetail: !showDetail,
        }, () => {
            if (!showDetail) {
                this.setState({
                    width: this.detail.firstChild.scrollWidth,
                });
            }
        });
    }

    render() {
        const {
            showDetail,
            width,
        } = this.state;
        const {
            name,
            filled,
            onClear,
            onApply,
            detailStyle,
            children,
        } = this.props;
        return (
            <div
                ref={r => this.button = r}
                className='filterButton'
                style={{
                    backgroundColor: filled ? '#0970b1' : 'white',
                    color: filled ? 'white' : '#46484b',
                }}
            >
                <span id='filterName'>{name}</span>
                {showDetail && (
                    <div
                        ref={r => this.detail = r}
                        className='filterDetail'
                    >
                        <div style={{ ...detailStyle, minWidth: width}}>
                            {children}
                        </div>
                        <div className='filterDetailButtonContainer'>
                            <div
                                className='buttonClear'
                                onClick={() => {
                                    onClear();
                                }}
                            >Clear</div>
                            <div
                                className='buttonApply'
                                onClick={() => {
                                    this.toggleDetail();
                                    onApply();
                                }}
                            >Apply</div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default FilterButton;
