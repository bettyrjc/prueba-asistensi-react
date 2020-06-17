import React, { Component } from "react";
let indice = 1;
class People extends Component {
  componentDidMount() {
    this.showSlide(indice);
  }
  componentWillUnmount() {
    this.showSlide();
  }
  showSlide(n) {
    let slides = document.getElementsByClassName("testimonies-grill");
    let barras = document.getElementsByClassName("test-slider-box-circle");
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
    for (i = 0; i < barras.length; i++) {
      barras[i].className = barras[i].className.replace("active", "");
    }
    slides[indice - 1].style.display = "grid";
    barras[indice - 1].className += " active";
  }
  position(n) {
    this.showSlide((indice = n));
  }
  render() {
    return (
      <div>
        <section className="testimonies">
          <h2 className="testimonies-title">
            Lo que dicen familiares y usuarios, como <br />
            tú, sobre
            <b className="c-pink">asistensi</b>
          </h2>

          <div className="testimonies-container">
            <div className="testimonies-grill grill-box ">
              <div className="testimonies-grill-box fade">
                <h3 className="testimonies-grill-box-title c-pink">
                  Nelida Daal
                </h3>
                <h3 className="testimonies-grill-box-title c-gray">
                  Abuela en Venezuela
                </h3>
                <p className="testimonies-grill-box-description">
                  " La primera vez que vinieron fue excelente, la doctora y el
                  paramédico que la acompañó fueron excelentes. Me trajeron la
                  medicina a tiempo. Todo muy bien. "
                </p>
              </div>

              <div className="testimonies-grill-box fade">
                <h3 className="testimonies-grill-box-title c-pink">
                  Nelida Daal
                </h3>
                <h3 className="testimonies-grill-box-title c-gray">
                  Abuela en Venezuela
                </h3>
                <p className="testimonies-grill-box-description">
                  " La primera vez que vinieron fue excelente, la doctora y el
                  paramédico que la acompañó fueron excelentes. Me trajeron la
                  medicina a tiempo. Todo muy bien. "
                </p>
              </div>

              <div className="testimonies-grill-box fade">
                <h3 className="testimonies-grill-box-title c-pink">
                  Nelida Daal
                </h3>
                <h3 className="testimonies-grill-box-title c-gray">
                  Abuela en Venezuela
                </h3>
                <p className="testimonies-grill-box-description">
                  " La primera vez que vinieron fue excelente, la doctora y el
                  paramédico que la acompañó fueron excelentes. Me trajeron la
                  medicina a tiempo. Todo muy bien. "
                </p>
              </div>
            </div>
            <div className="testimonies-grill grill-box">
              <div className="testimonies-grill-box fade">
                <h3 className="testimonies-grill-box-title c-pink">
                  Nelida Daal
                </h3>
                <h3 className="testimonies-grill-box-title c-gray">
                  Hija en españa
                </h3>
                <p className="testimonies-grill-box-description">
                  " La primera vez que vinieron fue excelente, la doctora y el
                  paramédico que la acompañó fueron excelentes. Me trajeron la
                  medicina a tiempo. Todo muy bien. "
                </p>
              </div>

              <div className="testimonies-grill-box fade">
                <h3 className="testimonies-grill-box-title c-pink">
                  Nelida Daal
                </h3>
                <h3 className="testimonies-grill-box-title c-gray">
                  Abuela en Venezuela
                </h3>
                <p className="testimonies-grill-box-description">
                  " La primera vez que vinieron fue excelente, la doctora y el
                  paramédico que la acompañó fueron excelentes. Me trajeron la
                  medicina a tiempo. Todo muy bien. "
                </p>
              </div>

              <div className="testimonies-grill-box fade">
                <h3 className="testimonies-grill-box-title c-pink">
                  Nelida Daal
                </h3>
                <h3 className="testimonies-grill-box-title c-gray">
                  Abuela en Venezuela
                </h3>
                <p className="testimonies-grill-box-description">
                  " La primera vez que vinieron fue excelente, la doctora y el
                  paramédico que la acompañó fueron excelentes. Me trajeron la
                  medicina a tiempo. Todo muy bien. "
                </p>
              </div>
            </div>
            <div className="testimonies-grill grill-box">
              <div className="testimonies-grill-box">
                <h3 className="testimonies-grill-box-title c-pink">
                  Nelida Daal
                </h3>
                <h3 className="testimonies-grill-box-title c-gray">
                  Abuela en Venezuela
                </h3>
                <p className="testimonies-grill-box-description">
                  " La primera vez que vinieron fue excelente, la doctora y el
                  paramédico que la acompañó fueron excelentes. Me trajeron la
                  medicina a tiempo. Todo muy bien. "
                </p>
              </div>

              <div className="testimonies-grill-box">
                <h3 className="testimonies-grill-box-title c-pink">
                  Nelida Daal
                </h3>
                <h3 className="testimonies-grill-box-title c-gray">
                  Abuela en Venezuela
                </h3>
                <p className="testimonies-grill-box-description">
                  " La primera vez que vinieron fue excelente, la doctora y el
                  paramédico que la acompañó fueron excelentes. Me trajeron la
                  medicina a tiempo. Todo muy bien. "
                </p>
              </div>

              <div className="testimonies-grill-box">
                <h3 className="testimonies-grill-box-title c-pink">
                  Nelida Daal
                </h3>
                <h3 className="testimonies-grill-box-title c-gray">
                  Abuela en Venezuela
                </h3>
                <p className="testimonies-grill-box-description">
                  " La primera vez que vinieron fue excelente, la doctora y el
                  paramédico que la acompañó fueron excelentes. Me trajeron la
                  medicina a tiempo. Todo muy bien. "
                </p>
              </div>
            </div>
          </div>
          <div className="test-slider-box">
            <div
              className="test-slider-box-circle"
              onClick={() => this.position(1)}
            ></div>
            <div
              className="test-slider-box-circle"
              onClick={() => this.position(2)}
            ></div>
            <div
              className="test-slider-box-circle"
              onClick={() => this.position(3)}
            ></div>
          </div>
        </section>
      </div>
    );
  }
}
export default People;
