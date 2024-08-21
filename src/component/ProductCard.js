import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item, authenticate}) => {
    // 미니과제 조건에 따라 상품 디테일 페이지 | 로그인 페이지 보이기
    /*
    const navigate = useNavigate()
    const goToDetail = (id) => {
        authenticate === true ? navigate('/product/:id') : navigate('/login')
    }
    return (
        <div className='product-card' onClick={goToDetail}>
            <img src={item?.img} />
            <div>{item?.choice === true ? 'Conscious choice':''}</div>
            <div>{item?.title}</div>
            <div>₩{item?.price}</div>
            <div>{item?.new === true ? '신제품' : ''}</div>
        </div>
    )
    */
    const navigate = useNavigate()
    const showDetail = () => {
        navigate(`/product/${item.id}`)
    }
    return (
        <div className='product-card' onClick={showDetail}>
            <img src={item?.img} />
            <div>{item?.choice === true ? 'Conscious choice':''}</div>
            <div>{item?.title}</div>
            <div>₩{item?.price}</div>
            <div>{item?.new === true ? '신제품' : ''}</div>
        </div>
    )
}

export default ProductCard
