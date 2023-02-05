// src/main/frontend/src/App.js

import React, {useEffect, useState, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import MyNav from "./components/MyNav";
import Main from "./components/Main";
import Post from "./components/Post";
import Chat from "./components/Chat";
import ViewMessage from "./components/ViewMessage";
import Login from "./components/Login";
import NewPost from "./components/NewPost"

const App = () => {

    return (
        <div style={{
            backgroundImage: `url("/background.jpeg")`,
            backgroundSize: "1500px",
            backgroundRepeat: "no-repeat",
            fontFamily: `serif`,

        }}>
            <BrowserRouter>
                <MyNav />
                <Routes>
                    <Route path={"/Main"} element={<Main />} />
                    <Route path={"/"} element={<Main />} />
                    <Route path={"/Chat"} element={<Chat />} />
                    <Route path={"/Post"} element={<Post />} />
                    <Route path={"/NewPost"} element={<NewPost />} />
                    <Route path={"/ViewMessage"} element={<ViewMessage />} />
                    <Route path={"/Login"} element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;