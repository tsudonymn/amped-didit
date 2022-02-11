import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DoItResolverBase } from "./base/doIt.resolver.base";
import { DoIt } from "./base/DoIt";
import { DoItService } from "./doIt.service";

@graphql.Resolver(() => DoIt)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DoItResolver extends DoItResolverBase {
  constructor(
    protected readonly service: DoItService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
