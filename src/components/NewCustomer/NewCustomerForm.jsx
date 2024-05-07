import { useForm, FormProvider } from "react-hook-form";
import ContactInfo from "./ContactInfo";
import PersonalInfo from "./PersonalInfo";
import { addCustomer } from "../../services/customerService";
import { useState } from "react";

export default function NewCustomerForm() {
    const [errors, setErrors] = useState({
        message: "",
        errors: [],
    });
    const methods = useForm();
    console.log("ERRORS: ", errors);
    return (
        <FormProvider {...methods}>
            <form
                className="form__container"
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                <div className="form__flex-wrapper">
                    <div className="form__flex-item">
                        <PersonalInfo errors={errors.errors} />
                    </div>
                    <div className="form__flex-item">
                        <ContactInfo errors={errors.errors} />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </FormProvider>
    );

    async function onSubmit(data) {
        try {
            const response = await addCustomer(data);

            if (response) {
                if (response.ok) {
                    console.log(
                        "we have a response, but is it failed validation?",
                    );
                    console.log(response);
                } else {
                    setErrors({ ...response });
                }
            }
        } catch (err) {
            console.log(err);
            console.log(
                "How do i know this was handled properly, if not by text color?",
            );
            console.error("Failed to submit form data: ", err);
        }
    }
}
