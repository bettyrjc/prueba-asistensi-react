import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "../layout/fHeader";
import Footer from "../layout/fFooter";
import Spinner from "../utils/loaders";
import { getSearch } from "../../actions/searchAction";
import SideNav from "../layout/fsideNav";
import { utils } from "../utils/utils";
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
  componentDidMount() {}
  componentDidUpdate() {
    utils();
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
          <SideNav />
          <div className="search-container search-box ">
            <h3 className="c-pink m-t">Resultados</h3>
            <div className="card">
              {Places &&
                Places.map((place) => (
                  <div key={place.PlaceId} className="">
                    <p>
                      {place.PlaceId}-{place.CityName}-{place.CountryName} -
                      {place.IataCode}
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
