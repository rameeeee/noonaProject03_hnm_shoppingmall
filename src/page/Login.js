import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import {Container, Form, Button} from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate()
    const loginUser = (event) => {
        event.preventDefault();
        console.log('login user function issue')
        setAuthenticate(true)
        navigate('/')
    }

    return (
        /*
        <Container>
            <Form onSubmit={(event) => loginUser(event)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="danger" type="submit">
                    로그인
                </Button>
            </Form>
        </Container>
        */
       
        <div className="login-wrap">
            <div className="inner">
                <form className="login-form" onSubmit={(event) => loginUser(event)}>
                    <div className="login-box">
                        <div className='input-item input-email'>
                            <label htmlFor="email">이메일 또는 전화번호</label>
                            <input type="text" id="email" name="email" />
                        </div>
                        <div className="input-item input-pw">
                            <label htmlFor="pw">비밀번호</label>
                            <input type="text" id="pw" name="pw" />
                        </div>
                    </div>
                    <div className="keep-login">
                        <input type="checkbox" id="keep" name="keep" />
                        <label htmlFor="keep">로그인 상태 유지</label>
                    </div>
                    <div className="btn-wrap">
                        <button type="submit" className="btn-login">로그인</button>
                    </div>
                </form>
                <ul className="find-wrap">
                    <li>
                        <a href="#">비밀번호 찾기</a>
                    </li>
                    <li>
                        <a href="#">아이디 찾기</a>
                    </li>
                    <li>
                        <a href="#">회원가입</a>
                    </li>
                </ul>
            </div>
        </div>
       
    )
}

export default Login
