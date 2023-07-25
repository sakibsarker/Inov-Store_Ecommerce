import React,{useEffect,useState} from 'react';
import {LinkContainer} from 'react-router-bootstrap'
import {Button,Row,Col,Table} from 'react-bootstrap';
import {FaTimes,FaEdit,FaTrash} from 'react-icons/fa'
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import {useGetProductsQuery,useCreateProductMutation} from '../../slices/productsApiSlice';
import { useSelector,useDispatch } from 'react-redux/';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ProductListScreen = () => {

  const {data:products,isLoading,error,refetch} =useGetProductsQuery();
  const [createProduct,{isLoading:loadingCreate}] =useCreateProductMutation();

  const createProductHandler=async()=>{
    if(window.confirm('Are you sure you want to create new product?'))
    {
      try{
        await createProduct();
        refetch();

      }catch(error){
        toast.error(error?.data?.message||error.error);

      }
    }
  }

  const deleteHandler=(id)=>{
    console.log('delete',id)

  }


  return (
    <>
    <Row className="align-items-center">
      <Col>
        <h1>Products</h1>
      </Col>
      <Col className="text-end">
        <Button onClick={createProductHandler} className="btn-sm m-3">
        <FaEdit/> Create Products
        </Button>
      </Col>
    </Row>
    {loadingCreate && <Loader/>}
    {isLoading?(<Loader/>):error?(<Message variant='danger'>{error}</Message>)
    :(
      <>
      <Table striped hover responsive className='table-sm'>
        <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>PRICE</th>
          <th>CATEGORY</th>
          <th>BRAND</th>
          <th>STOCK</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
          {products.map((product)=>(
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.brand}</td>
              <td>{product.countInStock}</td>
              <td>
                <LinkContainer to={`/admin/product/${product._id}/edit`}>
               <Button variant='light' className='btn-sm mx-2'><FaEdit color='green'/> Edit</Button>
                </LinkContainer>
                <Button variant='light' className='btn-sm mx-2' onClick={()=>deleteHandler(product._id)}><FaTrash color='red'/></Button>
              </td>

            </tr>
          ))
             
          }
        </tbody>
      </Table>
      </>
    )}
    </>
  )
}

export default ProductListScreen