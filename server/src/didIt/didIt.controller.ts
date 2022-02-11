import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DidItService } from "./didIt.service";
import { DidItControllerBase } from "./base/didIt.controller.base";

@swagger.ApiTags("did-its")
@common.Controller("did-its")
export class DidItController extends DidItControllerBase {
  constructor(
    protected readonly service: DidItService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
