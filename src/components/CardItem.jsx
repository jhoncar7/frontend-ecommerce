import {
    Box, Card, CardActions, CardContent, CardHeader,
    CardMedia, IconButton, Typography,
} from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const CardItem = ({ _id, title, description, code, price, stock, category, thumbnail }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title={title}
                subheader={`Precio: ${price}`}
            />
            <CardMedia
                component="img"
                height="194"
                image={thumbnail}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <Typography ml={2}>Stock: {stock}</Typography>
            <Box display='flex' alignItems='center'>
                <Typography ml={2}>agregar al carrito</Typography>
                <CardActions disableSpacing>
                    <IconButton aria-label="share">
                        <ShoppingCartOutlinedIcon />
                    </IconButton>
                </CardActions>
            </Box>
        </Card>
    )
}
