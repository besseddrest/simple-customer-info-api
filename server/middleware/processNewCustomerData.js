import { Customer } from "../models/customerModel.js";

export default function processNewCustomerData(req, res, next) {
    if (checkIfExists(req.body.id, req.mockResponseData)) {
        return res.status(409).json({
            message: "Validation failed",
            errors: [{ id: "A customer with this UUID already exists" }],
        });
    }

    // HC: we can leverage Mongoose validation here
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

        return res.status(400).json({
            message: "Validation failed, please address errors below.",
            errors,
        });
    }

    req.customerData = transformedData;
    next();
}

export function checkIfExists(uuid, customerList) {
    return customerList.data.find((record) => record.id === uuid);
}

// Adjust data to resemble schema, so we can compare against model
export function transformData(formData) {
    return {
        messageInformation: {
            source: formData.source,
        },
        id: formData.id,
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
