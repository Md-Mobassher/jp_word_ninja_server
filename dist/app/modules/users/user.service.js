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
exports.UserServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const user_constant_1 = require("./user.constant");
const user_model_1 = require("./user.model");
const getAllUser = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const UserQuery = new QueryBuilder_1.default(user_model_1.User.find(), query)
        .search(user_constant_1.UserSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();
    const result = yield UserQuery.modelQuery;
    const meta = yield UserQuery.countTotal();
    return {
        result,
        meta,
    };
});
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findById(id);
    return result;
});
const updateUser = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isVideoExist = yield user_model_1.User.findById(id);
    if (!isVideoExist) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'No User found');
    }
    yield user_model_1.User.findByIdAndDelete(id);
    return null;
});
const changeStatus = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return result;
});
exports.UserServices = {
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
    changeStatus,
};
