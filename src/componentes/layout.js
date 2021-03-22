import React from "react";
import Minibaner from './minibaner';
import Banner from './banner';
import Navbar from './navbar';
import Footer from './footer';

function Layout(props){
    return (
        <>
            <Minibaner />
            <div className="container">    
                <Banner />
                <Navbar />
                {props.children}
            </div>
            <Footer /> 
        </>
    );
}

export default Layout;