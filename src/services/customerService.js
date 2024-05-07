async function addCustomer(data) {
    try {
        const response = await fetch("/api/v1/CustomerInfo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(
                responseData.errors.map((err) => err.message).join(", "),
            );
        }
    } catch (err) {
        console.error("Failed to add customer: ", err);
        throw err;
    }
}

export { addCustomer };
