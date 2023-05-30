import React from "react";

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

export default InputWithLabel;