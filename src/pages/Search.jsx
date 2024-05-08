import { useEffect, useState } from "react";
import { getCustomers } from "../services/customerService";

export default function Search() {
    const [customerList, setCustomerList] = useState([]);

    useEffect(() => {
        // fetchCustomerList();
    }, []);

    return (
        <>
            <h2>Search Customers</h2>
            <form
                className="form__container form__container--search"
                onSubmit={handleSubmit}
            >
                <div className="form__flex-wrapper">
                    <div className="form__flex-item">
                        <input
                            type="text"
                            defaultValue=""
                            placeholder={`Search by whutevs`}
                        />
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
            <ul className="search-results__container">
                {customerList.map((user, i) => (
                    <li key={`user-${i}`}>
                        <strong>
                            Name: {user.firstName} {user.lastName}
                        </strong>
                        <br />
                        <small>ID: {user.id}</small>
                    </li>
                ))}
            </ul>
        </>
    );

    async function handleSubmit(ev) {
        ev.preventDefault();
        try {
            const response = await getCustomers();

            if (response) {
                console.log("GET clientside: ", response);
                setCustomerList([...response.data]);
            }
        } catch (err) {
            console.error("GET customers from server failed: ", err);
        }
    }
}
