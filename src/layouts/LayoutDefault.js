import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import ForYourPleasure from "../pages/for-your-pleasure"
import Home from "../pages/home"
import OurCoffee from "../pages/our-coffee"
import Page404 from "../pages/page-404"
import Single from "../pages/single"

const LayoutDefault = () => {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/our-coffee' element={<OurCoffee />} />
                    <Route path='/for-your-pleasure' element={<ForYourPleasure />} />
                    <Route path='/single/:id' element={<Single />} />
                    <Route path='*' element={<Page404 />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default LayoutDefault