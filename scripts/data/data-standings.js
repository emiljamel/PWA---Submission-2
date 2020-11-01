class DataSatandings {
  static getStandings() {
    return fetch('http://api.football-data.org/v2/competitions/2021/standings?standingType=TOTAL', {
      headers: {
        'X-Auth-Token': 'afe35bd658a449c485b7a28f9ce426d3'
      }
    }).then(response => {
      return response.json();
    }).then(responseJson => {
      if (Object.keys(responseJson).length > 0) {
        return Promise.resolve(responseJson);
      } else {
        return Promise.reject(new Error());
      }
    }).catch(error => {
      console.log(error);
    });
  }
}

export default DataSatandings;