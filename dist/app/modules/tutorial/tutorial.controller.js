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
exports.TutorialControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const tutorial_service_1 = require("./tutorial.service");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const createTutorial = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tutorial_service_1.TutorialServices.createTutorial(req.body);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'No data found');
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Tutorial is created succesfully',
        data: result,
    });
}));
const getAllTutorial = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tutorial_service_1.TutorialServices.getAllTutorial(req.query);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'No data found');
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Tutorial are retrived succesfully.',
        data: result.result,
        meta: result.meta,
    });
}));
const getSingleTutorial = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield tutorial_service_1.TutorialServices.getSingleTutorial(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'No data found');
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Tutorial is retrived succesfully.',
        data: result,
    });
}));
const updateTutorial = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield tutorial_service_1.TutorialServices.updateTutorial(id, req.body);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'No data found');
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Tutorial is updated succesfully.',
        data: result,
    });
}));
const deleteTutorial = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield tutorial_service_1.TutorialServices.deleteTutorial(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Tutorial is deleted succesfully.',
        data: result,
    });
}));
exports.TutorialControllers = {
    createTutorial,
    getAllTutorial,
    getSingleTutorial,
    updateTutorial,
    deleteTutorial,
};
