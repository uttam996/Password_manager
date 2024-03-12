"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRYPTO_SECRET = exports.MONGO_URL = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = process.env.PORT || 3000;
exports.MONGO_URL = process.env.NODE_ENV === 'development' ? 'mongodb://localhost:27017/password_manager' : process.env.MONGO_URL;
// connvert to base64 and use as secret
exports.CRYPTO_SECRET = btoa(process.env.CRYPTO_SECRET);
//# sourceMappingURL=constant.js.map