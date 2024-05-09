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

    return (
        <FormProvider {...methods}>
            {errors && errors.message !== "" && (
                <div className="status__box">{errors.message}</div>
            )}
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
                    // We successfully added a customer
                    console.log(response);
                } else {
                    // The form submission did not pass validation
                    setErrors({ ...response });
                }
            }
        } catch (err) {
            console.error("Failed to submit form data: ", err);
        }
    }
}
