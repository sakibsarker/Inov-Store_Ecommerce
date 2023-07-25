import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Link,useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button,Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import {useGetProductDetailsQuery} from '../slices/productsApiSlice'
import {addToCart} from '../slices/cartSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useDispatch } from 'react-redux'



const ProductScreen = () => {
  const{id:productId}=useParams()

  const dispatch=useDispatch();
  const nagivate=useNavigate();

  const [qty,setQty]=useState(1);

  const{data:products,isLoading,error}=useGetProductDetailsQuery(productId)

  const addToCartHandler=()=>{
    dispatch(addToCart({...products,qty}))
    nagivate('/cart')
  }

  return (
    <>
     <Link className='btn btn-white my-2' to='/'>
        Go Back</Link>
    {isLoading?(<Loader/>):error?(<Message variant='danger'>{error?.data?.message||error.error}</Message>):(
    <>
    
        <Row>
          <Col md={5}>
          {/* <Image src={`http://localhost:5000${products.image}`} alt={products.name} fluid/> */}
          <Image src={products.image} alt={products.image} fluid/>
          </Col>
          <Col md={4}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{products.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={products.rating} text={`${products.numReviews} reviews`}/>
              </ListGroup.Item>
              <ListGroup.Item>
              <strong>${products.price}</strong>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>Description: {products.description}</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col><strong>${products.price}</strong></Col>
                    </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                      <Col>Status:</Col>
                      <Col>
                      <strong>${products.countInStock>0?'In Stock':'Out Of Stock'}</strong></Col>
                      </Row>
                      </ListGroup.Item>

                      {products.countInStock>0&&(
                        <ListGroup.Item>
                          <Row>
                            <Col>Qty:</Col>
                            <Col>
                            <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e)=>setQty(Number(e.target.value))}>

                              { [...Array(products.countInStock).keys()].map((x)=>(
                              <option key={x+1} value={x+1}>
                                {x+1}
                              </option>
                              ))}

                            </Form.Control>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      )}


                      <ListGroup.Item>
                        <Button className='btn-block' type='button' disabled={products.countInStock===0}
                        onClick={addToCartHandler}>
                          Add To Cart
                        </Button>
                      </ListGroup.Item>
                  
                </ListGroup>
              </Card>
            </Col>
         
        </Row>
    </>)}
     
    </>
  )
}

export default ProductScreen