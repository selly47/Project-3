import React from "react";
import web from "../src/images/img3.jpeg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common 
              name="Life is short and the world is wide" 
              imgsrc={web} 
              visit="/service" 
              btname="Explore"
            />
        </>
    );
};

export default Home;