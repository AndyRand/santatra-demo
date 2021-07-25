import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CustomerResolverBase } from "./base/customer.resolver.base";
import { Customer } from "./base/Customer";
import { CustomerService } from "./customer.service";

@graphql.Resolver(() => Customer)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class CustomerResolver extends CustomerResolverBase {
  constructor(
    protected readonly service: CustomerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
