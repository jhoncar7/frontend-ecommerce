import comicsApi from "./config";

export const loginUser = async (email, password) => {
    try {
        const { data } = await comicsApi.post('/auth/login', { email, password });
        const { token, usuario } = data;
        const { _id, name, lastName, rol, cart_id, } = usuario;
        localStorage.setItem('token', token);
        return { ok: true, _id, name, lastName, rol, cart_id, }
    } catch (error) {
        console.log(error);
        return { ok: false, msg: error.response.data.msg };
    }
}

export const registerUser = async (email, password, name, lastName) => {
    try {
        const { data } = await comicsApi.post('/auth/register', { email, password, name, lastName });
        const { token, usuario } = data;
        const { _id, rol, cart_id, } = usuario;
        localStorage.setItem('token', token);
        return { ok: true, _id, name, lastName, rol, cart_id, }
    } catch (error) {
        console.log(error);
        return { ok: false, msg: error.response.data.errors[0].msg }
    }
}

export const validarToken = async () => {
    try {
        const { data } = await comicsApi.get('/auth/renew');
        const { token, usuario } = data;
        const { _id, name, lastName, rol, cart_id, } = usuario;
        localStorage.setItem('token', token);
        return { ok: true, _id, name, lastName, rol, cart_id, }
    } catch (error) {
        console.log(error);
        return { ok: false };
    }
}

export const getProducts = async (query) => {
    try {
        const { data } = await comicsApi.get('/products');

        const { result } = data;
        const { payload: produtcs, totalDocs, totalPages, limit, query, page, hasNextPage, hasPrevPage, prevPage, nextPage } = result;

        return { ok: true, produtcs, pagination: { totalDocs, totalPages, limit, query, page, hasNextPage, hasPrevPage, prevPage, nextPage } };
    } catch (error) {
        console.log(error);
        return { ok: false };
    }
}