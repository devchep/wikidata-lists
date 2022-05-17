import React, { useState } from 'react'
import SearchIcon from '../../Assets/SearchIcon'
import styles from './search-input.scss'

export default function SearchInput() {
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [isFilled, setIsFilled] = useState<boolean>(false)
    const [userInput, setUserInput] = useState<string>()

    const handleInputChange = (value: string) => {
        setUserInput(value)

        if (!value) {
            setIsFilled(false)
            return
        }
        setIsFilled(true)
    }

    return (
        <form className={styles['search-form']}>
            <label htmlFor='search-input'>
                <SearchIcon />
                <p>Start exploring</p>
            </label>
            <input
                className={styles['search-form__input']}
                type='text'
                id='search-input'
                placeholder='Try to type something... e.g. Airport'
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={userInput}
                onChange={(e) => handleInputChange(e.target.value)}
            />
            {isFocused && (
                <button
                    className={`${styles['submit-button']} ${
                        isFilled && styles['submit-button--active']
                    }`}
                    type='submit'
                >
                    <span className={styles['submit-button__text']}>Go</span>
                </button>
            )}
        </form>
    )
}
