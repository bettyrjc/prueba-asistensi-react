import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../utils/loaders";
import Header from "../layout/fHeader";
import Footer from "../layout/fFooter";
import Input from "../commons/input";
// import { getSearch } from "../../reducers/searchReducer";
import { getSearch } from "../../actions/searchAction";
class Search extends Component {
  state = {
    country: "",
    locale: "",
    originPlace: "",
    destinationPlace: "",
    currency: "",
    outboundPartialDate: "",
    inboundPartialDate: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log("send");
    this.setState({
      country: "",
      locale: "",
      originPlace: "",
      destinationPlace: "",
      currency: "",
      outboundPartialDate: "",
      inboundPartialDate: "",
    });
    this.props.getSearch(this.props.history);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  render() {
    const {
      country,
      locale,
      originPlace,
      destinationPlace,
      currency,
      outboundPartialDate,
      inboundPartialDate,
    } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className=" search-container container">
          <form className="search">
            <Input
              id="destinationPlace"
              label="Ciudad destino"
              value={destinationPlace}
              onChange={this.onChange}
              placeholder="Ciudad destino - SFO-sky"
            />
            <Input
              id="originPlace"
              label="Ciudad destino"
              value={originPlace}
              onChange={this.onChange}
              placeholder="Ciudad origen -JFK-sky"
            />
            <Input
              id="country"
              label="Pais"
              value={country}
              onChange={this.onChange}
              placeholder="US"
            />
            <Input
              id="locale"
              label="Lugar"
              value={locale}
              onChange={this.onChange}
              placeholder="en-US"
            />

            <Input
              id="currency"
              label="moneda"
              value={currency}
              onChange={this.onChange}
              placeholder="USD"
            />
            <Input
              id="outboundPartialDate"
              label="Fecha partida"
              value={outboundPartialDate}
              onChange={this.onChange}
              placeholder="Fecha partida"
              type="date"
            />
            <Input
              id="inboundPartialDate"
              label="Fecha Regreso"
              value={inboundPartialDate}
              onChange={this.onChange}
              placeholder="Fecha Regreso"
              type="date"
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

// const mapDispatchToProps = (dispatch) => ({
//   getSearch() {
//     dispatch(actions.function());
//   },
// });
export default connect(mapStateToProps, { getSearch })(Search);
