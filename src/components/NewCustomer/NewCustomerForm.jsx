import { useForm, FormProvider } from "react-hook-form";
import ContactInfo from "./ContactInfo";
import PersonalInfo from "./PersonalInfo";

export default function NewCustomerForm() {
    const methods = useForm();
    return (
        <FormProvider {...methods}>
            <form
                className="form__container"
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                <div className="form__flex-wrapper">
                    <div className="form__flex-item">
                        <PersonalInfo />
                    </div>
                    <div className="form__flex-item">
                        <ContactInfo />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </FormProvider>
    );

    function onSubmit(data) {
        // ev.preventDefault();
        console.log("Form submitted");
        console.log(data);
    }
}
