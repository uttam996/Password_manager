"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log(process.env.MONGO_URL);
const password_routes_1 = __importDefault(require("./routes/password.routes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use("/password", (res, req, next) => {
    setTimeout(() => {
        next();
    }, 1000);
}, password_routes_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${process.env.PORT}`);
});
mongoose_1.default.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to MongoDB');
});
//# sourceMappingURL=app.js.map