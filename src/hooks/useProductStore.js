import { useDispatch, useSelector } from "react-redux";
import { createProduct, getProducts } from "../api/requestApi";
import { onPagination, onProduct, onProducts } from "../store/productSlice";
import Swal from "sweetalert2";


export const useProductStore = () => {

    const dispatch = useDispatch();
    const { product, products, pagination, } = useSelector(state => state.product);


    const startGetProducts = async () => {
        const resp = await getProducts();
        if (resp.ok) {
            const { pagination, produtcs } = resp;
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

    const startProductActivo = (producto) => {
        dispatch(onProduct(producto));
        return true;
    }

    const startCreateProduct = async (producto) => {
        const resp = await createProduct(producto);

        console.log({ resp });

        if (resp.ok) return startProductActivo(resp.producto);

        return Swal.fire({
            title: 'Uhh ocurrio un error al crear el producto',
            html: resp.msg,
            icon: 'error',
        });
    }

    return {
        product,
        products,
        pagination,

        startGetProducts,
        startProductActivo,
        startCreateProduct,
    };
}
