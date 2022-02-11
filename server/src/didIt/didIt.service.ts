import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DidItServiceBase } from "./base/didIt.service.base";

@Injectable()
export class DidItService extends DidItServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
