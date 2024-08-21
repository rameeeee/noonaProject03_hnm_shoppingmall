import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';

// fontawesome.library.add(faCoffee);


const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login')
    }

    return (
        <div className="nav-wrap">
            <div>
                {/* 미니과제1 로그인 페이지 이동 */}
                {/* <Link to='/login'>
                    <div className="login-button">
                        <FontAwesomeIcon icon={faUser} className="ico-login"/>
                        로그인
                    </div>
                </Link> */}

                <div className="login-button" onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser} className="ico-login"/>
                    로그인
                </div>
            </div>
            <div className="nav-section">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu33MvMQxzeLQWuQTeJbGoEUq_bsuAH1HMag&s" width={100} />
            </div>
            <div className="menu-area">
                <div className="menu-list-wrap">
                    <ul className="menu-list">
                        {menuList.map((menu, index) => (
                            <li key={index}>{menu}</li>
                        ))}
                    </ul>
                </div>
                <div className="input-wrap">
                    <div className="input-box">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="ico-search"/>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

