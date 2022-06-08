import { makeAutoObservable } from 'mobx'
import { IBindings } from 'sparqljson-parse'
import executeItemsByNameQuery from '../queryhelpers'
import { Card, FetchStatus } from '../services'

export default class GalleryStore {
    instance: string = ''

    cards: Card[] = []

    fetchStatus: FetchStatus = null

    page = 1

    limit = 12

    offset = 0

    constructor() {
        makeAutoObservable(this)
    }

    setStatus = (status: FetchStatus) => {
        this.fetchStatus = status
    }

    setNew = (instance: string) => {
        this.offset = 0
        this.page = 1
        this.instance = instance
        this.cards = []
        this.setStatus(null)
    }

    fetchNext = () => {
        this.setStatus('pending-next')
        this.fetch()
        this.offset += this.limit
        this.page += 1
    }

    fetch = async () => {
        try {
            const fetchedCards: Card[] = []
            const bindingsStream = await executeItemsByNameQuery(
                this.instance,
                this.limit,
                this.offset
            )

            bindingsStream.on('data', (data: IBindings) => {
                const card: Card = {
                    name: data.name.value,
                    imageurl: data.image.value,
                    instance: data.instance.value,
                }
                fetchedCards.push(card)
            })

            bindingsStream.on('end', () => {
                this.cards.push(...fetchedCards)

                if (this.cards.length === 0) {
                    this.setStatus('empty')
                    return
                }

                if (fetchedCards.length === 0) {
                    this.setStatus('finish')
                    return
                }

                this.setStatus('done')
            })
        } catch (e) {
            this.setStatus('error')
        }
    }
}
