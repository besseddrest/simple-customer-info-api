import { useFormContext } from "react-hook-form";

export default function PersonalInfo() {
    const { register } = useFormContext();
    return (
        <>
            <div className="form__field">
                <label htmlFor="source">Source</label>
                <input
                    id="source"
                    type="text"
                    {...register("source")}
                    defaultValue="NewCustomerForm"
                />
            </div>
            <div className="form__field">
                <label htmlFor="uuid">ID</label>
                <input
                    id="uuid"
                    type="text"
                    {...register("uuid")}
                    defaultValue="1234567890"
                />
            </div>
            <div className="form__field">
                <label htmlFor="firstName">First Name:</label>
                <input
                    id="firstName"
                    type="text"
                    {...register("firstName")}
                    defaultValue=""
                    placeholder="Enter first name"
                />
            </div>
            <div className="form__field">
                <label htmlFor="middleName">Middle Name:</label>
                <input
                    id="middleName"
                    type="text"
                    {...register("middleName")}
                    defaultValue=""
                    placeholder="Enter middle name"
                />
            </div>
            <div className="form__field">
                <label htmlFor="lastName">Last Name:</label>
                <input
                    id="lastName"
                    type="text"
                    {...register("lastName")}
                    defaultValue=""
                    placeholder="Enter last name"
                />
            </div>

            <div className="form__field">
                <label htmlFor="dateOfBirth">Date of Birth:</label>
                <input
                    id="dateOfBirth"
                    type="date"
                    {...register("dateOfBirth")}
                    defaultValue=""
                    placeholder="YYYY-MM-DD"
                />
            </div>
            <div className="form__field">
                <label htmlFor="gender">Gender:</label>
                <select id="gender" defaultValue="" {...register("gender")}>
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
                    {...register("county")}
                    defaultValue=""
                    placeholder="Enter county"
                />
            </div>
            <div className="form__field">
                <label htmlFor="fixedAddress">Fixed Address:</label>
                <input
                    id="fixedAddress"
                    type="checkbox"
                    {...register("fixedAddress")}
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
                    {...register("assistanceWithInsurance")}
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
                    {...register("familyPlanningBenefits")}
                    defaultValue={false}
                />
            </div>
        </>
    );
}
