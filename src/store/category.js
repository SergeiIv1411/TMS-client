export default {
    actions: {
        async fetchCategories() {
            try {
                const server_app = process.env.TMS_APP_SERVER
                const categories = await fetch(`http://localhost:3000/api/v1/events`, {
                    method: "get",
                    headers: {
                      "Content-Type": "application/json",
                    }
                  })
                console.log(categories);
                return await categories.json()
            } catch (e) {
                console.log(e);
                throw e
            }
        },
    }
}