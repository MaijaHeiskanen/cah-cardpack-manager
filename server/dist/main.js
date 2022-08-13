"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('CAH Cardpack Manager')
        .setDescription('CAH Cardpack Manager to manage cardpacks to be used in CAH.')
        .setVersion('1.0')
        .setBasePath('/')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config, {
        ignoreGlobalPrefix: true,
    });
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map