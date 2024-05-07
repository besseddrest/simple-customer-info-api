import { useFormContext } from "react-hook-form";
import PhoneInfo from "./PhoneInfo";

export default function ContactInfo(props) {
    const { register } = useFormContext();
    const { errors } = props;

    return (
        <>
            <div className="form__field">
                <label htmlFor="preferredContactMethod">
                    Preferred Contact Method:
                </label>
                <select
                    id="preferredContactMethod"
                    {...register("preferredContactMethod")}
                >
                    <option value="">Select Contact Method</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="post">Post</option>
                </select>
                <div className="form__field-error">
                    {errors && errors.preferredContactMethod
                        ? errors.preferredContactMethod
                        : ""}
                </div>
            </div>

            <PhoneInfo priority="primary" />

            <PhoneInfo priority="alternate" />

            <div className="form__field">
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    {...register("email")}
                    defaultValue=""
                    placeholder="example@example.com"
                />
                <div className="form__field-error">
                    {errors && errors.email ? errors.email : ""}
                </div>
            </div>
            <div className="form__field">
                <label htmlFor="preferredLanguage">Preferred Language:</label>
                <input
                    id="preferredLanguage"
                    type="text"
                    {...register("preferredLanguage")}
                    defaultValue=""
                    placeholder="Enter preferred language"
                />
            </div>
        </>
    );
}
