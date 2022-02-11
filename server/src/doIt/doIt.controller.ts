import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DoItService } from "./doIt.service";
import { DoItControllerBase } from "./base/doIt.controller.base";

@swagger.ApiTags("do-its")
@common.Controller("do-its")
export class DoItController extends DoItControllerBase {
  constructor(
    protected readonly service: DoItService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
