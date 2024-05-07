import { useForm, FormProvider } from "react-hook-form";
import ContactInfo from "./ContactInfo";
import PersonalInfo from "./PersonalInfo";
import { addCustomer } from "../../services/customerService";

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

    async function onSubmit(data) {
        try {
            const response = await addCustomer(data);

            if (response) {
                console.log(response);
            }
            // if (response.ok) {
            //     console.log("Successfully added customer");
            // }
        } catch (err) {
            console.error("Failed to submit form data: ", err);
        }
    }
}
