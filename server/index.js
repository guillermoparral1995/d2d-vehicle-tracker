const app = require('express')();
const bodyParser = require('body-parser');

const { postVehicles, postVehiclesLocation, deleteVehicles } = require('./resources');

app.use(bodyParser.json())

app.post('/vehicles', postVehicles)

app.post('/vehicles/:id/location', postVehiclesLocation)

app.delete('/vehicles/:id', deleteVehicles)

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
})

app.listen(8080, () => console.log('SERVER ::: Listening in port 8080'));