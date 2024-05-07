import express from "express";
const app = express();
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import processNewCustomerData from "./middleware/processNewCustomerData.js";
import YAML from "yamljs";
import { Customer } from "./models/customerModel.js";
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use((req, res, next) => {
//     console.log("Incoming request:", req.method, req.path);
//     next();
// });

console.log("PORT: ", PORT);

const file = fs.readFileSync("./openapi.yaml", "utf8");
const swaggerDocument = YAML.parse(file);

app.use("/ui", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// [HC] ideally I'd follow a more RESTful naming convention, so `/api/v1/customers`
app.get("/api/v1/CustomerInfo", (req, res) => {
    res.json({ message: "GET SUCCESS" });
});

app.post("/api/v1/CustomerInfo", processNewCustomerData, (req, res) => {
    console.log("ae yo, we here");
    const newCustomer = new Customer(req.customerData);
    newCustomer
        .save()
        .then((customer) => res.status(201).send(customer))
        .catch((err) => {
            console.error(err);
            res.status(500).send("Internal Server Error");
        });
    const data = req.body;
    res.json({ message: "POST SUCCESS", receivedData: data });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
