import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios'

const HomeScreen = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    const fetchProducts=async()=>{
      const{data}=await axios.get(`${import.meta.env.VITE_SOME_KEY}/api/products/`);
      setProducts(data)
    };
    fetchProducts();
 
  },[])
  return (
    <>
      <h1 style={{color:'black',textAlign:'center'}}>New Arrival</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product prduct={product}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
