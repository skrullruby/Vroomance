import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import AppLogo from '../../resources/images/logo.png';

import './styles.css';

class Header extends React.Component {
    render() {
        const { location } = this.props;
        const isHome = location.pathname === '/';
        return (
            <div className={`app-header ${!isHome ? 'header-border' : ''}`}>
                <div className='app-header-view'>
                    {
                        isHome ?
                        <img src={AppLogo} alt='logo' height='57px' />
                        :
                        <Link to='/'>
                            <img src={AppLogo} alt='logo' height='57px' />
                        </Link>
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
