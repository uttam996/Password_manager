"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPassword = exports.CreatePassword = exports.GetAllPasswords = void 0;
const password_model_1 = __importDefault(require("../model/password.model"));
const utlits_1 = require("../utlits");
const passwordlog_controller_1 = require("./passwordlog.controller");
const GetAllPasswords = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // await Password.deleteMany({});
        // let passwordss = new Array(50).fill({
        //      copyCount: Math.floor(Math.random() * 100) + 1,
        //       userName: "test",
        //       webSiteName: "test",
        //       Url: "test",
        //       password: Encrypt("test"),
        // })
        // await Password.insertMany(passwordss)
        const { search, page, limit, skip } = (0, utlits_1.paginationKey)(req);
        const searchQuery = {
            $or: [
                { userName: { $regex: search, $options: "i" } },
                { webSiteName: { $regex: search, $options: "i" } },
                { Url: { $regex: search, $options: "i" } },
            ],
        };
        const passwords = yield password_model_1.default.find(searchQuery).sort({ copyCount: -1 }).skip(skip).limit(limit);
        return res.status(200).json(passwords);
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
});
exports.GetAllPasswords = GetAllPasswords;
const CreatePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.body.password = (0, utlits_1.Encrypt)(req.body.password);
        const password = yield password_model_1.default.create(req.body);
        yield (0, passwordlog_controller_1.CreatePasswordLog)(res, {
            new_data: password,
            old_data: "",
            _id: password._id,
        });
        return res.status(201).json(password);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.CreatePassword = CreatePassword;
const GetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const password = yield password_model_1.default.findById(id);
        password.copyCount += 1;
        password.save();
        if (!password) {
            return res.status(404).json({ message: "Password not found" });
        }
        return res.status(200).json((0, utlits_1.Decrypt)(password.password));
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.GetPassword = GetPassword;
//# sourceMappingURL=password.controller.js.map