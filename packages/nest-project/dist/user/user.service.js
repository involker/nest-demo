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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    add(user) {
        const entity = Object.assign(new user_entity_1.User(), user);
        return this.userRepository.insert(entity);
    }
    query(user, page) {
        return this.userRepository.findAndCount({
            where: {
                account: user.account || null,
                nickName: user.nickName || null
            },
            skip: (page.size) * (page.current - 1),
            take: page.size,
            order: {
                updateTime: "desc"
            }
        });
    }
    update(user) {
        const entity = Object.assign(new user_entity_1.User(), Object.assign(Object.assign({}, user), { updateTime: new Date() }));
        return this.userRepository.save(entity);
    }
    del(user) {
        return this.userRepository.delete(user);
    }
    detail(id) {
        return this.userRepository.findOne({
            where: {
                id,
            }
        });
    }
    login(user) {
        return this.userRepository.findOne({
            where: {
                account: user.account,
                password: user.password
            }
        });
    }
    async findOne(account) {
        return this.userRepository.findOne({
            where: {
                account
            }
        });
    }
    async findById(id) {
        return this.userRepository.findOne({
            where: {
                id
            }
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map