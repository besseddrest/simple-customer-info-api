import mongoose from "mongoose";
const { Schema } = mongoose;

const messageInfoSchema = new Schema({
    source: { type: String },
});

const phoneSchema = new Schema({
    areaCode: { type: String },
    prefix: { type: String },
    lineNumber: { type: String },
    phoneType: { type: String, enum: [] },
});

const otherContactInfoSchema = new Schema({
    preferredContactMethod: { type: String, enum: ["email", "phone", "post"] },
    phone: { type: phoneSchema },
    alternatePhone: { type: phoneSchema },
    email: {
        type: String,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "The email given must be valid",
        ],
    },
    preferredLanguage: { type: String },
});

const customerSchema = new Schema({
    source: {
        type: String,
        required: [true, "source is required."],
    },
    id: { type: String, required: [true, "uuid is required."] },
    firstName: {
        type: String,
        required: [true, "The first name must not be empty"],
    },
    middleName: { type: String },
    lastName: {
        type: String,
        required: [true, "The last name must not be empty"],
    },
    dateOfBirth: { type: String, required: [true, "dateOfBirth is required."] },
    gender: {
        type: String,
        required: [true, "gender is required."],
        enum: ["Female", "Male", "Unknown"],
    },
    county: { type: String, required: [true, "county is required."] },
    fixedAddress: {
        type: Boolean,
        required: [true, "fixedAddress is required."],
    },
    assistanceWithInsurance: {
        type: Boolean,
        required: [true, "familyPlanningBenefits is required."],
    },
    familyPlanningBenefits: {
        type: Boolean,
        required: [true, "familyPlanningBenefits is required."],
    },
    OtherContactInfo: { type: otherContactInfoSchema },
});

export const Customer = mongoose.model("Customer", customerSchema);
