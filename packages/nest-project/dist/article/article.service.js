"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const article_entity_1 = require("./entities/article.entity");
let ArticleService = class ArticleService {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    add(createArticleDto, user) {
        const entity = Object.assign(new article_entity_1.Article(), Object.assign(Object.assign({}, createArticleDto), { userId: user.id }));
        return this.articleRepository.insert(entity);
    }
    findAll() {
        return `This action returns all article`;
    }
    findOne(id) {
        return `This action returns a #${id} article`;
    }
    update(id, updateArticleDto) {
        return `This action updates a #${id} article`;
    }
    remove(id) {
        return `This action removes a #${id} article`;
    }
};
ArticleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ARTICLE_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map