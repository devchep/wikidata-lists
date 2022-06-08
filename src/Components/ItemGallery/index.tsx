import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { reaction } from 'mobx'
import Empty from '../Empty'
import Loader from '../Loader'
import Error from '../Error'
import CardsRenderer from '../CardsRenderer'
import { Card } from '../../Services/services'
import useIntersectionObserver from '../helpers'
import GalleryStore from '../../Services/gallery/GalleryStore'

type ItemGalleryParams = {
    instance: string
}

function ItemGallery() {
    const { instance } = useParams<ItemGalleryParams>() as ItemGalleryParams
    const [contentFiller, setContentFiller] = useState<JSX.Element | null>(null)
    const [cards, setCards] = useState<Card[]>([])
    const gallery = useRef(new GalleryStore())

    const [intersectionElement, setIsObserved] = useIntersectionObserver(
        {
            rootMargin: '-50px',
            threshold: 0.5,
        },
        gallery.current.fetchNext
    )

    useEffect(() => {
        gallery.current.setNew(instance)
        setCards([])
    }, [instance])

    useEffect(() => {
        const disposer = reaction(
            () => gallery.current.fetchStatus,
            () => {
                switch (gallery.current.fetchStatus) {
                    case 'pending-next': // Fetching next cards
                        setContentFiller(<Loader />)
                        setIsObserved(false)
                        break
                    case 'done': // Cards were fetched successfully
                        setCards(gallery.current.cards)
                        setContentFiller(null)
                        setIsObserved(true)
                        break
                    case 'empty': // Empty query result
                        setContentFiller(<Empty />)
                        setIsObserved(false)
                        break
                    case 'finish': // Last cards were fetched
                        setContentFiller(null)
                        setIsObserved(false)
                        break
                    case 'error': // Something went wrong during the query execution
                        setContentFiller(<Error />)
                        setIsObserved(false)
                        break
                    default: // Query instance has changed
                        setIsObserved(true)
                }
            }
        )

        setIsObserved(true)

        return disposer
    }, [])

    return (
        <>
            <CardsRenderer cards={cards} />
            {contentFiller}
            <div ref={intersectionElement} />
        </>
    )
}

export default observer(ItemGallery)
