const { registerVehicle } = require('../../clients/supabase')

module.exports = async (req, res, next) => {
    try {
        await registerVehicle(req.body.id);
        res.sendStatus(204);
    } catch(error) {
        next(error);
    }
}