import { SortOrder } from 'src/common/dto/generic-conditions.dto';
import { PaginationArgs } from 'src/common/dto/pagination-args.dto';

import { User } from '../entities/user.entity';

export class UserPaginator {
  data: User[];
}

export class GetUserDto extends PaginationArgs {
  orderBy?: QueryUserOrderByColumn;
  sortedBy?: SortOrder;
  text?: string;
}

export enum QueryUserOrderByColumn {
  NAME = 'name',
  CREATED_AT = 'created_at',
  UPDATED_AT = 'updated_at',
}
