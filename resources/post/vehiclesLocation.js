const { trackVehicleLocation } = require('../../clients/supabase')

module.exports = async (req, res, next) => {
    try {
        await trackVehicleLocation({ id: req.params.id, ...req.body });
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}