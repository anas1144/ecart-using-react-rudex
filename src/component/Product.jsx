import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Product = () => {

    const {id} = useParams();
    const [Product, setProduct] = useState([]);
   
    const [loading, setloading] = useState(false);
    let componentMounted = true;

    const dispatch = useDispatch();
    const addProduct = (product) =>{
        dispatch(addCart(product));
    }


    useEffect(() => {
        const getProduct = async () => {
            setloading(true);
            const responce = await fetch(`https://fakestoreapi.com/products/${id}`);
            console.log(`https://fakestoreapi.com/products/${id}`);
            if (componentMounted) {
                
                setProduct(await responce.json());
                setloading(false);
                console.log(Product);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProduct();



    }, [])

    const Loading = () => {
        return (
            <>
               
                    <div className="col-md-3" >
                        <Skeleton height={350} />
                    </div>
                    <div className="col-md-3" >
                        <Skeleton height={350} />
                    </div>
                    <div className="col-md-3" >
                        <Skeleton height={350} />
                    </div>
                    <div className="col-md-3" >
                        <Skeleton height={350} />
                    </div>
                        
                   


            </>
        )
    }
    
    const ShowProduct = () => {
        return (
            <>
               
               
                <div className="container mt-5">
                    <div className="row">
                       

                                    <div className="col-md-6 mb-4">
                                        
                                            <img src={Product.image} className="card-img-top" width="400px" height="400px" alt={Product.title} />
                                            
                                        
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="text-uppercase text-black-50">{Product.category}</h4>
                                        <h1 className="display-5">{Product.title}</h1>
                                        <p className="lead">
                                            Rating {Product.rating && Product.rating.rate}
                                            <div className="fa fa-star"></div>
                                        </p>
                                        <div className="display-6 fw-bold my-4">
                                            ${Product.price}
                                        </div>
                                        <p className="lead">{Product.description}</p>
                                        <button className="btn btn-outline-dark px-3 py-2" onclick={()=>addProduct(Product)}>
                                            Add to Cart
                                        </button>
                                        <NavLink to="/cart" class="btn btn-dark mx-2 px-2 py-2">
                                        Go to Cart
                                        </NavLink>
                                    </div>

                               
                    </div>
                </div>

            </>
        )
    }

    return (
        <>
            <div>
                <div className="container my-5 py-5">
                    
                        
                           
                            <div className="row justify-content-center">
                                {loading ? <Loading /> : <ShowProduct />}

                            
                        
                    </div>
                </div>
            </div>


        </>
    )
}
export default Product;