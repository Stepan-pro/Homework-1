import React from 'react';
import {Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./component/Loyaut/Layout";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import Login from "./pages/LoginPage/LoginPage";
import RequireAuth from "./hoc/RequireAuth";
import AuthProvide from "./hoc/AuthProvide";

const App = () => {
    return (
        <AuthProvide>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'users'} element={
                        <RequireAuth>
                            <UsersPage/>
                        </RequireAuth>
                    }/>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}/>
                    </Route>
                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'login'} element={<Login/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
                }
            </Routes>
        </AuthProvide>
    );
};

export default App;