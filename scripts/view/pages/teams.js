import DataTeams from '../../data/data-teams.js';
import { saveForLater } from '../../data/data-favorites.js';

const Teams = {
  async render() {
    return `
      <div class="section" id="container">
        <div class="row">
          <div class="col s12">
            <span class="flow-text">Daftar Klub</span>
          </div>
          <div id="teams-list"></div>
        </div>
      </div>
    `;
  },
  async afterRender() {
    const teamsList = document.getElementById('teams-list');

    try {
      const results = await DataTeams.getTeams();

      results.teams.forEach(result => {
        teamsList.innerHTML += `
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img src="${result.crestUrl}" alt="${result.name}" height="300" />
                <span class="card-title black-text">${result.name}</span>
                <a class="btn-floating halfway-fab"><i class="material-icons">add</i></a>
              </div>
              <div class="card-action">
                <a href="#/details/${result.id}" class="black-text">Selengkapnya</a>
              </div>
            </div>
          </div>
        `;
      });

      document.querySelectorAll('.btn-floating').forEach((element, index) => {
        element.addEventListener('click', () => {
          saveForLater(results.teams[index]);
        });
      });
    } catch (error) {
      console.log(error)
    }
  }
}

export default Teams;