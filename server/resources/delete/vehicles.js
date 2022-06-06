const { deleteVehicle } = require('../../clients/supabase')

module.exports = async (req, res, next) => {
    try {
        await deleteVehicle(req.params.id);
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}