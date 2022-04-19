import { SortOrder } from 'src/api/common/dto/generic-conditions.dto';
import { PaginationArgs } from 'src/api/common/dto/pagination-args.dto';

import { UserEntity } from '../user.entity';

export class UserPaginator {
  data: UserEntity[];
}

export class GetUserDto extends PaginationArgs {
  orderBy?: QueryUserOrderByColumn;
  sortedBy?: SortOrder;
  text?: string;
}

export enum QueryUserOrderByColumn {
  NAME = 'fullname',
  CREATED_AT = 'created_at',
  UPDATED_AT = 'updated_at',
}
