import { useEffect } from "react";

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
            <form className="form__container" onSubmit={handleSubmit}>
                <div className="form__flex-wrapper">
                    <div className="form__flex-item">
                        <div className="form__field">
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                id="firstName"
                                type="text"
                                defaultValue=""
                                placeholder="Enter first name"
                            />
                        </div>
                        <div className="form__field">
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                id="lastName"
                                type="text"
                                defaultValue=""
                                placeholder="Enter last name"
                            />
                        </div>
                        <div className="form__field">
                            <label htmlFor="email">Email:</label>
                            <input
                                id="email"
                                type="email"
                                defaultValue=""
                                placeholder="example@example.com"
                            />
                        </div>
                        <div className="form__field">
                            <label htmlFor="dateOfBirth">Date of Birth:</label>
                            <input
                                id="dateOfBirth"
                                type="date"
                                defaultValue=""
                                placeholder="YYYY-MM-DD"
                            />
                        </div>
                        <div className="form__field">
                            <label htmlFor="gender">Gender:</label>
                            <select id="gender" defaultValue="">
                                <option value="">Select Gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Unknown">Unknown</option>
                            </select>
                        </div>
                        <div className="form__field">
                            <label htmlFor="county">County:</label>
                            <input
                                id="county"
                                type="text"
                                defaultValue=""
                                placeholder="Enter county"
                            />
                        </div>
                        <div className="form__field">
                            <label htmlFor="fixedAddress">Fixed Address:</label>
                            <input
                                id="fixedAddress"
                                type="checkbox"
                                defaultValue={false}
                            />
                        </div>
                        <div className="form__field">
                            <label htmlFor="assistanceWithInsurance">
                                Assistance with Insurance:
                            </label>
                            <input
                                id="assistanceWithInsurance"
                                type="checkbox"
                                defaultValue={false}
                            />
                        </div>
                        <div className="form__field">
                            <label htmlFor="familyPlanningBenefits">
                                Family Planning Benefits:
                            </label>
                            <input
                                id="familyPlanningBenefits"
                                type="checkbox"
                                defaultValue={false}
                            />
                        </div>
                    </div>
                    <div className="form__flex-item">
                        <div className="form__field">
                            <label htmlFor="preferredContactMethod">
                                Preferred Contact Method:
                            </label>
                            <select id="preferredContactMethod" defaultValue="">
                                <option value="">Select Contact Method</option>
                                <option value="email">Email</option>
                                <option value="phone">Phone</option>
                                <option value="post">Post</option>
                            </select>
                        </div>
                        <div className="form__field">
                            <label htmlFor="phoneAreaCode">
                                Phone Area Code:
                            </label>
                            <input
                                id="phoneAreaCode"
                                type="number"
                                defaultValue=""
                                placeholder="123"
                            />
                        </div>
                        <div className="form__field">
                            <label htmlFor="phonePreFix">Phone Prefix:</label>
                            <input
                                id="phonePreFix"
                                type="number"
                                defaultValue=""
                                placeholder="456"
                            />
                        </div>
                        <div className="form__field">
                            <label htmlFor="phoneLineNumber">
                                Phone Line Number:
                            </label>
                            <input
                                id="phoneLineNumber"
                                type="number"
                                defaultValue=""
                                placeholder="7890"
                            />
                        </div>
                        <div className="form__field">
                            <label htmlFor="phoneType">Phone Type:</label>
                            <select id="phoneType" defaultValue="">
                                <option value="">Select Phone Type</option>
                                <option value="Business">Business</option>
                                <option value="Fax">Fax</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Other">Other</option>
                                <option value="Pager">Pager</option>
                                <option value="Personal">Personal</option>
                            </select>
                        </div>
                        <div className="form__field">
                            <label htmlFor="email">Alternate Email:</label>
                            <input
                                id="alternateEmail"
                                type="email"
                                defaultValue=""
                                placeholder="alternate@example.com"
                            />
                        </div>
                        <div className="form__field">
                            <label htmlFor="preferredLanguage">
                                Preferred Language:
                            </label>
                            <input
                                id="preferredLanguage"
                                type="text"
                                defaultValue=""
                                placeholder="Enter preferred language"
                            />
                        </div>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );

    function handleSubmit(ev) {
        ev.preventDefault();
        console.log("Form submitted");
    }
}
