import ReactDOM from 'react-dom/client'
import Footer from './Layouts/Footer'
import Header from './Layouts/Header'
import Main from './Layouts/Main'
import './index.scss'
import { GalleryProvider } from './Services/gallery/GalleryContext'
import Gallery from './Services/gallery/Gallery'

function Index() {
    return (
        <>
            <Header />
            <GalleryProvider value={{ gallery: new Gallery() }}>
                <Main />
            </GalleryProvider>
            <Footer />
        </>
    )
}

const domContainer = document.querySelector('#root') as Element
const root = ReactDOM.createRoot(domContainer)
root.render(<Index />)
