import React, { Component } from "react";

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Sidenav from "../components/layout/sideNav";
import Benefits from "../components/layout/benefits";
import People from "../components/layout/people";
import icons from "../components/styles/img/icons/sprite.svg";
import { utils } from "../components/utils/utils";
import Spinner from "../components/utils/loaders";
import "../components/styles/css/style.css";
class Home extends Component {
  componentDidMount() {
    utils();
  }
  render() {
    const { loading } = this.props;
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <Header />
          <Sidenav />
          <main className="main">
            <section className="slider">
              <div className="slider-covid">
                <p>
                  Mientras dure la pandemia del COVID-19 ponemos a disposición
                  totalmente gratis
                  <b className="c-pink"> asistensi SOS</b> para consultas
                  médicas por cualquier motivo.
                  <b className="c-pink b">Haz clic aquí y accede.</b>
                </p>
              </div>
              <div className="slider-box">
                <div className="slider-box-description">
                  <p className="slider-box-description-slogan bold c-pink">
                    Cuídalos sin importar las distancias
                  </p>
                  <h1 className="slider-box-description-title">
                    ¡Proteger a tu familia en tu país nunca fue tan fácil!
                  </h1>
                  <p className="slider-box-description-text">
                    Ahora puedes hacerlo con asistensi, el mejor seguro para
                    emergencias médicas y atención médica inmediata, con
                    cobertura de hasta <b>USD.10.000,</b> por patología por año,
                    desde tan sólo
                    <b>USD.15</b>
                    al mes. Obtén ya tu cotización de la forma más fácil y cuida
                    a tus seres queridos desde la distancia. ¡Afílialos ya al
                    único seguro 100% online e inmediato! ¡Quiero cotizar!
                    ¡Afiliarse ahora!
                  </p>
                  <div className="slider-box-description-btns">
                    <button className="slider-box-description-btns-btn btn b-pink">
                      ¡Quiero cotizar!
                    </button>
                    <button className="slider-box-description-btns-btn btn b-purple">
                      ¡Afiliarse ahora!
                    </button>
                  </div>
                </div>

                <div className="slider-box-img">
                  <img
                    src="https://asistensi.com/static/images/banner-3.png"
                    alt="banner-3"
                  />
                </div>
              </div>
            </section>

            <div className="container">
              <section className="whatIs">
                <div className="whatIs-img">
                  <img
                    src="https://asistensi.com/static/images/home-%20que%20es%20asistensi.jpg"
                    alt="video"
                  />
                  <div className="overlay">
                    <svg className="whatIs-img-icon">
                      <use href={`${icons}#icon-youtube`} />
                    </svg>
                  </div>
                </div>
                <div className="whatIs-description">
                  <h2>
                    ¿Qu&eacute; es
                    <i className="c-pink">asistensi?</i>
                  </h2>
                  <p>
                    Es el mejor seguro para emergencias médicas con atención
                    médica inmediata, para que sigas cuidando a tus seres
                    queridos
                    <b>que siguen en su país.</b>
                  </p>

                  <p className="m-t">
                    <b className="c-pink">Asistensi</b> incluye los siguientes
                    beneficios para tus familiares, las <b>24 horas</b> del día
                    los
                    <b> 365 días</b> del año.
                  </p>
                </div>
              </section>
              <Benefits />
            </div>

            <section className="membership">
              <div className="membership-title absolute">
                <p className="slider-box-description-slogan bold c-pink">
                  Cuídalos sin importar las distancias
                </p>
                <h1>¿C&oacute;mo contratar asistensi?</h1>
              </div>
              <div className="membership-container">
                <div className="membership-container-box grid-1">
                  <div className="membership-container-box-circle">
                    <h1>1</h1>
                  </div>
                  <div className="membership-container-box-description">
                    <h3 className="c-pink">Paso 1:</h3>
                    <h1>¡Afiliaci&oacute;n inmediata!</h1>
                    <p>
                      Es el &uacute;nico seguro para emergencias médicas y
                      atención médica inmediata que puedes contratar y pagar
                      100% online de forma segura e inmediata.
                    </p>
                  </div>
                </div>

                <div className="membership-container-box grid-2 f-right">
                  <div className="membership-container-box-circle">
                    <h1>2</h1>
                  </div>
                  <div className="membership-container-box-description">
                    <h3 className="c-pink">Paso 2:</h3>
                    <h1>¡Tus familiares est&aacute;n protegidos!</h1>
                    <p>
                      Ante una emergencia médica tus familiares podrán acceder a
                      todos nuestros servicios solicitándolos a través de
                      nuestra App
                      <b className="c-pink">asistensi</b> o llamando a nuestros
                      números de emergencia.
                    </p>
                  </div>
                </div>

                <div className="membership-container-box grid-3">
                  <div className="membership-container-box-circle">
                    <h1>3</h1>
                  </div>
                  <div className="membership-container-box-description">
                    <h3 className="c-pink">Paso 3:</h3>
                    <h1>¡T&uacute; también estás protegido!</h1>
                    <p>
                      Descarga nuestra App <b className="c-pink">asistensi</b> y
                      consulta a nuestros médicos de forma gratuita e ilimitada
                      desde cualquier parte del mundo. Podrás recibir
                      indicaciones y recetas médicas para cuidar tu salud, sin
                      importar dónde estés.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="numbers">
              <div className="banner">
                <img
                  src="https://asistensi.com/static/images/banner-beneficios.png"
                  alt="banner de beneficios"
                />
              </div>
              <div className="numbers-title">
                <p className="slider-box-description-slogan bold c-pink">
                  Cuídalos sin importar las distancias
                </p>
                <h1>¡Los n&uacute;meros nos respaldan!</h1>
              </div>
              <div className="numbers-grill">
                <div className="numbers-grill-box pink">
                  <svg className="numbers-grill-box-icon">
                    <use href={`${icons}#icon-price-users`} />
                  </svg>
                  <h1>98%</h1>
                  <p>
                    de los usuarios de <b className="c-purple">asistensi</b>{" "}
                    están satisfechos con el servicio
                  </p>
                </div>

                <div className="numbers-grill-box purple">
                  <svg className="numbers-grill-box-icon">
                    <use href={`${icons}#icon-price-watch`} />
                  </svg>
                  <h1>98%</h1>
                  <p>
                    de los casos son atendidos con un tiempo de respuesta menor
                    a los 45 minutos.
                  </p>
                </div>

                <div className="numbers-grill-box pink">
                  <svg className="numbers-grill-box-icon">
                    <use href={`${icons}#icon-price-tags`} />
                  </svg>
                  <h1>95%</h1>
                  <p>
                    de los usuarios que han probado nuestro servicio nos
                    recomiendan.
                  </p>
                </div>
              </div>

              <div className="brands">
                <img
                  src="https://asistensi.com/static/images/bitmap.png"
                  alt="bitmap"
                />
                <img
                  src="https://asistensi.com/static/images/iso-logo.svg"
                  alt="iso"
                />
                <img
                  src="https://asistensi.com/static/images/ata-logo-transp.png"
                  alt="ata"
                />
                <img
                  src="https://asistensi.com/static/images/digi-cert-blue-transparent-logo.png"
                  alt="digicert"
                />
                <img
                  className="w-185"
                  src="https://asistensi.com/static/images/seguros-mercantil.svg"
                  alt="mercantil"
                />
              </div>
            </section>
            <People />
          </main>
          <Footer />
        </React.Fragment>
      );
    }
  }
}

export default Home;
