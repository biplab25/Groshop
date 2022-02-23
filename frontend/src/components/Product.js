//Import Section
import React from 'react'
import { Card } from "react-bootstrap";
import Rating from './Rating';
import { Link } from "react-router-dom";

//Product Component
const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
         <Link to={`/product/${product._id}`}>
            <Card.Img variant="top" src={product.image} />
        </Link>
        <Card.Body>
                <Card.Title >{product.name}</Card.Title>
               
                <Card.Text > ${product.price}</Card.Text>
            
            <Card.Text>
                <Rating value={product.rating} text={`${product.numReviews} reviews`}  /> 
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product