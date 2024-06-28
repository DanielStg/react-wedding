import React from 'react'


interface Props{
    children: string;
    colour?: string;
    onClick: () => void;
}
const Button = ({children, onClick, colour = 'primary'}: Props) => {
    return (
        <button className={'btn btn-'+ colour } onClick={onClick}>{children}</button>
    )
}

export default Button