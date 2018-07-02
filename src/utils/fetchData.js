// would include 'request' as one of the three arguments if needed to pass param into API URL

const fetchData = (onSuccess, onFailure) => {
  const API_URL = "https://openexchangerates.org/api/latest.json?app_id=66509a8c337e4718b4f3c4c235c5db69";
  const apiConfig = {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    // body: request
  };

  fetch(API_URL, apiConfig)
    .then(results => results.json())
    .then(response => {
      onSuccess && onSuccess(response);
    })
    .catch(error => {
      onFailure && onFailure(error);
    });
};

export {fetchData}