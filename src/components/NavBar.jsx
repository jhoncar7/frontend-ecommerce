import { Avatar, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { useAuthStore } from '../hooks/useAuthStore';

export const NavBar = () => {

    const { name, status, isAdmin, startLogout } = useAuthStore();

    const onLogout = () => startLogout();

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#FFE600'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', margin: '5px', padding: '5px', marginLeft: '20px' }}>
                <NavLink to='/'>
                    <img src={'/logo.jfif'} alt='Logo de la aplicación' className='rounded-icon' />
                </NavLink>
                <div>
                    {
                        isAdmin &&
                        <NavLink
                            to='/admin-product'
                            className='navbar-brand'
                            style={{ marginLeft: '15px' }}>Configurar Productos</NavLink>
                    }

                </div>
            </div>

            <div style={{ marginRight: '50px' }}>

                <NavLink
                    to={`${status === 'not-authenticated' ? '/auth/login' : '/mi-carrito'}`}
                    className='navbar-brand'
                    style={{ marginRight: '15px' }}>
                    <LocalGroceryStoreOutlinedIcon />
                </NavLink>

                <NavLink
                    to={`${status === 'not-authenticated' ? '/auth/login' : '/mis-compras'}`}
                    className='navbar-brand'
                    style={{ marginRight: '15px' }}>Mis compras</NavLink>

                {
                    status === 'authenticated'
                        ?
                        <>
                            <NavLink
                                className='navbar-brand'
                                style={{ marginRight: '15px' }}>{name.toUpperCase()}</NavLink>

                            <Button onClick={onLogout}>Cerrar sesión</Button>
                        </>
                        :
                        <>
                            <NavLink
                                to='/auth/register'
                                className='navbar-brand'
                                style={{ marginRight: '15px' }}>Crear cuenta</NavLink>

                            <NavLink
                                to='/auth/login'
                                className='navbar-brand'
                                style={{ marginRight: '15px' }}>Ingresar</NavLink>
                        </>
                }

            </div>
        </div >
    )
}
