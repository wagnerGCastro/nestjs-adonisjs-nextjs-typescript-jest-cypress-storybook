import { SetMetadata } from '@nestjs/common';

// export const Role = (...args: string[]) => SetMetadata('role', args);
export const Role = (role: string) => SetMetadata('role', role);
