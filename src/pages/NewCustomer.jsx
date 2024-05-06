import { useEffect } from "react";
import NewCustomerForm from "../components/NewCustomer/NewCustomerForm";

export default function NewCustomer() {
    useEffect(() => {
        fetch("/api/1/CustomerInfo")
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    }, []);
    return (
        <>
            <h2>New Customer Form</h2>
            <NewCustomerForm />
        </>
    );
}
