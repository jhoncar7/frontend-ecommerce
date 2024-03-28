import { Button, Container, Grid, Typography } from '@mui/material';
import { NavBar } from '../components/NavBar';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { useProductStore } from '../hooks/useProductStore';
import { useState } from 'react';


export const ProductPage = () => {

    const { product } = useProductStore();
    const [quantity, setQuantity] = useState(0);

    const handleIncreaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <>
            <NavBar />
            <Container maxWidth='sm'>
                <Grid container spacing={2} direction='column'>
                    <Grid item mt={1}>
                        <Typography>Titulo: {product?.title}</Typography>
                        <Typography>Descripcion: {product?.description}</Typography>
                        <Typography>Precio: {product?.price}</Typography>
                        <Typography>Stock: {product?.stock}</Typography>
                        <Typography>Agregar al carrito</Typography>
                        <Grid container alignItems="center">
                            <Button onClick={handleDecreaseQuantity}>
                                <RemoveCircleOutline />
                            </Button>
                            <Typography variant="h6">{quantity}</Typography>
                            <Button onClick={handleIncreaseQuantity}>
                                <AddCircleOutline />
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <img src={product?.thumbnail} alt={product?.title} width='100%' />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
