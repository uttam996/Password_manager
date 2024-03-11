"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const password_controller_1 = require("../controller/password.controller");
router.get('/', password_controller_1.GetAllPasswords);
router.post('/', password_controller_1.CreatePassword);
router.get('/:id', password_controller_1.GetPassword);
exports.default = router;
//# sourceMappingURL=password.routes.js.map