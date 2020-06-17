import React, { Component } from "react";
import icons from "../styles/img/icons/sprite.svg";

let indice = 1;
class Benefits extends Component {
  componentDidMount() {
    this.showBox(indice);
  }
  componentWillUnmount() {
    this.showBox();
  }
  avanzaSlide(n) {
    this.showBox((indice += n));
  }
  counter() {
    setInterval(() => {
      this.showBox((indice += 1));
    }, 2000);
  }
  showBox(n) {
    let slides = document.getElementsByClassName("benefits-grill");
    let i;
    if (n > slides.length) {
      indice = 1;
    }
    if (n < 1) {
      indice = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[indice - 1].style.display = "grid";
  }
  render() {
    return (
      <React.Fragment>
        <section className="benefits">
          <div className="benefits-title">
            <div className="benefits-title-box">
              <h2>Beneficios</h2>
            </div>
            <button className="benefits-title-btn btn btn-outlined">
              ¡Quiero saber mas!
            </button>
          </div>

          <div className="benefits-main">
            <button
              className="benefits-main-btn"
              onClick={() => this.avanzaSlide(-1)}
            >
              <svg className="benefits-main-icons-icon">
                <use href={`${icons}#icon-chevron-small-left`}></use>
              </svg>
            </button>

            <div className="benefits-container">
              <div className="benefits-grill">
                <div className="benefits-grill-box fade">
                  <div className="benefits-grill-box-img">
                    <img
                      src="https://asistensi.com/static/images/servicios-telemedicina.jpg"
                      alt=""
                    />
                    <div className="hover">
                      <button className="hover-btn btn">
                        Mas informaci&oacute;n
                      </button>
                    </div>
                  </div>
                  <h3 className="benefits-grill-box-title">Telemedicina</h3>
                  <p className="benefits-grill-box-description">
                    Consultas médicas telefónicas y por video llamada a través
                    de nuestra App
                    <b className="c-pink"> asistensi </b>, disponible en iOS y
                    Android.
                  </p>
                </div>
                <div className="benefits-grill-box fade">
                  <div className="benefits-grill-box-img">
                    <img
                      src="https://asistensi.com/static/images/servicios-telemedicina.jpg"
                      alt=""
                    />
                    <div className="hover">
                      <button className="hover-btn btn">
                        Mas informaci&oacute;n
                      </button>
                    </div>
                  </div>
                  <h3 className="benefits-grill-box-title">
                    Atención médica domiciliaria
                  </h3>
                  <p className="benefits-grill-box-description">
                    Consultas médicas telefónicas y por video llamada a través
                    de nuestra App
                    <b className="c-pink"> asistensi </b>, disponible en iOS y
                    Android.
                  </p>
                </div>
                <div className="benefits-grill-box fade">
                  <div className="benefits-grill-box-img">
                    <img
                      src="https://asistensi.com/static/images/servicios-telemedicina.jpg"
                      alt=""
                    />
                    <div className="hover">
                      <button className="hover-btn btn">
                        Mas informaci&oacute;n
                      </button>
                    </div>
                  </div>
                  <h3 className="benefits-grill-box-title">
                    Entrega de medicamentos
                  </h3>
                  <p className="benefits-grill-box-description">
                    Consultas médicas telefónicas y por video llamada a través
                    de nuestra App
                    <b className="c-pink"> asistensi </b>, disponible en iOS y
                    Android.
                  </p>
                </div>
              </div>
              <div className="benefits-grill">
                <div className="benefits-grill-box fade">
                  <div className="benefits-grill-box-img">
                    <img
                      src="https://asistensi.com/static/images/servicios-telemedicina.jpg"
                      alt=""
                    />
                    <div className="hover">
                      <button className="hover-btn btn">
                        Mas informaci&oacute;n
                      </button>
                    </div>
                  </div>
                  <h3 className="benefits-grill-box-title">
                    Entrega de medicamentos
                  </h3>
                  <p className="benefits-grill-box-description">
                    Consultas médicas telefónicas y por video llamada a través
                    de nuestra App
                    <b className="c-pink"> asistensi </b>, disponible en iOS y
                    Android.
                  </p>
                </div>
                <div className="benefits-grill-box fade">
                  <div className="benefits-grill-box-img">
                    <img
                      src="https://asistensi.com/static/images/servicios-telemedicina.jpg"
                      alt=""
                    />
                    <div className="hover">
                      <button className="hover-btn btn">
                        Mas informaci&oacute;n
                      </button>
                    </div>
                  </div>
                  <h3 className="benefits-grill-box-title">
                    Entrega de medicamentos
                  </h3>
                  <p className="benefits-grill-box-description">
                    Consultas médicas telefónicas y por video llamada a través
                    de nuestra App
                    <b className="c-pink"> asistensi </b>, disponible en iOS y
                    Android.
                  </p>
                </div>
                <div className="benefits-grill-box fade">
                  <div className="benefits-grill-box-img">
                    <img
                      src="https://asistensi.com/static/images/servicios-telemedicina.jpg"
                      alt=""
                    />
                    <div className="hover">
                      <button className="hover-btn btn">
                        Mas informaci&oacute;n
                      </button>
                    </div>
                  </div>
                  <h3 className="benefits-grill-box-title">
                    Entrega de medicamentos
                  </h3>
                  <p className="benefits-grill-box-description">
                    Consultas médicas telefónicas y por video llamada a través
                    de nuestra App
                    <b className="c-pink"> asistensi </b>, disponible en iOS y
                    Android.
                  </p>
                </div>
              </div>
            </div>

            <button
              className="benefits-main-btn"
              onClick={() => this.avanzaSlide(1)}
            >
              <svg className="benefits-main-icons-icon">
                <use href={`${icons}#icon-chevron-small-right`}></use>
              </svg>
            </button>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Benefits;
