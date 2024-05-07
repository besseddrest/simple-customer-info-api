import { useFormContext } from "react-hook-form";
import PhoneInfo from "./PhoneInfo";

export default function ContactInfo() {
    const { register } = useFormContext();

    return (
        <>
            <div className="form__field">
                <label htmlFor="preferredContactMethod">
                    Preferred Contact Method:
                </label>
                <select
                    id="preferredContactMethod"
                    defaultValue=""
                    {...register("preferredContactMethod")}
                >
                    <option value="">Select Contact Method</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="post">Post</option>
                </select>
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
