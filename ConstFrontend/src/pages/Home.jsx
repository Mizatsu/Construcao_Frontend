import React from 'react';
import Container from '../components/Container';
import './Home.css'
import Hina from '../assets/hina_default_00.png'
import Mika from '../assets/ch0069--00.png'

const Home = () => {
    return (
        <div className='page-layout'>
            <div className='side-container left' >
                <img className="left-image" src={Mika} alt="Mika" />
            </div>

            <div className='center-container'>
                <header>
                    <h1>Projeto Integrado</h1>
                    <p>Um webapp simples feito com React, Javascript e CSS.</p>
                </header>

                <main>
                    <div>
                        <Container>
                            <h2>Sobre o App</h2>
                            <p>
                                Este app permite realizar o preenchimento e envio de um formulário de cadastro, assim como gerenciar uma lista de itens - adicionando e removendo itens como desejar.
                                Explore as funcionalidades por meio da barra de navegação acima.
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

export default Home;