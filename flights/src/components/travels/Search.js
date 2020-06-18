import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../utils/loaders";
import Header from "../layout/fHeader";
import Footer from "../layout/fFooter";
import Input from "../commons/input";
import SideNav from "../layout/fsideNav";

import { utils } from "../utils/utils";
import { getSearch } from "../../actions/searchAction";

class Search extends Component {
  state = {
    country: "",
    currency: "",
    locale: "",
    originPlace: "",
    destinationPlace: "",
    outboundPartialDate: "",
    inboundPartialDate: "",
    errors: {},
  };
  componentDidMount() {
    utils();
  }
  onSubmit = (e) => {
    e.preventDefault();

    const {
      country,
      currency,
      locale,
      originPlace,
      destinationPlace,
      outboundPartialDate,
      inboundPartialDate,
    } = this.state;

    // errores
    if (country === "") {
      this.setState({ errors: { country: "No puede estar vacio" } });
      return;
    }
    if (currency === "") {
      this.setState({ currency: { name: "No puede estar vacio" } });
      return;
    }
    if (locale === "") {
      this.setState({ errors: { locale: "No puede estar vacio" } });
      return;
    }
    if (originPlace === "") {
      this.setState({ errors: { originPlace: "No puede estar vacio" } });
      return;
    }
    if (destinationPlace === "") {
      this.setState({ errors: { destinationPlace: "No puede estar vacio" } });
      return;
    }
    if (outboundPartialDate === "") {
      this.setState({
        errors: { outboundPartialDate: "No puede estar vacio" },
      });
      return;
    }
    if (inboundPartialDate === "") {
      this.setState({ errors: { inboundPartialDate: "No puede estar vacio" } });
      return;
    }

    this.props.getSearch(
      `${country}/${currency}/${locale}/${destinationPlace}/${originPlace}/${outboundPartialDate}?inboundpartialdate=${inboundPartialDate}/`,
      this.props.history.push("/resultados")
    );
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  render() {
    const {
      country,
      currency,
      locale,
      originPlace,
      destinationPlace,
      outboundPartialDate,
      inboundPartialDate,
      errors,
    } = this.state;
    return (
      <React.Fragment>
        <Header />
        <SideNav />
        <div className=" search-container main search-box">
          <form className="search">
            <Input
              id="country"
              label="Pais"
              value={country}
              onChange={this.onChange}
              placeholder="US"
              error={errors.country}
            />
            <Input
              id="currency"
              label="moneda"
              value={currency}
              onChange={this.onChange}
              placeholder="USD"
              error={errors.currency}
            />
            <Input
              id="locale"
              label="Lugar"
              value={locale}
              onChange={this.onChange}
              placeholder="en-US"
              error={errors.locale}
            />

            <Input
              id="originPlace"
              label="Ciudad destino"
              value={originPlace}
              onChange={this.onChange}
              placeholder="Ciudad origen -JFK-sky"
              error={errors.originPlace}
            />
            <Input
              id="destinationPlace"
              label="Ciudad destino"
              value={destinationPlace}
              onChange={this.onChange}
              placeholder="Ciudad destino - SFO-sky"
              error={errors.destinationPlace}
            />
            <Input
              id="outboundPartialDate"
              label="Fecha partida"
              value={outboundPartialDate}
              onChange={this.onChange}
              placeholder="Fecha partida"
              type="date"
              error={errors.outboundPartialDate}
            />
            <Input
              id="inboundPartialDate"
              label="Fecha Regreso"
              value={inboundPartialDate}
              onChange={this.onChange}
              placeholder="Fecha Regreso"
              type="date"
              error={errors.inboundPartialDate}
            />
            {this.props.loading && <Spinner />}
          </form>
          <button className="search-btn btn" onClick={this.onSubmit}>
            Buscar
          </button>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
Search.propTypes = {
  getSearch: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  loading: state.search.loading,
});

export default connect(mapStateToProps, { getSearch })(Search);
