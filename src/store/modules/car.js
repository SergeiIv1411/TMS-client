export default {
    actions: {
        async fetchCarsList(stx, { page, size, sortBy, sortDesc }) {
            try {
                const items = await fetch(`http://localhost:3000/api/v1/cars?page=${page}&size=${size}&sortBy=${sortBy}&sortDesc=${sortDesc}`, {
                    method: "get",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                return await items.json()
            } catch (e) {
                console.log(e);
                throw e
            }
        },
        async changeCarCategory(stx, {payload, eventId}) {
            try {
                const factDate = new Date();
                const car = {...payload, eventId,factDate};
                console.log(car);
                const carFromDB = await fetch(`http://localhost:3000/api/v1/cars/${car.id}`, {
                    method: "put",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ...car })
                })
                console.log(carFromDB);
                return await carFromDB.json()
            } catch (e) {
                console.log(e);
                throw e
            }
        }
    }
}