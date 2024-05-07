import { useFormContext } from "react-hook-form";

export default function PersonalInfo(props) {
    const { register } = useFormContext();
    const { errors } = props;
    return (
        <>
            <div className="form__field form__field--hidden">
                <label htmlFor="source">Source</label>
                <input
                    id="source"
                    type="text"
                    {...register("source")}
                    defaultValue="NewCustomerForm"
                />
                <div className="form__field-error">
                    {errors && errors.source ? errors.source : ""}
                </div>
            </div>
            <div className="form__field form__field--hidden">
                <label htmlFor="uuid">ID</label>
                <input
                    id="uuid"
                    type="text"
                    {...register("uuid")}
                    defaultValue="1234567890"
                />
                <div className="form__field-error">
                    {errors && errors.id ? errors.id : ""}
                </div>
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
                <div className="form__field-error">
                    {errors && errors.firstName ? errors.firstName : ""}
                </div>
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
                <div className="form__field-error">
                    {errors && errors.lastName ? errors.lastName : ""}
                </div>
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
                <div className="form__field-error">
                    {errors && errors.dateOfBirth ? errors.dateOfBirth : ""}
                </div>
            </div>
            <div className="form__field">
                <label htmlFor="gender">Gender:</label>
                <select id="gender" defaultValue="" {...register("gender")}>
                    <option value="">Select Gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Unknown">Unknown</option>
                </select>
                <div className="form__field-error">
                    {errors && errors.gender ? errors.gender : ""}
                </div>
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
                <div className="form__field-error">
                    {errors && errors.county ? errors.county : ""}
                </div>
            </div>
            <div className="form__field">
                <label htmlFor="fixedAddress">Fixed Address:</label>
                <select id="fixedAddress" {...register("fixedAddress")}>
                    <option value="">Select</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <div className="form__field-error">
                    {errors && errors.fixedAddress ? errors.fixedAddress : ""}
                </div>
            </div>
            <div className="form__field">
                <label htmlFor="assistanceWithInsurance">
                    Assistance with Insurance:
                </label>
                <select
                    id="assistanceWithInsurance"
                    {...register("assistanceWithInsurance")}
                >
                    <option value="">Select</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <div className="form__field-error">
                    {errors && errors.assistanceWithInsurance
                        ? errors.assistanceWithInsurance
                        : ""}
                </div>
            </div>
            <div className="form__field">
                <label htmlFor="familyPlanningBenefits">
                    Family Planning Benefits:
                </label>
                <select
                    id="familyPlanningBenefits"
                    {...register("familyPlanningBenefits")}
                >
                    <option value="">Select</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <div className="form__field-error">
                    {errors && errors.familyPlanningBenefits
                        ? errors.familyPlanningBenefits
                        : ""}
                </div>
            </div>
        </>
    );
}
