const { createClient } = require('@supabase/supabase-js')

const supabase = createClient('https://vlunhkxczwzridnvnglx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsdW5oa3hjend6cmlkbnZuZ2x4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ0MzkxNDYsImV4cCI6MTk3MDAxNTE0Nn0.xsxQGBwokeVVj3h3rNeOa2cMKexfZySCsLxp_My7xWU')

const registerVehicle = async id => {
    const { data, error } = await supabase
        .from('vehicles')
        .insert([{ id }])
    if (error) throw error;
    return data;
}

const trackVehicleLocation = async ({ id, lat, lng, at }) => {
    const { data, error } = await supabase
        .from('vehiclesLocation')
        .insert([{ id, lat, lng, at }])
    if (error) throw error;
    return data;
}

const deleteVehicle = async id => {
    const { data, error } = await supabase
        .from('vehicles')
        .delete()
        .match({ id })
    if (error) throw error;
    return data;
}

module.exports = {
    registerVehicle,
    trackVehicleLocation,
    deleteVehicle
}

