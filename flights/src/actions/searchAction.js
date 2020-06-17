import { GET_SEARCHS, LOADING, END_LOADING } from "./types";

// country,
// currency,
// locale,
// originPlace,
// destinationPlace,
// outboundPartialDate,
// inboundPartialDate
// `https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/${country}/${currency}/${locale}/
// ${originPlace}/
// ${destinationPlace}/
// ${outboundPartialDate}/
// ${inboundPartialDate}`,
// await fetch(
//   "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2020-09-01?inboundpartialdate=2020-12-01",
//   {
//     method: "GET",
//     headers: {
//       "x-rapidapi-host":
//         "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
//       "x-rapidapi-key": "3e75205a1amsh6ddc480a90bc50ep19b0cfjsnd6192a0eabe9",
//     },
//   }
// )

export const getSearch = (history) => async (dispatch) => {
  Loading(dispatch);
  await fetch(
    "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2020-09-01?inboundpartialdate=2020-12-01",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "3e75205a1amsh6ddc480a90bc50ep19b0cfjsnd6192a0eabe9",
      },
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then((response) => {
      dispatch({
        type: GET_SEARCHS,
        payload: response,
      });
      removeLoading(dispatch);
      console.log(response);
      history.push("/resultados");
    })
    .catch((err) => {
      removeLoading(dispatch);
      alert("un error");
      console.log(err);
    });
};

export const Loading = (dispatch) => {
  dispatch({
    type: LOADING,
  });
};

export const removeLoading = (dispatch) => {
  dispatch({
    type: END_LOADING,
  });
};
