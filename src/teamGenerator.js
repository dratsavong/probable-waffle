
const generateManagerCard = function (manager) {
    return `
    <div class="col">
    <div class="card text-center" style="width: 18rem;">
          <div class="card-header text-light" style="background-color: rgba(99, 160, 76, 0.912);">
              <h1 id="managerName"></h1> ${manager.name} </h1>
              <h3>Manager ☕</h3>
          </div>
          <div class="card-body" style="background-color: rgba(103, 103, 103, 0.039);">
              <table style="width: 100%; background-color: white;">
                  <tr>
                      <td id="managerID">ID: ${manager.id}</td>
                  </tr>
                   <tr>
                      <td id="managerEmail">EMAIL: <a href="mailto:${manager.email} "> </a>${manager.email} </td>
                  <tr>
                  <td id="officeNumber">OFFICE #: ${manager.officeNumber}</td>
                  </tr>
              </table>
          </div>
    </div>
  </div>`
}

const generateEngineerCard = function(engineer) {
    return `
    <div class="col">
        div class="card text-center mx-auto" style="width: 18rem;">
        <div class="card-header text-light" style="background-color: rgba(99, 160, 76, 0.912);">
            <h1 id="engineerName"> ${engineer.name} </h1>
            <h3>Engineer 👓</h3>
            </div>
            <div class="card-body" style="background-color: rgba(103, 103, 103, 0.039);">
            <table style="width: 100%; background-color: white;">
                <tr>
                    <td id="engineerId">ID: ${engineer.id} </td>
                </tr>
                <tr>
                    <td id="engineerEmail"> EMAIL: <a href="mailto: ${engineer.email} ">${engineer.email} </a></td>
                </tr>
                <tr>
                    <td id="github"> GITHUB: <a href=" ${engineer.github}"> ${engineer.github}</a></td>
                </tr>
            </table>
        </div>
        </div>
    </div>
    `
}


const generateInternCard = function(intern) {
    return `
    <div class="col">
        <div class="card text-center mx-auto" style="width: 18rem;">
            <div class="card-header text-light" style="background-color: rgba(99, 160, 76, 0.912);">
                <h1 id="internName"> ${intern.name}</h1>  
                <h3>Intern 📖</h3>
            </div>
            <div class="card-body" style="background-color: rgba(103, 103, 103, 0.039);">
            <table style="width: 100%; background-color: white;">
                <tr>
                    <td id="internID">ID: ${intern.id} </td>
                </tr>
                <tr>
                    <td id="internEmail"> EMAIL: <a href="mailto: ${intern.email} "> ${intern.email}</a></td>
                <tr>
                    <td id="school">SCHOOL: ${intern.school} </td>
                </tr>
            </table>
            </div>
        </div>
    </div> `
}


generateHTML = (data) => {
    pageArray = []; 
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 
        if (role === 'Manager') {
            const managerCard = generateManagerCard(employee);

            pageArray.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineerCard(employee);

            pageArray.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = generateInternCard(employee);

            pageArray.push(internCard);
        }
        
    }
    const employeeCards = pageArray.join('');
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;
}


const generateTeamPage = function(employeeCards) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css" />
    <title>Team Profile Generator</title>
</head>
<body>
    <header
    class="text-light text-center" style="background-color:peru ; padding: 3%;">
    <h1>My Team</h1>
    </header>

    <container class="justify-content-center align-items-center vh-100">
        <div class="row cols-md-3 g-3" style="padding: 3%;">
            ${employeeCards}
        </div>
    </container>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1.11.3/dayjs.min.js"
integrity="sha256-iu/zLUB+QgISXBLCW/mcDi/rnf4m4uEDO0wauy76x7U="
crossorigin="anonymous"></script>
</html>
    `
}



module.exports = generateHTML; 
