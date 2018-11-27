import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class RangeSelect extends React.Component {
    static propTypes = {
        showHistogram: PropTypes.bool,
        style: PropTypes.object,
        min: PropTypes.number,
        max: PropTypes.number,
        left: PropTypes.number,
        right: PropTypes.number,
        step: PropTypes.number,
        onChange: PropTypes.func.isRequired,
    };

    static defaultProps = {
        showHistogram: false,
        style: {},
        min: 0,
        max: 100,
        left: 0,
        right: 100,
        step: 1,
    };
    
    constructor(props) {
        super(props);

        this.state = {
            grabHandle: false,
            leftHandle: false,
        };
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleMouseDown, false);
        document.addEventListener('mousemove', this.handleMouseMove, false);
        document.addEventListener('mouseup', this.handleMouseUp, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleMouseDown, false);
        document.removeEventListener('mousemove', this.handleMouseMove, false);
        document.removeEventListener('mouseup', this.handleMouseUp, false);
    }

    handleMouseDown = (e) => {
        const element = e.target;
        if (element.className === 'sliderHandle' && this.slider.contains(element)) {
            const leftHandle = element.id === 'leftHandle';
            this.setState({
                grabHandle: true,
                leftHandle,
                prevX: e.pageX,
            });
        }
    }

    handleMouseMove = (e) => {
        const { grabHandle } = this.state;
        if (grabHandle) {
            const {
                leftHandle,
                prevX
            } = this.state;
            const {
                min,
                max,
                left,
                right,
                step,
                onChange,
            } = this.props;
            const { width } = this.slider.getBoundingClientRect();
            const newX = e.pageX;
            let move = (newX - prevX) / width * (max - min);
            if (move > 0) {
                move = Math.floor(move);
            } else if (move < 0) {
                move = -Math.floor(-move);
            }
            let newLeft = left, newRight = right;
            if (leftHandle) {
                newLeft = Math.min(newLeft + move, right);
                newLeft = Math.max(newLeft, min);
                newLeft -= newLeft % step;
            } else {
                newRight = Math.max(left, newRight + move);
                newRight = Math.min(newRight, max);
                newRight -= newRight % step;
            }
            if (newLeft !== left || newRight !== right) {
                onChange(newLeft, newRight);
                this.setState({
                    prevX: prevX + move / (max - min) * width,
                });
            }
        }
    }

    handleMouseUp = (e) => {
        const { grabHandle } = this.state;
        if (grabHandle) {
            this.setState({ grabHandle: false });
        }
    }

    render() {
        const {
        } = this.state;
        const {
            showHistogram,
            style,
            min,
            max,
            left,
            right,
        } = this.props;
        const range = max - min;
        return (
            <div
                className='rangeSelect'
                style={style}
            >
                <div ref={r => this.slider = r} className='rangeSliderContainer'>
                    <div
                        className='sliderTrack'
                        style={{
                            marginLeft: `${(left - min) / range * 100}%`,
                            width: `${(right - left) / range * 100}%`,
                        }}
                    />
                    <button
                        type='button'
                        id='leftHandle'
                        className='sliderHandle'
                        style={{
                            left: `${(left - min) / range * 100}%`,
                            top: '50%',
                        }}
                    />
                    <button
                        type='button'
                        id='rightHandle'
                        className='sliderHandle'
                        style={{
                            left: `${(right - min) / range * 100}%`,
                            top: '50%',
                        }}
                    />
                </div>
            </div>
        );
    }
}

// RangeSelect.defaultProps = {
//     showHistogram: false,
//     style: {},
// };

export default RangeSelect;
