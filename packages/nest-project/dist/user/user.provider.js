"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.photoProviders = void 0;
const user_entity_1 = require("./entities/user.entity");
exports.photoProviders = [
    {
        provide: 'PHOTO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(user_entity_1.User),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=user.provider.js.map