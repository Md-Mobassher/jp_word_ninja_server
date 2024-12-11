"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_router_1 = require("../modules/users/user.router");
const auth_route_1 = require("../modules/auth/auth.route");
const lessons_router_1 = require("../modules/lesson/lessons.router");
const tutorial_router_1 = require("../modules/tutorial/tutorial.router");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/users',
        route: user_router_1.userRoutes,
    },
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/lessons',
        route: lessons_router_1.LessonsRoutes,
    },
    {
        path: '/tutorials',
        route: tutorial_router_1.TutorialRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
