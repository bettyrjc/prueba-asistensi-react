import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "../layout/fHeader";
import Footer from "../layout/fFooter";
import Spinner from "../utils/loaders";
import { getSearch } from "../../actions/searchAction";
// import searchReducer from "../../reducers/searchReducer";
class Results extends Component {
  state = {
    country: "",
    locale: "",
    originPlace: "",
    destinationPlace: "",
    currency: "",
    outboundPartialDate: "",
    inboundPartialDate: "",
  };
  componentDidMount() {
    this.props.getSearch();
  }
  render() {
    const { loading } = this.props;
    const { Places, Quotes } = this.props.search;
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <Header />
          <div className="container ">
            <h3 className="c-pink m-t">Resultados</h3>
            <div className="card">
              {Places &&
                Places.map((place) => (
                  <div key={place.PlaceId} className="">
                    <p>
                      {place.PlaceId}-{place.CityName}-{place.CountryName}
                    </p>
                  </div>
                ))}
              {Quotes &&
                Quotes.map((place) => (
                  <div key={place.QuoteId} className="">
                    <p>Precio:{place.MinPrice}</p>
                    <p>Codigo Destino: {place.OutboundLeg.DestinationId}</p>
                    <p>Codigo origen: {place.OutboundLeg.OriginId}</p>
                  </div>
                ))}
            </div>
            {/* <div>
              {Currencies &&
                Currencies.map((money) => (
                  <div key={money.placeId}>
                    <p>{money.Code}</p>
                  </div>
                ))}
            </div> */}
          </div>
          <Footer />
        </React.Fragment>
      );
    }
  }
}
Results.propTypes = {
  getSearch: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  search: state.search.search,
  loading: state.search.loading,
});

export default connect(mapStateToProps, { getSearch })(Results);
