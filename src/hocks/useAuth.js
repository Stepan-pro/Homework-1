import {useContext} from "react";
import {AuthContext} from "../hoc/AuthProvide";

export const useAuth = () => useContext(AuthContext)
