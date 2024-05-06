import { useFormContext } from "react-hook-form";

export default function PhoneInfo({ priority }) {
    const { register } = useFormContext();
    return (
        <div className={`phone__wrapper phone__wrapper--${priority}`}>
            <div className="form__field">
                <label htmlFor={`${priority}AreaCode`}>Area Code:</label>
                <input
                    id={`${priority}AreaCode`}
                    type="number"
                    {...register(`${priority}AreaCode`)}
                    defaultValue=""
                    placeholder="123"
                />
            </div>
            <div className="form__field">
                <label htmlFor={`${priority}PreFix`}>Prefix:</label>
                <input
                    id={`${priority}PreFix`}
                    type="number"
                    {...register(`${priority}PreFix`)}
                    defaultValue=""
                    placeholder="456"
                />
            </div>
            <div className="form__field">
                <label htmlFor={`${priority}LineNumber`}>Line Number:</label>
                <input
                    id={`${priority}LineNumber`}
                    type="number"
                    {...register(`${priority}LineNumber`)}
                    defaultValue=""
                    placeholder="7890"
                />
            </div>
            <div className="form__field">
                <label htmlFor={`${priority}Type`}>Type:</label>
                <select
                    id={`${priority}Type`}
                    defaultValue=""
                    {...register(`${priority}Type`)}
                >
                    <option value="">Select Phone Type</option>
                    <option value="Business">Business</option>
                    <option value="Fax">Fax</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Other">Other</option>
                    <option value="Pager">Pager</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>
        </div>
    );
}
