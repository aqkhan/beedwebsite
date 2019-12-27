import React, {useEffect, useState} from "react";
import {Container, Col} from "react-bootstrap";
import Style from "./style";
import {Link} from "gatsby";
import Mainsction from "../homeMain";
import {useQuery} from '@apollo/react-hooks';
import {listProducts} from "../quries";
import Loader from "../loader"

const Productspage = () => {
    const [products, setprdocts] = useState(null)
    const [copydata, setcopydata] = useState(null)
    const {data, error} = useQuery(listProducts, {
        variables: {
            limit: 1000
        }
    });

    useEffect(() => {
        if (error) {
            localStorage.removeItem("token")
            window.location.href = "/login"
        }
        if (data && data.listProducts.items) {
            setprdocts(data.listProducts.items);
            setcopydata(data.listProducts.items);
        }
    }, [data, error]);

    const filterSearch = (val) => {

        if (val) {

            val = val.toLowerCase();
            setprdocts(products && products.filter(sin=>sin.title.toLowerCase().indexOf(val)!== -1))
        }
        else {
            setprdocts(copydata)
        }

    }

    return data ? (
        <div>
            <Mainsction/>
            <Container className="products-container">
                <Col md={12} className="filter-section d-flex align-items-center">
                    <Col md={6}>
                        <h1>Products</h1>
                    </Col>
                    <Col md={6}>
                        <div className="filter-div">
                            <div className="single-search-div">
                                <input type="text" placeholder="Search Product" onChange={(event)=>filterSearch(event.target.value)}/>
                                <i className="fa fa-search"/>
                            </div>
                            <div className="single-search-div filter-select">
                                <select>
                                    <option>Sort By</option>
                                    <option>Option one</option>
                                    <option>Option one</option>
                                </select>
                                <i className="fa fa-angle-down"/>
                            </div>
                        </div>
                    </Col>
                </Col>

                <div className="d-flex flex-wrap">
                    {
                        products && products.map((sin, i) => {
                            let price = sin.price && parseInt(sin.price);

                            return (

                                <Col md={4} key={i}>
                                    <Link to={"product-detail/?id="+sin.id}>
                                    <div className="single-product-card">
                                        <div className="single-product-thumbnaail" style={{  backgroundImage: "url(" + (sin.thumbnail ? sin.thumbnail : "") + ")",}}/>
                                        <div className="single-product-detail">
                                            <p className="single-product-title">{sin.title && sin.title}</p>
                                            <p className="single-product-farm">{sin.farm && sin.farm.name}</p>
                                            <p className="single-product-price">{price ? "$" + (Math.round(price * 100) / 100).toFixed(2) : "N/A"}</p>
                                        </div>
                                    </div>
                                    </Link>
                                </Col>
                            )
                        })
                    }


                </div>
                <div className="cards-button-div d-flex justify-content-center">
                    <button className="btn view-more-btn">View More</button>
                </div>
                <Style/>
            </Container>
        </div>
    ):<Loader/>
}
export default Productspage