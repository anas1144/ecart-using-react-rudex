import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setloading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setloading(true);
            const responce = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                setData(await responce.clone().json());
                setFilter(await responce.json());
                setloading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();



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
    const filterProdocts = (cat) => {
        setloading(true);
        const updateProduct = data.filter((x)=>x.category === cat);
        setFilter(updateProduct);
        setloading(false);
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttions d-flex  justify-content-center mt-5">
                    <button className="btn btn-outline-dark"onClick={()=>setFilter(data)}>
                        All
                    </button>
                    <button className="btn btn-outline-dark ms-2" onClick={()=>filterProdocts("men's clothing")}>
                        Men's Clothing
                    </button>
                    <button className="btn btn-outline-dark ms-2" onClick={()=>filterProdocts("women's clothing")}>
                        Women's Clothing
                    </button>
                    <button className="btn btn-outline-dark ms-2" onClick={()=>filterProdocts("jewelery")}>
                        Jewelery
                    </button>
                    <button className="btn btn-outline-dark ms-2" onClick={()=>filterProdocts("electronics")} >
                        Electronic
                    </button>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        {filter.map((Product) => {
                            return (
                                <>

                                    <div className="col-3 mb-4">
                                        <div className="card h-100 text-center p-4" >
                                            <img src={Product.image} className="card-img-top" height="250px" alt={Product.title} />
                                            <div className="card-body">
                                                <h5 className="card-title mb-0">{Product.title.substring(0, 12)}</h5>
                                                <p className="card-text laed fw-bolder">${Product.price}</p>
                                                <NavLink to={`/product/${Product.id}`} class="btn btn-outline-dark mb-0">Buy Now</NavLink>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )
                        })}
                    </div>
                </div>

            </>
        )
    }

    return (
        <>
            <div>
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <h1 className="display-6 text-center fw-bolder">
                                Latest Products
                            </h1>
                            <hr />
                            <div className="row justify-content-center">
                                {loading ? <Loading /> : <ShowProducts />}

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Products;