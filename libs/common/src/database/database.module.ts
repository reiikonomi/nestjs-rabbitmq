import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forRootAsync({
            useFactory: (configServcie: ConfigService) => ({
                uri: configServcie.get<string>('MONGODB_URI')
            }),
            inject: [ConfigService]
        })
    ]
})
export class DatabaseModule { }