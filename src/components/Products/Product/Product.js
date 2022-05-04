import React from 'react'
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actionTypes from '../../../redux/actions'
// import {
//   loadCurrentItem,
//   addToCart,
// } from "../../../redux/Shopping/shopping-actions";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Product.css'
const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      maxHeight:700,
      marginBottom:'5%'
    },
    media: {
      height: '40vh',
    },
    cardstyle:{
      height:'50vh'
    }
  });

function Product2({ product, addToCart, loadCurrentItem }) {
  const history = useHistory();
    const classes = useStyles();
    const handleOnClick = ()=>{
      loadCurrentItem(product);
      history.push(`/product/${product.id}`)
      // history.push({
      //   pathname:`/product/${product.id}`,
      //   state: product
      // })
      
    }
    return (
        <Card className={classes.root}>
          <CardActionArea onClick={handleOnClick}>
      
          <CardMedia
            className={classes.media}
            image={product.image}
            title={product.title}
            
          />
          <CardContent className={classes.cardstyle}>
            <Typography gutterBottom variant="h5" component="h2" style={{height:'5vh',overflow:'hidden'}}>
              {product.title}
            </Typography>
            <div style={{height:'40vh'}}>
            <Typography variant="body2" color="textSecondary" component="p" style={{height: '30vh',overflow:'hidden'}}>
              {product.description}
            </Typography>
            <br/>
            <Typography variant="h5" align='center' color="textPrimary" >
             $ &nbsp;{product.price}
            </Typography>
            </div>
          </CardContent>
          </CardActionArea>
        <CardActions sx={{height:'8vh'}}>
      
          <Button  size="small" color="primary" onClick={handleOnClick}>
            View Item
          </Button>
          
          <Button size="small" color="primary" onClick={() => addToCart(product.id)}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    )
}

const mapDispatchtoProps = (dispatch)=>{
  return{
    loadCurrentItem:(item)=> dispatch({type:actionTypes.LOAD_CURRENT_ITEM,payload:{item:item}}),
    addToCart :(id)=>dispatch({type:actionTypes.ADD_TO_CART,payload:{id:id}})
  }
}

export default connect(null,mapDispatchtoProps)(Product2)