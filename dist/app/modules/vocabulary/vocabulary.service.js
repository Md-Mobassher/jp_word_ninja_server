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
exports.VocabularyServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const vocabulary_model_1 = require("./vocabulary.model");
const vocabulary_constant_1 = require("./vocabulary.constant");
const createVocabulary = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newVocabulary = yield vocabulary_model_1.Vocabulary.create(payload);
    if (!newVocabulary) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to create Vocabulary');
    }
    return newVocabulary;
});
const getAllVocabulary = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const VocabularyQuery = new QueryBuilder_1.default(vocabulary_model_1.Vocabulary.find(), query)
        .search(vocabulary_constant_1.VocabularySearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();
    const result = yield VocabularyQuery.modelQuery;
    const meta = yield VocabularyQuery.countTotal();
    return {
        result,
        meta,
    };
});
const getSingleVocabulary = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield vocabulary_model_1.Vocabulary.findById(id);
    return result;
});
const updateVocabulary = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield vocabulary_model_1.Vocabulary.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteVocabulary = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isVideoExist = yield vocabulary_model_1.Vocabulary.findById(id);
    if (!isVideoExist) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'No Vocabulary found');
    }
    yield vocabulary_model_1.Vocabulary.findByIdAndDelete(id);
    return null;
});
exports.VocabularyServices = {
    createVocabulary,
    getAllVocabulary,
    getSingleVocabulary,
    updateVocabulary,
    deleteVocabulary,
};
