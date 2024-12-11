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
exports.LessonsServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const lessons_model_1 = require("./lessons.model");
const lessons_constant_1 = require("./lessons.constant");
const createLessons = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newLessons = yield lessons_model_1.Lessons.create(payload);
    if (!newLessons) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to create Lessons');
    }
    return newLessons;
});
const getAllLessons = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const LessonsQuery = new QueryBuilder_1.default(lessons_model_1.Lessons.find(), query)
        .search(lessons_constant_1.LessonsSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();
    const result = yield LessonsQuery.modelQuery;
    const meta = yield LessonsQuery.countTotal();
    return {
        result,
        meta,
    };
});
const getSingleLessons = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lessons_model_1.Lessons.findById(id);
    return result;
});
const updateLessons = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lessons_model_1.Lessons.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteLessons = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isVideoExist = yield lessons_model_1.Lessons.findById(id);
    if (!isVideoExist) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'No Lessons found');
    }
    yield lessons_model_1.Lessons.findByIdAndDelete(id);
    return null;
});
exports.LessonsServices = {
    createLessons,
    getAllLessons,
    getSingleLessons,
    updateLessons,
    deleteLessons,
};
