import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { InicioPage } from '../pages/InicioPage';
import { useAuthStore } from '../hooks/useAuthStore';
import { useEffect } from 'react';
import { LoadingComponent } from '../components/LoadingComponent';
import { MyCartPage } from '../pages/MyCartPage';
import { MyCompras } from '../pages/MyCompras';


export const AppRouter = () => {

    const { status, startChekingLogin } = useAuthStore();

    useEffect(() => {
        startChekingLogin();
    }, []);


    if (status === 'checking') return <LoadingComponent />


    return (
        <Routes>
            {
                status === 'not-authenticated'
                    ?
                    (
                        <>
                            <Route path='/auth/login' element={<LoginPage />} />
                            <Route path='/auth/register' element={<RegisterPage />} />
                        </>
                    )
                    :
                    (
                        <>
                            <Route path='/mis-compras' element={<MyCompras />} />
                            <Route path='/mi-carrito' element={<MyCartPage />} />
                        </>
                    )
            }

            <Route path='/' element={<InicioPage />} />
            <Route path='/*' element={<Navigate to='/' />} />

        </Routes>
    )
}
