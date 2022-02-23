import React,{useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";
import products from "../products";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Row,Col } from "react-bootstrap";
import { listproducts } from "../actions/productActions";


const HomeScreen = () => {
const dispatch=useDispatch()

const productList=useSelector(state=>state.productList)
const { loading, error,products}=productList

useEffect(() => {
  dispatch(listproducts())
}, [dispatch])


  return (
      <>
      {loading?<Loader />:error?(<Message variant='danger'>{error}</Message>):<Row>
              {products.map((product)=>
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product}/>
                </Col>
              )}
          </Row>}
          
      </>
  )
}

export default HomeScreen