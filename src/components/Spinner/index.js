import React from 'react';
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style.scss'

const Spinner = ({ spinning, children }) =>{

    return (
        <div className={cx(
            'spinner',
            { spinning }
        )}>
            { children }
        </div>
    );
};

Spinner.defaultProps = {
    spinning: false
};

Spinner.propTypes = {
    spinning: PropTypes.bool
};

export default Spinner;