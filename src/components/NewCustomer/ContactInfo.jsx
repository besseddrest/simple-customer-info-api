import PhoneInfo from "./PhoneInfo";

export default function ContactInfo() {
    return (
        <>
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

            <PhoneInfo priority="primary" />

            <PhoneInfo priority="alternate" />

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
                <label htmlFor="preferredLanguage">Preferred Language:</label>
                <input
                    id="preferredLanguage"
                    type="text"
                    defaultValue=""
                    placeholder="Enter preferred language"
                />
            </div>
        </>
    );
}
