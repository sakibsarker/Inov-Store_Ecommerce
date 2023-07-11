import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'

const ProductScreen = () => {
  const [products,setProducts]=useState({})
  const{id:productId}=useParams()
  useEffect(()=>{
    const fetchProducts=async()=>{
      const{data}=await axios.get(`${import.meta.env.VITE_API_URL}/api/products/${productId}`);
      setProducts(data)
    };
    fetchProducts();
 
  },[productId])


  console.log(products)
  return (
    <>
      <Link className='btn btn-white my-2' to='/'>
        Go Back</Link>
        <Row>
          <Col md={5}>
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
                      <ListGroup.Item>
                        <Button className='btn-block' type='button' disabled={products.countInStock===0}>
                          Add To Cart
                        </Button>
                      </ListGroup.Item>
                    </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
         
        </Row>
    </>
  )
}

export default ProductScreen