"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const transform_interceptor_1 = require("./interceptor/transform.interceptor");
const http_execption_filter_1 = require("./filter/http-execption.filter");
const serveStatic = require("serve-static");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use('/public', serveStatic((0, path_1.join)(__dirname, '../public'), {
        maxAge: '1d',
        extensions: ['jpg', 'jpeg', 'png', 'gif'],
    }));
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    app.useGlobalFilters(new http_execption_filter_1.HttpExecptionFilter());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map