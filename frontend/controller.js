const controller = {
    getAllLocations: async function() {
        try {
            const response = await fetch(
                `http://10.19.129.45:3000/locations/get-all`,
            );
            const json = await response.json();
            return json;
        } catch (error) {
            console.error(error);
        }
    },
    
    getLocationsByCoordinates: async function(coordinates, radius) {
        const response = await fetch(url + '/locations/coordinates?userCoordinates=' + coordinates + '&locationRadius=' + radius);
        const locations = await response.json();
        return locations;
    }
}

export default controller