import ReactDOM from 'react-dom/client'
import Footer from './Layouts/Footer'
import Header from './Layouts/Header'
import Main from './Layouts/Main'
import './index.scss'

function Index() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

const domContainer = document.querySelector('#root') as Element
const root = ReactDOM.createRoot(domContainer)
root.render(<Index />)
