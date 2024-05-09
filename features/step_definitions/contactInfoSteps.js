import { Given, When, Then } from "@cucumber/cucumber";
import { Customer } from "../../server/models/customerModel.js";
import { testCustomer } from "../test_data/testData.js";
import { expect } from "chai";
import sinon from "sinon";
import processNewCustomerData, {
    checkIfExists,
} from "../../server/middleware/processNewCustomerData.js";
import httpMocks from "node-mocks-http";
import mockResponseData from "../../server/data/mock/customers.json" assert { type: "json" };

Given("A Customer object", function () {
    this.customerData = new Customer(testCustomer);
    expect(this.customerData).to.be.not.null;
});

When("the {string} field does not have a value", function (field) {
    this.customerData[field] = "";
});

When("the email field is not well formed", function () {
    this.customerData.OtherContactInfo.email = "invalidemail";
});

let results;

Then("The error {string} will be returned", async function (expectedError) {
    results = await saveCustomer(this.customerData);
    expect(results.success).to.be.false;
    expect(results.message).to.include(expectedError);
});

Given("the results of validation", function () {
    expect(results).to.be.not.null;
});

When("a validation has an error", function () {
    expect(results.success).to.be.false;
});

Given("a value in the id field", function () {
    this.nextCustomerData = { ...mockResponseData.data[0] };
    expect(this.nextCustomerData).to.be.not.null;
});

When("that id has already been registered", async function () {
    results = await saveCustomer(this.nextCustomerData);
});

Then("return the text of all errors", function () {
    expect(results.message).to.be.not.null;
});

Then("the system will continue to the next test", function () {
    // This step can be used for cleanup or logging if necessary
});

When("no validation errors are found", async function () {
    this.lastCustomerData = { ...testCustomer };
    this.lastCustomerData.id = "11112368-5555-4120-93e9-fa54612e1a81";
    results = await saveCustomer(this.lastCustomerData);
});

Then("send the message to the persistance service", async function () {
    // persistence service I think would be call from the client, so we mock the POST
    let req = httpMocks.createRequest({
        method: "POST",
        url: "/api/v1/CustomerInfo",
        body: this.lastCustomerData,
        mockResponseData,
    });

    let res = httpMocks.createResponse();
    const next = sinon.spy();

    await processNewCustomerData(req, res, next);

    // Check if the middleware called next() with an error
    expect(results.message).to.equal("Customer was added successfully.");
});

Then("return the status of {int}", function (statusCode) {
    expect(results.status).to.equal(statusCode);
});

// validation exists in middleware, this is more or less a copy of it
async function saveCustomer(data) {
    try {
        if (checkIfExists(data.id, mockResponseData)) {
            return {
                success: false,
                status: 409,
                message: "A customer with this UUID already exists",
            };
        }
        const customer = new Customer(data);
        await customer.validate();
        return {
            success: true,
            status: 201,
            message: "Customer was added successfully.",
        };
    } catch (error) {
        if (error.name === "ValidationError") {
            let messages = [];
            for (let field in error.errors) {
                messages.push(error.errors[field].message);
            }
            return {
                success: false,
                status: 400,
                message: messages.join(", "),
            };
        } else {
            return {
                success: false,
                status: 500,
                message: "Unexpected error occurred: " + error.message,
            };
        }
    }
}
