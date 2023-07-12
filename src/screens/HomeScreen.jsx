import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productsApiSlice';
const HomeScreen = () => {
 const {data:products,isLoading,error}=useGetProductsQuery()
  return (
    <>
    {isLoading?(<h1>Loading...</h1>):error?(<div>{error?.data?.message||error.error}</div>):(
    <>
    
    <h1 style={{color:'black',textAlign:'center'}}>New Arrival</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product prduct={product}/>
          </Col>
        ))}
      </Row>
    </>)}
    </>
  );
};

export default HomeScreen;
