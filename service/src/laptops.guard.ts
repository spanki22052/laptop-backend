import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './laptops/enums/role.enum';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class LaptopsGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) { }

  canActivate(
    context: ExecutionContext,
  ): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [context.getHandler(), context.getClass()])



    if (!requiredRoles) {
      return true
    }

    return true;
  }
}
