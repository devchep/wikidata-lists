import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '../../Assets/SearchIcon'
import styles from './search-input.scss'

export default function SearchInput() {
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState<boolean>(false)
    const [isFilled, setIsFilled] = useState<boolean>(false)
    const [userInput, setUserInput] = useState<string>('')

    const handleInputChange = (value: string) => {
        setUserInput(value)

        if (!value) {
            setIsFilled(false)
            return
        }
        setIsFilled(true)
    }

    const handleInputBlur = () => {
        if (isFilled) {
            return
        }
        setIsActive(false)
    }

    const handlePress = async () => {
        setIsActive(false)
        navigate(`/${userInput}`)
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
                onFocus={() => setIsActive(true)}
                onBlur={() => handleInputBlur()}
                value={userInput}
                onChange={(e) => handleInputChange(e.target.value)}
            />
            {isActive && (
                <button
                    className={`${styles['submit-button']} ${
                        isFilled && styles['submit-button--active']
                    }`}
                    type='button'
                    onClick={() => handlePress()}
                >
                    <span className={styles['submit-button__text']}>Go</span>
                </button>
            )}
        </form>
    )
}
