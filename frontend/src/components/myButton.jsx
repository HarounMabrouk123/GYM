import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type = 'button', backgroundColor = 'bg-[#FDDB07] text-white  rounded-full', children }) => {
    return (
        <button
            type={type}
            className={`${backgroundColor} flex justify-center items-center gap-2 px-7 py-4 border-[#FDDB07] font-montserrat text-lg leading-none`}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
};

export default Button;
