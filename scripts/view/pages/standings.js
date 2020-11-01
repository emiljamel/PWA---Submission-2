import DataStandings from '../../data/data-standings.js';

const Standings = {
  async render() {
    return `
      <div class="section" id="container">
        <div class="row">
          <div class="col s12">
            <span class="flow-text">Peringkat Klub</span>
          </div>
          <div class="col s12">
            <div class="card">
              <div class="card-content">
                <table class="responsive-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Klub</th>
                      <th>Kalah</th>
                      <th>Seri</th>
                      <th>Menang</th>
                      <th>Selisih Gol</th>
                      <th>Poin</th>
                    </tr>
                  </thead>
                  <tbody id="standings-list"></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  async afterRender() {
    const standingsListElement = document.getElementById('standings-list');

    try {
      const results = await DataStandings.getStandings(); 
      
      results.standings[0].table.forEach(result => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${result.position}</td>`;
        row.innerHTML += `<td>${result.team.name}</td>`;
        row.innerHTML += `<td>${result.lost}</td>`
        row.innerHTML += `<td>${result.draw}</td>`;
        row.innerHTML += `<td>${result.won}</td>`;
        row.innerHTML += `<td>${result.goalDifference}</td>`;
        row.innerHTML += `<td>${result.points}</td>`;

        standingsListElement.appendChild(row);
      });
    } catch (error) {
      console.log(error)
    }
  }
}

export default Standings;