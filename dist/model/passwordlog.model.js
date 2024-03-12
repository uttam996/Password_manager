"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PasswordLogSchema = new mongoose_1.default.Schema({
    model: {
        type: String,
        required: true,
        enum: ["CREATE", "UPDATE", "DELETE",]
    },
    document_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "Password"
    },
    // json object
    old_data: {
        type: String,
        required: false,
    },
    new_data: {
        type: String,
        required: false,
    },
}, {
    timestamps: true
});
const PasswordLog = mongoose_1.default.model("PasswordLog", PasswordLogSchema);
exports.default = PasswordLog;
//# sourceMappingURL=passwordlog.model.js.map