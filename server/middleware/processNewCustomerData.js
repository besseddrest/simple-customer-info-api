import { Customer } from "../models/customerModel.js";

export default function processNewCustomerData(req, res, next) {
    // [HC] we can leverage Mongoose validation capabilities here
    const transformedData = transformData(req.body);
    const newCustomer = new Customer(transformedData);
    const validationError = newCustomer.validateSync();

    if (validationError) {
        const errors = Object.values(validationError.errors).reduce(
            (acc, error) => {
                acc[error.path] = error.message;
                return acc;
            },
            {},
        );

        return res.status(400).json({ message: "Validation failed", errors });
    }

    req.customerData = transformedData;
    next();
}

function transformData(formData) {
    console.log("FORMDATA: ", formData);
    return {
        MessageInformation: {
            source: formData.source,
        },
        id: formData.uuid, // TODO: generate this on form load, right now hard coded
        firstName: formData.firstName,
        middleName: formData.middleName,
        lastName: formData.lastName,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        county: formData.county,
        fixedAddress: formData.fixedAddress,
        assistanceWithInsurance: formData.assistanceWithInsurance,
        familyPlanningBenefits: formData.familyPlanningBenefits,
        OtherContactInfo: {
            preferredContactMethod: formData.preferredContactMethod,
            email: formData.email,
            preferredLanguage: formData.preferredLanguage,
            phone: {
                areaCode: formData.primaryAreaCode,
                prefix: formData.primaryPreFix,
                lineNumber: formData.primaryLineNumber,
                phoneType: formData.primaryType,
            },
            alternatePhone: {
                areaCode: formData.alternateAreaCode,
                prefix: formData.alternatePreFix,
                lineNumber: formData.alternateLineNumber,
                phoneType: formData.alternateType,
            },
        },
    };
}
