import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser, validarToken } from "../api/requestApi";
import { onLogin, onLogout } from "../store/authSlice";
import Swal from "sweetalert2";


export const useAuthStore = () => {

    const dispatch = useDispatch();
    const {
        _id,
        name,
        lastName,
        email,
        rol,
        cart_id,
        status,
        isAdmin,
    } = useSelector(state => state.auth);

    const startLogin = async (email, password) => {
        const resp = await loginUser(email, password);
        if (resp.ok) {
            const { _id, cart_id, lastName, name, rol } = resp;
            return dispatch(onLogin({ _id, cart_id, lastName, name, rol }));
        }

        return Swal.fire({
            title: 'Uhh ocurrio un error',
            html: resp.msg,
            icon: 'error',
        });
    }

    const startRegister = async (email, password, name, lastName) => {
        const resp = await registerUser(email, password, name, lastName);

        if (resp.ok) {
            const { _id, cart_id, lastName, name, rol } = resp;
            return dispatch(onLogin({ _id, cart_id, lastName, name, rol }));
        }

        return Swal.fire({
            title: 'Uhh ocurrio un error',
            html: resp.msg,
            icon: 'error',
        });
    }

    const startLogout = () => {
        dispatch(onLogout());
        localStorage.clear();
    }

    const startChekingLogin = async () => {
        const resp = await validarToken();

        if (resp.ok) {
            const { _id, cart_id, lastName, name, rol } = resp;
            return dispatch(onLogin({ _id, cart_id, lastName, name, rol }));
        };

        startLogout();
    }


    return {
        _id,
        name,
        lastName,
        email,
        rol,
        cart_id,
        status,
        isAdmin,

        startLogin,
        startRegister,
        startChekingLogin,
        startLogout,
    };
}