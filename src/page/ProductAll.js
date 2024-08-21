import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import {Container, Row, Col} from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom';



const ProductAll = ({authenticate}) => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProducts = async() => {
        const searchQuery = query.get('q') || "";
        console.log('searchQuery', searchQuery)
        const url = `https://my-json-server.typicode.com/rameeeee/noonaProject03_hnm_shoppingmall/products?q=${searchQuery}`
        const response = await fetch(url)
        const data = await response.json()
        setProductList(data)
    }
    useEffect(() => {
        getProducts()
        console.log('es')
    }, [query])

    
    return (
        <div className="product-wrap">
            <Container>
            <strong className="sort-title">전체 상품 페이지</strong>
                <Row>
                    {productList.map(menu => (
                        <Col key={menu.id} lg={3}><ProductCard item={menu} authenticate={authenticate} /></Col>
                    ))}
                </Row>
            </Container>
            
        </div>
    )
}

export default ProductAll
