import React from 'react'
import Gallery from './Gallery'

interface GalleryContextProps {
    gallery: Gallery
}
export const GalleryContext = React.createContext({} as GalleryContextProps)
export const GalleryProvider = GalleryContext.Provider
