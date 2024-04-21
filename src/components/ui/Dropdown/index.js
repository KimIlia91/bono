'use client'

import { useState } from 'react'
import Image from 'next/image'
import classes from './index.module.scss'

const Dropdown = ({
    onChange,
    value,
    name,
    type,
    placeholder,
    label,
    required,
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const options = ['1 час', '2 часа', '3 часа']

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionSelect = (value) => {
        onChange({value, name})
        setIsOpen(false)
    }

    return (
        <div className={classes.dropdown}>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onClick={toggleDropdown}
                className={classes.input}
                required={required}
                readOnly
            />
            <Image src='/assets/row-down.svg' alt='row-down' width={15} height={16} className={isOpen ? `${classes.rotate}` : ''} /> 
            {isOpen && (
                <div className={classes.options}>
                    {options.map((option, index) => (
                        <div
                            key={`selector-${index}`}
                            className={classes.option}
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown