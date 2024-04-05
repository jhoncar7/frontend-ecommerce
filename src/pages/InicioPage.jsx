import { useEffect } from 'react';
import { CardProducts } from '../components/CardProducts';
import { NavBar } from '../components/NavBar';
import { useProductStore } from '../hooks/useProductStore';

export const InicioPage = () => {

    const { startGetProducts } = useProductStore();

    useEffect(() => {
        startGetProducts();
    }, []);

    return (
        <div>
            <NavBar />
            <CardProducts />
        </div>
    )
}
