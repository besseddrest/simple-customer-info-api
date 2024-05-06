const express = require("express");
const app = express();
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const YAML = require("yamljs");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log("Incoming request:", req.method, req.path);
    next();
});

console.log("PORT: ", PORT);

const file = fs.readFileSync("./openapi.yaml", "utf8");
const swaggerDocument = YAML.parse(file);

console.log("SD: ", swaggerDocument);

app.use("/ui", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/api/1/CustomerInfo", (req, res) => {
    res.json({ message: "GET SUCCESS" });
});

app.post("/api/1/CustomerInfo", (req, res) => {
    const data = req.body;
    res.json({ message: "POST SUCCESS", receivedData: data });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
