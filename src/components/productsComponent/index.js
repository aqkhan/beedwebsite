import React, {useEffect, useState} from "react";
import {Container, Col} from "react-bootstrap";
import Style from "./style";
import {Link} from "gatsby";
import Mainsction from "../homeMain";
import {useQuery} from '@apollo/react-hooks';
import {listProducts, listFarms} from "../quries";
import Loader from "../loader"

const Productspage = () => {

    const [products, setprdocts] = useState(null);
    const [copydata, setcopydata] = useState(null);
    const [farms, setfarms] = useState(null);
    const {data, error} = useQuery(listProducts, listFarms, {
        variables: {
            limit: 1000
        }
    });


    const farmsList = useQuery(listFarms);
    useEffect(() => {
        if (error) {
            localStorage.removeItem("token");
            window.location.href = "/login"
        }
        if (data && data.listProducts.items) {
            setprdocts(data.listProducts.items);
            setcopydata(data.listProducts.items);
        }
        if (farmsList && farmsList.data && farmsList.data.listFarms.items) {
            setfarms(farmsList.data.listFarms.items)
        }

    }, [data, error, farmsList]);

    const filterSearch = (val) => {
        if (val) {
            setprdocts(copydata && [...copydata.filter(sin => sin.title.toLowerCase().indexOf(val.toLowerCase()) !== -1)])
        }
        else {
            setprdocts(copydata)
        }
    }

    const filterFromSelect = (val) => {

           if (val) {
               setprdocts(copydata && [...copydata.filter(sin => sin.farm.id === val)])
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
                                <input type="text" placeholder="Search Product"
                                       onChange={(event) => filterSearch(event.target.value)}/>
                                <i className="fa fa-search"/>
                            </div>
                            <div className="single-search-div filter-select">
                                <select onChange={(event) => filterFromSelect(event.target.value)}>
                                    <option value="" onChange={(event) => filterFromSelect(event.target.value)}>Select
                                        Farm
                                    </option>
                                    {
                                        farms && farms.map((sin, i) => {
                                            return (

                                                <option value={sin.id} key={i}>{sin.name}</option>
                                            )
                                        })
                                    }
                                </select>
                                <i className="fa fa-angle-down"/>
                            </div>
                        </div>
                    </Col>
                </Col>

                <div className="d-flex flex-wrap">
                    {
                        products && products.length !== 0 ? products.map((sin, i) => {

                            let price = sin.price && parseInt(sin.price);
                            return (

                                <Col md={4} key={i}>
                                    <Link to={"product-detail/?id=" + sin.id}>
                                        <div className="single-product-card">
                                            <div className="single-product-thumbnaail"
                                                 style={{backgroundImage: "url(" + (sin.thumbnail ? sin.thumbnail : "") + ")",}}/>
                                            <div className="single-product-detail">
                                                <p className="single-product-title">{sin.title && sin.title}</p>
                                                <p className="single-product-farm">{sin.farm && sin.farm.name}</p>
                                                <p className="single-product-price">{price ? "$" + (Math.round(price * 100) / 100).toFixed(2) : "N/A"}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            )
                        }) :
                            <h1 style={{textAlign: "center", width: "100%", fontSize: "20px"}}>No Products Found</h1>
                    }
                </div>
                <Style/>
            </Container>
        </div>
    ) : <Loader/>
}
export default Productspage