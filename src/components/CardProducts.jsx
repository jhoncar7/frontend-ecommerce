import { Grid } from '@mui/material';
import { useProductStore } from '../hooks/useProductStore';
import { CardItem } from './CardItem';


export const CardProducts = () => {

    const { products } = useProductStore();

    return (
        <Grid container spacing={0} alignItems='center' justifyContent='center'>
            {
                products?.map(producto => (
                    <Grid key={producto._id} item xs={4} sx={{margin:2, padding:2}}>
                        <CardItem  {...producto} />
                    </Grid>
                ))
            }
        </Grid>
    );
}