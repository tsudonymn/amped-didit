import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DidItResolverBase } from "./base/didIt.resolver.base";
import { DidIt } from "./base/DidIt";
import { DidItService } from "./didIt.service";

@graphql.Resolver(() => DidIt)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DidItResolver extends DidItResolverBase {
  constructor(
    protected readonly service: DidItService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
