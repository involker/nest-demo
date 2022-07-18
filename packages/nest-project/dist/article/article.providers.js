"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleProviders = void 0;
const article_entity_1 = require("./entities/article.entity");
exports.articleProviders = [
    {
        provide: 'ARTICLE_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(article_entity_1.Article),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=article.providers.js.map