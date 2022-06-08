export interface Card {
    name: string
    imageurl: string
    article: string
}

export type FetchStatus =
    | null
    | 'pending-next'
    | 'done'
    | 'empty'
    | 'finish'
    | 'error'
