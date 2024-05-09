import mongoose from "mongoose";
const { Schema } = mongoose;

const messageInfoSchema = new Schema({
    source: {
        type: String,
        required: [true, "Source is required"],
        minlength: 1,
    },
});

const phoneSchema = new Schema({
    areaCode: { type: String },
    prefix: { type: String },
    lineNumber: { type: String },
    phoneType: { type: String, enum: [] },
});

const otherContactInfoSchema = new Schema({
    preferredContactMethod: {
        type: String,
        enum: ["", "email", "phone", "post"],
    },
    phone: { type: phoneSchema },
    alternatePhone: { type: phoneSchema },
    email: {
        type: String,
        validate: {
            validator: function (value) {
                // Using a regular expression that is commonly recommended for validating email addresses.
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(
                    value,
                );
            },
            message: "The email given must be valid",
        },
    },
    preferredLanguage: { type: String },
});

const customerSchema = new Schema({
    messageInformation: {
        type: messageInfoSchema,
    },
    id: { type: String, required: [true, "uuid is required."], minlength: 1 },
    firstName: {
        type: String,
        required: [true, "The first name must not be empty"],
        minlength: 1,
    },
    middleName: { type: String },
    lastName: {
        type: String,
        required: [true, "The last name must not be empty"],
        minlength: 1,
    },
    dateOfBirth: {
        type: String,
        required: [true, "dateOfBirth is required."],
        minlength: 1,
    },
    gender: {
        type: String,
        required: [true, "gender is required."],
        minlength: 1,
        enum: ["Female", "Male", "Unknown"],
    },
    county: {
        type: String,
        required: [true, "county is required."],
        minlength: 1,
    },
    fixedAddress: {
        type: Boolean,
        required: [true, "fixedAddress is required"],
        set: (value) => {
            if (typeof value === "string" && value !== "") {
                return value.toLowerCase() === "true"; // Convert string 'true'/'false' to boolean
            }
            return null;
        },
    },
    assistanceWithInsurance: {
        type: Boolean,
        required: [true, "assistanceWithInsurance is required"],
        set: (value) => {
            if (typeof value === "string" && value !== "") {
                return value.toLowerCase() === "true";
            }
            return null;
        },
    },
    familyPlanningBenefits: {
        type: Boolean,
        required: [true, "familyPlanningBenefits is required"],
        set: (value) => {
            if (typeof value === "string" && value !== "") {
                return value.toLowerCase() === "true";
            }
            return null;
        },
    },
    OtherContactInfo: { type: otherContactInfoSchema },
});

export const Customer = mongoose.model("Customer", customerSchema);
