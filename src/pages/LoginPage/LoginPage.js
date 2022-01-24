import React from 'react';
import {useAuth} from "../../hocks/useAuth";
import {useLocation, useNavigate} from "react-router-dom";

const Login = () => {
    const {login} = useAuth();
    const navigate = useNavigate();
    const {state: {pathname}} = useLocation()

    const submit = (e) => {
        e.preventDefault()
        const user = e.target.username.value;
        login(user, () => navigate(pathname, {replace: true}))
    }

    return (
        <div>
            <form onSubmit={submit}>
                <label>
                    <input type="text" name={'username'}/>
                    <button>Login</button>
                </label>
            </form>
        </div>
    );
};

export default Login;