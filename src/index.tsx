import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Layouts/Footer'
import Header from './Layouts/Header'
import Main from './Layouts/Main'
import './index.scss'

function Index() {
    return (
        <BrowserRouter>
            <Header />
            <Main />
            <Footer />
        </BrowserRouter>
    )
}

const domContainer = document.querySelector('#root') as Element
const root = ReactDOM.createRoot(domContainer)
root.render(<Index />)
