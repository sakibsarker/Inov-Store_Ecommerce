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
      <Link className='btn btn-white my-2' to='/'>
        Go Back</Link>
        <Row>
          <Col md={5}>
          <Image src={product.image} alt={product.image} fluid/>
          </Col>
          <Col md={4}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
              </ListGroup.Item>
              <ListGroup.Item>
              <strong>${product.price}</strong>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>Description: {product.description}</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col><strong>${product.price}</strong></Col>
                    </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                      <Col>Status:</Col>
                      <Col>
                      <strong>${product.countInStock>0?'In Stock':'Out Of Stock'}</strong></Col>
                      </Row>
                      <ListGroup.Item>
                        <Button className='btn-block' type='button' disabled={product.countInStock===0}>
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