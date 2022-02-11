import { Module } from "@nestjs/common";
import { DoItModuleBase } from "./base/doIt.module.base";
import { DoItService } from "./doIt.service";
import { DoItController } from "./doIt.controller";
import { DoItResolver } from "./doIt.resolver";

@Module({
  imports: [DoItModuleBase],
  controllers: [DoItController],
  providers: [DoItService, DoItResolver],
  exports: [DoItService],
})
export class DoItModule {}
