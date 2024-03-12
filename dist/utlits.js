"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationKey = exports.Decrypt = exports.Encrypt = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const Encrypt = (data) => {
    return crypto_js_1.default.AES.encrypt(data, process.env.CRYPTO_SECRET).toString();
};
exports.Encrypt = Encrypt;
const Decrypt = (data) => {
    const bytes = crypto_js_1.default.AES.decrypt(data, process.env.CRYPTO_SECRET);
    return bytes.toString(crypto_js_1.default.enc.Utf8);
};
exports.Decrypt = Decrypt;
const paginationKey = (req) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const search = req.query.search || "";
    return { page, limit, skip, search };
};
exports.paginationKey = paginationKey;
//# sourceMappingURL=utlits.js.map