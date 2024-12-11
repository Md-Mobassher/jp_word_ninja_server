"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_controller_1 = require("./user.controller");
const user_constant_1 = require("./user.constant");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin), user_controller_1.UserControllers.getAllUser);
router.get('/:id', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin), user_controller_1.UserControllers.getSingleUser);
router.patch('/:id', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin), user_controller_1.UserControllers.updateUser);
router.delete('/:id', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin), user_controller_1.UserControllers.deleteUser);
router.post('/change-status/:id', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin), (0, validateRequest_1.default)(user_validation_1.UserValidation.changeStatusValidationSchema), user_controller_1.UserControllers.changeStatus);
exports.userRoutes = router;
