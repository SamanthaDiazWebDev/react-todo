import React from "react";
import PropTypes from  "prop-types";

const InputWithLabel = ({
    id,
    children,
    value,
    type = 'type',
    name = 'title',
    onInputChange,
}) => {
    const inputRef = React.useRef();

    React.useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <>
            <label htmlFor={id}>{children}</label>
            &nbsp;
            <input 
                id={id} 
                value={value} 
                onChange={onInputChange}
                type={type}
                ref={inputRef}
            />
        </>
    );
};

InputWithLabel.propTypes = {
    children: PropTypes.object,
    value: PropTypes.string,
    onInputChange: PropTypes.func,
    id: PropTypes.string,
    type: PropTypes.object,
}

export default InputWithLabel;