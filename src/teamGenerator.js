const managerCard = function (manager) {
    return 
    `<div class="col">
    <div class="card text-center" style="width: 18rem;">
          <div class="card-header text-light" style="background-color: rgba(99, 160, 76, 0.912);">
              <h1>${manager.name}</h1>
              <h3>Manager ☕</h3>
          </div>
          <div class="card-body" style="background-color: rgba(103, 103, 103, 0.039);">
              <table style="width: 100%; background-color: white;">
                  <tr>
                      <td>ID: 1</td>
                  </tr>
                   <tr>
                      <td> EMAIL: <a href="mailto:${manager.email}">${manager.email}</a> </td>
                  <tr>
                      <td>OFFICE #:${manager.officeNumber} </td>
                  </tr>
              </table>
          </div>
    </div>
  </div>`
};

