import { useState } from "react";
import { useForm } from "react-hook-form";
import { getCustomers } from "../../services/customerService";

export default function CustomerSearchForm() {
    const [customerList, setCustomerList] = useState([]);
    const [filterVal, setFilterVal] = useState("name");
    const methods = useForm();

    return (
        <>
            <form
                className="form__container form__container--search"
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                <div className="form__flex-wrapper">
                    <fieldset className="form__flex-item form__fieldset">
                        <legend>Filter</legend>
                        <div>
                            <label htmlFor="nameFilter">
                                <input
                                    id="nameFilter"
                                    type="radio"
                                    value="name"
                                    {...methods.register("filterBy")}
                                    checked={filterVal === "name"}
                                    onChange={handleRadioChange}
                                />{" "}
                                <span>Name</span>
                            </label>
                            <label htmlFor="idFilter">
                                <input
                                    id="idFilter"
                                    type="radio"
                                    value="uuid"
                                    {...methods.register("filterBy")}
                                    checked={filterVal === "uuid"}
                                    onChange={handleRadioChange}
                                />{" "}
                                <span>uuid</span>
                            </label>
                        </div>
                    </fieldset>
                    <div className="form__flex-item">
                        <input
                            type="text"
                            defaultValue=""
                            placeholder={`Enter text here`}
                            {...methods.register("searchValue")}
                        />
                    </div>
                    <button type="submit">Submit</button>
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

    function handleRadioChange(ev) {
        setFilterVal(ev.target.value);
    }

    async function onSubmit(data) {
        try {
            const response = await getCustomers(
                data.filterBy,
                data.searchValue,
            );

            if (response) {
                setCustomerList([...response]);
            }
        } catch (err) {
            console.error("GET customers from server failed: ", err);
        }
    }
}
