import React,{useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
const ProductScreen = ({match}) => {

  const dispatch=useDispatch()

  const productDetails=useSelector(state => state.productDetails)
  const {loading,error,product}=productDetails
  useEffect(()=>{
    dispatch(listProductDetails(match.params.id))
  },[dispatch,match])


  return (

    <div>ProductScreen</div>
  )
}

export default ProductScreen