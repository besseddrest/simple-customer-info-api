import express from "express";
const app = express();
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import processNewCustomerData from "./middleware/processNewCustomerData.js";
import YAML from "yamljs";
import { Customer } from "./models/customerModel.js";
const PORT = process.env.PORT || 5000;

// [HC] No db requirement, will use hardcoded data
// `assert` should be valid, though eslint may flag it
import mockResponseData from "./data/mock/customers.json" assert { type: "json" };
import { filterCustomers } from "./utils/utils.js";

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
    let list = [...mockResponseData.data];

    if (req.query) {
        list = filterCustomers(req.query.filter, req.query.value, list);
    }

    res.status(200).json(list);
});

app.post("/api/v1/CustomerInfo", processNewCustomerData, (req, res) => {
    // const newCustomer = new Customer(req.customerData);
    const existingRecords = [...req.mockResponseData.data];
    existingRecords.push(req.customerData);

    const data = {
        ...req.body,
        mockResponseData: existingRecords,
    };

    mockResponseData.data = existingRecords;

    res.json({
        message: "Customer was added successfully.",
        receivedData: data,
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
