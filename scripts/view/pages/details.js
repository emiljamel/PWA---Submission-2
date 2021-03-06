import DataTeams from '../../data/data-teams.js';
import URLParser from '../../routes/url-parser.js'

const Details = {
  async render() {
    return `
      <div class="section" id="container">
        <div class="row">
          <div class="col s12">
            <span class="flow-text">Detail Klub</span>
          </div>
          <div class="col s12">
            <ul class="collection with-header" id="details"></ul>
          </div>
        </div>
      </div>
    `;
  },
  async afterRender() {
    const url = URLParser.parseActiveUrlWithoutCombiner();
    const detailsElement = document.getElementById('details');

    try {
      const result = await DataTeams.detailsTeam(url.id);

      detailsElement.innerHTML += `
        <li class="collection-header center">
          <img src="${result.crestUrl}" alt="${result.name}" height="100" />
        </li>
        <li class="collection-item">Nama: ${result.name}</li>
        <li class="collection-item">Nama Singkat: ${result.shortName}</li>
        <li class="collection-item">TLA: ${result.tla}</li>
        <li class="collection-item">Warna Klub: ${result.clubColors}</li>
        <li class="collection-item">Didirikan: ${result.founded}</li>
        <li class="collection-item">Lokasi: ${result.venue}</li>
        <li class="collection-item">Alamat: ${result.address}</li>
        <li class="collection-item">Email: ${result.email}</li>
        <li class="collection-item">Telp: ${result.phone}</li>
        <li class="collection-item">Website: <a href=${result.website} target="_blank">${result.website}</a></li>
      `;
    } catch (error) {
      console.log(error);
    }
  }
}

export default Details;