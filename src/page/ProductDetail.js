import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';




const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const getProductDetail = async() => {
        const url = (`https://my-json-server.typicode.com/rameeeee/noonaProject03_hnm_shoppingmall/products/${id}`);
        const response = await fetch(url)
        const data = await response.json()
        console.log('detail info', data)
        setProduct(data)
    }
    useEffect(() => {
        getProductDetail()
    }, [])
    return (
        <Container>
            <Row>
                <Col className="product-img">
                    <div className='img-wrap'>
                        <img src={product?.img} />
                    </div>
                </Col>
                <Col>
                    <div className='detail-title'>{product?.title}</div>
                    <div className='detail-price'>₩{product?.price}</div>
                    {product?.choice === true ? <div className='detail-subtext'>Conscious choice</div>: ''}
                    <Dropdown className='detail-dropdown'>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            사이즈 선택
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {product?.size.map((item, index) => (
                                <Dropdown.Item key={index} href={`#/action-${index+1}`}>{item}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button className='detail-btn-add'>추가</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail
