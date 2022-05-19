export interface Card {
    name: string
    imageurl: string
    instance: string
}

export type FetchStatus = 'pending' | 'empty' | 'done' | 'error' | undefined
