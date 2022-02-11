import { Module } from "@nestjs/common";
import { DidItModuleBase } from "./base/didIt.module.base";
import { DidItService } from "./didIt.service";
import { DidItController } from "./didIt.controller";
import { DidItResolver } from "./didIt.resolver";

@Module({
  imports: [DidItModuleBase],
  controllers: [DidItController],
  providers: [DidItService, DidItResolver],
  exports: [DidItService],
})
export class DidItModule {}
