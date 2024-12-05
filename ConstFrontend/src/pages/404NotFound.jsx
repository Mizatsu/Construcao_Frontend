import React from 'react';
import Container from '../components/Container';
import './Home.css'
import Hina from '../assets/hina_default_00.png'
import Mika from '../assets/ch0069--00.png'

const NotFound = () => {
    return (
        <div className='page-layout'>
            <div className='side-container left' >
                <img className="left-image" src={Mika} alt="Mika" />
            </div>

            <div className='center-container'>
                <header>
                    <h1>404 Não Encontrado!</h1>
                </header>

                <main>
                    <div>
                        <Container>
                            <p>
                                A página que você procurou não foi encontrada ou não existe. Verifique se a URL foi digitada corretamente ou utilize a barra de navegação acima.
                            </p>
                        </Container>
                    </div>
                </main>

                <footer>
                    <p>© 2024 All rights reserved.</p>
                </footer>
            </div>

            <div className='side-container right' >
                <img className="right-image" src={Hina} alt="Hina" />
            </div>
        </div>
    );
};

export default NotFound;