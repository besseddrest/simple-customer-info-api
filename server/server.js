import express from "express";
const app = express();
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import processNewCustomerData from "./middleware/processNewCustomerData.js";
import YAML from "yamljs";
import { Customer } from "./models/customerModel.js";
const PORT = process.env.PORT || 5000;

import mockResponseData from "./data/mock/customers.json" assert { type: "json" };

// [HC] No db requirement, will use hardcoded data
// console.log("MOCK: ", mockResponseData);

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    req.mockResponseData = mockResponseData;
    next();
});

const file = fs.readFileSync("./openapi.yaml", "utf8");
const swaggerDocument = YAML.parse(file);

app.use("/ui", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// [HC] ideally I'd follow a more RESTful naming convention, so `/api/v1/customers`
app.get("/api/v1/CustomerInfo", (req, res) => {
    res.status(200).json(mockResponseData);
});

app.post("/api/v1/CustomerInfo", processNewCustomerData, (req, res) => {
    const newCustomer = new Customer(req.customerData);
    const existingRecords = { ...req.mockResponseData };
    console.log("EXISTING: ", existingRecords.data.length);
    existingRecords.data.push(req.customerData);
    console.log("AFTER: ", existingRecords.data.length);

    // [HC] for the scope of this project, we'll just'
    // newCustomer
    //     .save()
    //     .then((customer) => res.status(201).send(customer))
    //     .catch((err) => {
    //         console.error(err);
    //         res.status(500).send("Internal Server Error");
    //     });
    const data = {
        ...req.body,
        mockResponseData: existingRecords,
    };

    console.log("DATA: ", data);
    res.json({
        message: "Customer was added successfully.",
        receivedData: data,
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
