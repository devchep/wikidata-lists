import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SearchIcon from '../../Assets/SearchIcon'
import styles from './search-input.scss'

type SearchInputParams = {
    instance: string
}

export default function SearchInput() {
    const { instance } = useParams<SearchInputParams>() as SearchInputParams
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

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setIsActive(false)
        setIsFilled(false)
        navigate(`/${userInput.toLowerCase()}`)
    }

    return (
        <form
            className={styles['search-form']}
            onSubmit={(e) => handleSubmit(e)}
        >
            <label htmlFor='search-input'>
                <SearchIcon />
                <p>Start exploring</p>
            </label>
            <input
                className={styles['search-form__input']}
                type='text'
                id='search-input'
                placeholder='Try to type something... e.g. Ship'
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
                    type='submit'
                >
                    <span className={styles['submit-button__text']}>Go</span>
                </button>
            )}
        </form>
    )
}
