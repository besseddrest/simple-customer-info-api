const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema = new Schema({
    id: { type: String, required: true },
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    gender: {
        type: String,
        required: true,
        enum: ["Female", "Male", "Unknown"],
    },
    county: { type: String, required: true },
    fixedAddress: { type: Boolean, required: true },
    assistanceWithInsurance: { type: Boolean, required: true },
    familyPlanningBenefits: { type: Boolean, required: true },
    OtherContactInfo: { type: otherContactInfoSchema },
});

const otherContactInfoSchema = new Schema({
    preferredContactMethod: { type: String, enum: ["email", "phone", "post"] },
    phone: { type: phoneSchema },
    alternatePhone: { type: phoneSchema },
    em[ail: { type: String },
    preferredLanguage: { type: String },
});

const phoneSchema = new Schema({
    areaCode: { type: String },
    prefix: { type: String },
    lineNumber: { type: String },
    phoneType: { type: String, enum: [] },
});

module.exports = customerSchema;
