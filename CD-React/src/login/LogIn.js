import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [backgroundStyle, setBackgroundStyle] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Aplicar el estilo del body cuando el componente se monta
    document.body.style.backgroundColor = '#181828';
    
    return () => {
      // Limpiar el estilo cuando el componente se desmonta
      document.body.style.backgroundColor = '';
    };
  }, []);

  const handleLogin = () => {
    // Por ahora, solo navegar sin validar credenciales
    navigate('/home');
  };

  const handleBackgroundChange = (styleClass) => {
    setBackgroundStyle(styleClass);
  };

  return (
    <div className="login-page">
      <header className="top-header">
      </header>

      <div id="mainCoantiner" className={backgroundStyle}>
        <div className="main-header">
          <div className="header-social">
            <ul>
              <li><a id="nmberone" onClick={() => handleBackgroundChange('')}>1</a></li>
              <li><a id="nmbertwo" onClick={() => handleBackgroundChange('mystyleSec')}>2</a></li>
              <li><a id="numberthree" onClick={() => handleBackgroundChange('mystylethird')}>3</a></li>
              <li><a>4</a></li>
            </ul>
          </div>
          <div className="folio-btn">
            <a className="folio-btn-item ajax" href="https://codepen.io/uiswarup/full/WNLdjqN" target="_blank" rel="noopener noreferrer">
              <span className="folio-btn-dot"></span>
              <span className="folio-btn-dot"></span>
              <span className="folio-btn-dot"></span>
              <span className="folio-btn-dot"></span>
              <span className="folio-btn-dot"></span>
              <span className="folio-btn-dot"></span>
              <span className="folio-btn-dot"></span>
              <span className="folio-btn-dot"></span>
              <span className="folio-btn-dot"></span>
            </a>
          </div>
        </div>

        {/* Partículas de polvo */}
        <div>
          <div className="starsec"></div>
          <div className="starthird"></div>
          <div className="starfourth"></div>
          <div className="starfifth"></div>
        </div>

        <div className="container text-center text-dark mt-5">
          <div className="row">
            <div className="col-lg-4 d-block mx-auto mt-5">
              <div className="row">
                <div className="col-xl-12 col-md-12 col-md-12">
                  <div className="card">
                    <div className={`card-body wow-bg ${backgroundStyle}`} id="formBg">
                      <h3 className="colorboard">Login</h3>
                      <p className="text-muted">Sign In to your account</p>

                      <div className="input-group mb-3">
                        <input 
                          type="text" 
                          className="form-control textbox-dg" 
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      
                      <div className="input-group mb-4">
                        <input 
                          type="password" 
                          className="form-control textbox-dg" 
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="row">
                        <div className="col-12">
                          <button 
                            type="button" 
                            className="btn btn-primary btn-block logn-btn"
                            onClick={handleLogin}
                          >
                            Login
                          </button>
                        </div>
                        <div className="col-12">
                          <a href="#" className="btn btn-link box-shadow-0 px-0">Forgot password?</a>
                        </div>
                      </div>

                      <div className="mt-6 btn-list">
                        <button type="button" className="socila-btn btn btn-icon btn-facebook fb-color">
                          <i className="fab fa-facebook-f faa-ring animated"></i>
                        </button>
                        <button type="button" className="socila-btn btn btn-icon btn-google incolor">
                          <i className="fab fa-linkedin-in faa-flash animated"></i>
                        </button>
                        <button type="button" className="socila-btn btn btn-icon btn-twitter tweetcolor">
                          <i className="fab fa-twitter faa-shake animated"></i>
                        </button>
                        <button type="button" className="socila-btn btn btn-icon btn-dribbble driblecolor">
                          <i className="fab fa-dribbble faa-pulse animated"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;