import React from 'react'
import products from '../../public/products'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'



const ProductScreen = () => {
  const{id:productId}=useParams()
  const product=products.find((proID)=>proID._id===productId)
  console.log(product)
  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back</Link>
        <Row>
          <Col md={5}>
          <Image src={product.image} alt={product.image} fluid/>
          </Col>
          <Col md={4}>
          <Card.Title as="div" className='product-title'>
              <strong>{product.name}</strong>
            </Card.Title>
            </Col>
            <Col md={9}>
            <Card.Text as="div">
                <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
            </Card.Text>
            </Col>
            <Col md={9}>
            <Card.Text as="h5">
                ${product.price}
            </Card.Text>
              </Col>
         
        </Row>
    </>
  )
}

export default ProductScreen