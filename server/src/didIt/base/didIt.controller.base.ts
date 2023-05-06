/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DidItService } from "../didIt.service";
import { DidItCreateInput } from "./DidItCreateInput";
import { DidItWhereInput } from "./DidItWhereInput";
import { DidItWhereUniqueInput } from "./DidItWhereUniqueInput";
import { DidItFindManyArgs } from "./DidItFindManyArgs";
import { DidItUpdateInput } from "./DidItUpdateInput";
import { DidIt } from "./DidIt";
@swagger.ApiBearerAuth()
export class DidItControllerBase {
  constructor(
    protected readonly service: DidItService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "DidIt",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: DidIt })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: DidItCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<DidIt> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "DidIt",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"DidIt"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        doit: data.doit
          ? {
              connect: data.doit,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        doit: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "DidIt",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [DidIt] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(DidItFindManyArgs)
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<DidIt[]> {
    const args = plainToClass(DidItFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "DidIt",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,

        doit: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "DidIt",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: DidIt })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: DidItWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<DidIt | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "DidIt",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,

        doit: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "DidIt",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: DidIt })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: DidItWhereUniqueInput,
    @common.Body()
    data: DidItUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<DidIt | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "DidIt",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"DidIt"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          doit: data.doit
            ? {
                connect: data.doit,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          doit: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "DidIt",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: DidIt })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: DidItWhereUniqueInput
  ): Promise<DidIt | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,

          doit: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}