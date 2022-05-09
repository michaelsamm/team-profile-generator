const generateCards = templateData => {
    const employees = templateData.map(employee => {
        switch (employee.getRole()) {
            // If the employee is a Manager create a card as follows:
            case "Manager":
                return `
                    <div class="card col-8 col-md-5 col-xl-3 m-2 p-0 rounded shadow">
                        <div class="card-body bg-primary">
                            <h2 class="text-light">${employee.name} </h2>
                            <p class="text-light h4"><i class="fa-solid fa-mug-hot"></i> Manager</p>
                        </div>
                        <div class="card-body bg-light">
                            <ul class="list-group my-1 p-0">
                                <li class="list-group-item">ID: ${employee.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                                <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                `
            // If the employee is an Engineer create a card as follows:
            case "Engineer":
                return `
                    <div class="card col-8 col-md-5 col-xl-3 m-2 p-0 rounded shadow">
                        <div class="card-body bg-primary">
                            <h2 class="text-light">${employee.name}</h2>
                            <p class="text-light h4"><i class="fa-solid fa-glasses"></i> Engineer</p>
                        </div>
                        <div class="card-body bg-light">
                            <ul class="list-group my-1 p-0">
                                <li class="list-group-item">ID: ${employee.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                                <li class="list-group-item">GitHub: <a href='https://github.com/${employee.githubUsername}' target='_blank'>${employee.githubUsername}</a></li>
                            </ul>
                        </div>
                    </div>
                `
            // If the employee is an Intern create a card as follows:
            case "Intern":
                return `
                    <div class="card col-8 col-md-5 col-xl-3 m-2 p-0 rounded shadow">
                        <div class="card-body bg-primary">
                            <h2 class="text-light">${employee.name}</h2>
                            <p class="text-light h4"><i class="fa-solid fa-user-graduate"></i> Intern</p>
                        </div>
                        <div class="card-body bg-light">
                            <ul class="list-group my-1 p-0">
                                <li class="list-group-item">ID: ${employee.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                                <li class="list-group-item">School: ${employee.school}</li>
                            </ul>
                        </div>
                    </div>
                `
        }
    })
    return employees.join('');
}

module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <h1 class="page-title text-center text-light bg-info py-5 px-3">My Team</h1>
      </header>
      <main class="container my-5">
        <div class="row justify-content-center" id="employees">
            ${generateCards(templateData)}
        </div>
      </main>
    </body>

    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>

    </html>
    `
}