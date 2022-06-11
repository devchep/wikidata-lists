export interface BackgroundCanvasArgs {
    canvasElement: HTMLCanvasElement
}
export type Link = {
    title: string
    href: string
    strokeStyle: string
}

export const PIXEL_RATIO = window.devicePixelRatio || 1
export const BACKGROUND_LINKS: Link[] = [
    { title: 'Dog Breeds', href: '/dog breed', strokeStyle: '#A77214' },
    { title: 'Airplanes', href: '/airplane', strokeStyle: '#73B4D5' },
    { title: 'Boats', href: '/boat', strokeStyle: '#21E5D6' },
    { title: 'Mansions', href: '/mansion', strokeStyle: '#F44C28' },
    { title: 'Fruits', href: '/fruit', strokeStyle: '#A1DF5B' },
    { title: 'Computers', href: '/computer', strokeStyle: '#000000' },
    { title: 'Manuscripts', href: '/manuscript', strokeStyle: '#DAD400' },
    { title: 'Forests', href: '/forest', strokeStyle: '#0DD425' },
    { title: 'Trains', href: '/train', strokeStyle: '#991636' },
    {
        title: 'Prog languages',
        href: '/programming language',
        strokeStyle: '#1C62F0',
    },
    { title: 'Restaurants', href: '/restaurant', strokeStyle: '#D3006D' },
    { title: 'Music genres', href: '/music genre', strokeStyle: '#D000D3' },
    { title: 'Cars', href: '/car', strokeStyle: '#700CA5' },
    { title: 'Boardgames', href: '/board game', strokeStyle: '#E78F69' },
    { title: 'Statue', href: '/statue', strokeStyle: '#05A8C5 ' },
]

export const randomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min

export const randomDec = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) * 100) / 100 + min
