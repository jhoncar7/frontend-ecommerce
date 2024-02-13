import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../api/requestApi";
import { onPagination, onProducts } from "../store/productSlice";


export const useProductStore = () => {

    const dispatch = useDispatch();
    const { product, products, pagination, } = useSelector(state => state.product);


    const startGetProducts = async () => {
        const resp = await getProducts();
        if (resp.ok) {
            const {pagination,produtcs} = resp;
            dispatch(onProducts(produtcs));
            dispatch(onPagination(pagination));
            return;
        };

        return Swal.fire({
            title: 'Uhh ocurrio un error al obtener los productos',
            html: 'Por favor intenta mas tarte',
            icon: 'error',
        });
    }

    return {
        product,
        products,
        pagination,

        startGetProducts,
    };
}
