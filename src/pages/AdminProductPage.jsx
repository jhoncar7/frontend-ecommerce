import { NavBar } from '../components/NavBar'
import { Box, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';


export const AdminProductPage = () => {

    const navigate = useNavigate();

    const addProduct = ()=> navigate('/admin-product/add')

    return (
        <>
            <NavBar />


            {/*Button Agregar un nuevo producto */}
            <Box onClick={addProduct}>
                <Box sx={{ '& > :not(style)': { m: 1 }, position: 'fixed', bottom: 50, right: 50 }}>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Box>
            </Box>
        </>
    )
}
