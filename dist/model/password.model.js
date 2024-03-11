"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const passwordSchema = new Schema({
    password: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    Url: {
        type: String,
        required: true,
    },
    webSiteName: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
const Password = mongoose_1.default.model("Password", passwordSchema);
exports.default = Password;
//# sourceMappingURL=password.model.js.map