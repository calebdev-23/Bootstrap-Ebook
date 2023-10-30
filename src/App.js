import React, {useEffect} from 'react';
import Navbar from "./components/Ebook/Navbar/Navbar";
import Footer from "./components/Ebook/Footer/Footer";
import Social from "./components/Ebook/Footer/Social";
import {Route, Routes} from "react-router-dom";
import Contact from "./components/Ebook/Contact/Contact";
import Home from "./components/Ebook/Home/Home";
function App() {
    function userScroll(){
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 50){
                navbar.classList.add("bg-dark")
                navbar.classList.add("navbar-sticky")
            }else{
                navbar.classList.remove("bg-dark")
                navbar.classList.remove("navbar-sticky")
            }
        })
    }
    useEffect(()=>{
        userScroll()
    })
    return(<>
            <Navbar/>
                <div className="main">
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/contact"} element={<Contact/>}/>
                    </Routes>
                </div>
                <Social/>
            <Footer/>
    </>
    )
}
export default App;