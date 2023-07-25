import React,{useEffect,useState} from 'react';
import {Link,useNavigate,useParams} from 'react-router-dom'
import {Button,Row,Col,Table,Form} from 'react-bootstrap';
import {FaTimes,FaEdit,FaTrash} from 'react-icons/fa'
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer'
import {useUpdateProductMutation,useGetProductDetailsQuery} from '../../slices/productsApiSlice';
import { useSelector,useDispatch } from 'react-redux/';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ProductEditScreen = () => {
    const {id:productId}=useParams();


    const [name,setName]=useState('');
    const [price,setPrice]=useState(0);
    const [image,setImage]=useState('');
    const [brand,setBrand]=useState('');
    const [category,setCategory]=useState('');
    const [countInStock,setCountInStock]=useState(0);
    const [description,setDescription]=useState('');

    const {data:product,isLoading,refetch,error} =useGetProductDetailsQuery(productId);

    const [updateProduct,{isLoading:loadingUpdating}] =useUpdateProductMutation();

    const navigate=useNavigate();

    useEffect(()=>{
        if(product){
           setName(product.name);
           setPrice(product.price);
           setImage(product.image);
           setBrand(product.brand);
           setCategory(product.category);
           setCountInStock(product.countInStock);
           setDescription(product.description);
        }
    },[product]);

    const submitHandler=async(e)=>{
        e.preventDefault();
        const updatedProduct={
            productId,
            name,
            price,
            image,
            brand,
            category,
            countInStock,
            description,
        };

        const result=await updateProduct(updatedProduct);
        if(result.error){
            toast.error(result.error);
        }else{
            toast.success('Product updated');
            navigate('/admin/productlist');
        }

    }


  return (
    <>
    <Link to="/admin/productlist" className='btn btn-light my-3'>
    GO Back
    </Link>
    <FormContainer>
        <h2>Edit Product</h2>
        {loadingUpdating && <Loader/>}
        {
            isLoading?<Loader/>
            :error?<Message variant='danger'>{error}</Message>:(
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='price'>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                        type='number'
                        placeholder='Enter price'
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

            {/* image upload */}

                    <Form.Group controlId='brand'>
                        <Form.Label>Brand</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Enter brand'
                        value={brand}
                        onChange={(e)=>setBrand(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='cetegory'>
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Enter cetegory'
                        value={category}
                        onChange={(e)=>setCategory(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='countinstock'>
                        <Form.Label>CountInStock</Form.Label>
                        <Form.Control
                        type='number'
                        placeholder='Enter countInStock'
                        value={countInStock}
                        onChange={(e)=>setCountInStock(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>


                    
                    <Form.Group controlId='description'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Enter description'
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Button type='submit' value='primary' className='my-2'>Update</Button>
                </Form>
            )
        }
    </FormContainer>
    </>
  )
}

export default ProductEditScreen