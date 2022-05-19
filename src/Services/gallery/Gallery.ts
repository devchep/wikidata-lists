import { makeAutoObservable, runInAction } from 'mobx'
import { IBindings } from 'sparqljson-parse'
import executeItemsByNameQuery from '../queryhelper'
import { Card, FetchStatus } from '../services'

export default class Gallery {
    cards: Card[] = []

    fetchStatus: FetchStatus = undefined

    limit = 10

    offset = 0

    constructor() {
        makeAutoObservable(this)
    }

    setStatus = (status: FetchStatus) => {
        this.fetchStatus = status
    }

    fetch = async (item: string) => {
        this.setStatus('pending')

        try {
            const bindingsStream = await executeItemsByNameQuery(
                item,
                this.limit,
                this.offset
            )

            bindingsStream.on('data', (data: IBindings) => {
                const card: Card = {
                    name: data.instanceLabel.value,
                    imageurl: data.imgsourceLabel.value,
                    instance: data.instance.value,
                }
                runInAction(() => {
                    this.cards.push(card)
                })
            })

            bindingsStream.on('end', () => {
                if (this.cards.length === 0) {
                    this.setStatus('empty')
                    return
                }

                this.setStatus('done')
            })
        } catch (e) {
            runInAction(() => {
                this.setStatus('error')
            })
        }
    }
}
