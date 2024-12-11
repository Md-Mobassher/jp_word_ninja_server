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
exports.VocabularyControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const vocabulary_service_1 = require("./vocabulary.service");
const createVocabulary = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield vocabulary_service_1.VocabularyServices.createVocabulary(req.body);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'No data found');
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Vocabulary is created succesfully',
        data: result,
    });
}));
const getAllVocabulary = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield vocabulary_service_1.VocabularyServices.getAllVocabulary(req.query);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'No data found');
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Vocabulary are retrived succesfully.',
        data: result.result,
        meta: result.meta,
    });
}));
const getSingleVocabulary = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield vocabulary_service_1.VocabularyServices.getSingleVocabulary(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'No data found');
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Vocabulary is retrived succesfully.',
        data: result,
    });
}));
const updateVocabulary = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield vocabulary_service_1.VocabularyServices.updateVocabulary(id, req.body);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'No data found');
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Vocabulary is updated succesfully.',
        data: result,
    });
}));
const deleteVocabulary = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield vocabulary_service_1.VocabularyServices.deleteVocabulary(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Vocabulary is deleted succesfully.',
        data: result,
    });
}));
exports.VocabularyControllers = {
    createVocabulary,
    getAllVocabulary,
    getSingleVocabulary,
    updateVocabulary,
    deleteVocabulary,
};
