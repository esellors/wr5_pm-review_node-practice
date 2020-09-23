const express = require('express');
const app = express();
const controller = require('./controller');

console.log(controller)

app.use(express.json());


// teams controller
app.get('/api/teams', controller.getTeams);
app.post('/api/teams', controller.addTeam);


const port = 5050
app.listen(port, () => console.log(`Server rocking out on ${port}`));