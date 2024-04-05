import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser, resetPass, sendEmailResetPass, validarToken } from "../api/requestApi";
import { onLogin, onLogout } from "../store/authSlice";
import Swal from "sweetalert2";
import { useCartStore } from "./useCartStore";
import { useTicketStore } from "./useTicketStore";


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

    const { startGetCartById } = useCartStore();
    const { startGetTickets } = useTicketStore();

    const startLogin = async (email, password) => {
        const resp = await loginUser(email, password);
        if (resp.ok) {
            const { _id, cart_id, lastName, name, rol } = resp;
            startGetCartById(cart_id);
            // startGetTickets();
            return dispatch(onLogin({ _id, cart_id, lastName, name, rol }));
        }

        return Swal.fire({
            title: 'Uhh ocurrio un error',
            html: resp.msg,
            icon: 'error',
        });
    }

    const startSendEmailResetPass = async (email) => {
        const resp = await sendEmailResetPass(email);
        if (resp.ok) {
            return Swal.fire({
                title: 'Email enviado',
                html: 'Se te envio un email a tu casilla de correo para continuar el reset de tu contraseña',
                icon: 'success',
            });
        }

        return Swal.fire({
            title: 'Uhh ocurrio un error',
            html: resp.msg,
            icon: 'error',
        });
    }

    const startResetPass = async (password, token) => {
        const resp = await resetPass(password, token);
        if (resp.ok) {
            Swal.fire({
                title: 'Contraseña reseteada',
                html: 'Tu contraseña fue cambiada correctamente',
                icon: 'success',
            });
            return true;
        }

        Swal.fire({
            title: 'Uhh ocurrio un error',
            html: resp.msg,
            icon: 'error',
        });

        return false;
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
        console.log('chequeando login');
        const resp = await validarToken();

        if (resp.ok) {
            const { _id, cart_id, lastName, name, rol } = resp;
            console.log({ _id, cart_id, lastName, name, rol });
            startGetCartById(cart_id);
            // startGetTickets();
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
        startSendEmailResetPass,
        startResetPass,
    };
}