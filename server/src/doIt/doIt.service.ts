import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DoItServiceBase } from "./base/doIt.service.base";

@Injectable()
export class DoItService extends DoItServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
