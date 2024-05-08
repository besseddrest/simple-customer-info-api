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
        console.log("caught at addCustomer");
        console.error("Failed to add customer: ", err);
        throw err;
    }
}

async function getCustomers() {
    try {
        const response = await fetch("/api/v1/CustomerInfo");
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
