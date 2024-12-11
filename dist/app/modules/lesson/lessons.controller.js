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
exports.LessonsControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const lessons_service_1 = require("./lessons.service");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const createLessons = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lessons_service_1.LessonsServices.createLessons(req.body);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'No data found');
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Lessons is created succesfully',
        data: result,
    });
}));
const getAllLessons = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lessons_service_1.LessonsServices.getAllLessons(req.query);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'No data found');
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Lessons are retrived succesfully.',
        data: result.result,
        meta: result.meta,
    });
}));
const getSingleLessons = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield lessons_service_1.LessonsServices.getSingleLessons(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'No data found');
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Lessons is retrived succesfully.',
        data: result,
    });
}));
const updateLessons = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield lessons_service_1.LessonsServices.updateLessons(id, req.body);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'No data found');
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Lessons is updated succesfully.',
        data: result,
    });
}));
const deleteLessons = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield lessons_service_1.LessonsServices.deleteLessons(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Lessons is deleted succesfully.',
        data: result,
    });
}));
exports.LessonsControllers = {
    createLessons,
    getAllLessons,
    getSingleLessons,
    updateLessons,
    deleteLessons,
};
