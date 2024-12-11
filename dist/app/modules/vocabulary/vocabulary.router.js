"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_constant_1 = require("../users/user.constant");
const vocabulary_controller_1 = require("./vocabulary.controller");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin), vocabulary_controller_1.TutorialControllers.createTutorial);
router.get('/', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin, user_constant_1.USER_ROLE.user), vocabulary_controller_1.TutorialControllers.getAllTutorial);
router.get('/:id', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin, user_constant_1.USER_ROLE.user), vocabulary_controller_1.TutorialControllers.getSingleTutorial);
router.patch('/:id', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin), vocabulary_controller_1.TutorialControllers.updateTutorial);
router.delete('/:id', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin), vocabulary_controller_1.TutorialControllers.deleteTutorial);
exports.TutorialRoutes = router;
