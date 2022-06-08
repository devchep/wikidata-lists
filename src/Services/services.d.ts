export interface Card {
    name: string
    imageurl: string
    instance: string
}

export type FetchStatus =
    | null
    | 'pending-next'
    | 'done'
    | 'empty'
    | 'finish'
    | 'error'
