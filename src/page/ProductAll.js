import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import {Container, Row, Col} from 'react-bootstrap'


const ProductAll = ({authenticate}) => {
    
    const [productList, setProductList] = useState([]);
    const getProducts = async() => {
        const url = `http://localhost:4000/products`
        const response = await fetch(url)
        const data = await response.json()
        setProductList(data)
    }
    useEffect(() => {
        getProducts()
        console.log('es')
    }, [])

    
    return (
        <div className="product-wrap">
            <strong className="sort-title">전체 상품 페이지</strong>
            <Container>
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
