"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_constant_1 = require("../users/user.constant");
const lessons_controller_1 = require("./lessons.controller");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin), lessons_controller_1.LessonsControllers.createLessons);
router.get('/', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin, user_constant_1.USER_ROLE.user), lessons_controller_1.LessonsControllers.getAllLessons);
router.get('/:id', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin, user_constant_1.USER_ROLE.user), lessons_controller_1.LessonsControllers.getSingleLessons);
router.patch('/:id', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin), lessons_controller_1.LessonsControllers.updateLessons);
router.delete('/:id', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin), lessons_controller_1.LessonsControllers.deleteLessons);
exports.LessonsRoutes = router;
