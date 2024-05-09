async function addCustomer(data) {
    try {
        const response = await fetch("/api/v1/CustomerInfo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        let responseData = await response.json();

        return responseData;
    } catch (err) {
        console.error("Failed to add customer: ", err);
        throw err;
    }
}

async function getCustomers(filter, value) {
    try {
        const response = await fetch(
            "/api/v1/CustomerInfo?" + new URLSearchParams({ filter, value }),
        );
        const responseData = await response.json();

        if (responseData) {
            return responseData;
        }
    } catch (err) {
        console.error("GET customers failed: ", err);
        throw err;
    }
}

export { addCustomer, getCustomers };
