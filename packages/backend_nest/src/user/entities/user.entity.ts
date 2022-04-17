import { CoreEntity } from 'src/common/entities/core.entity';
// import { Order } from 'src/orders/entities/order.entity';
import { Profile } from './profile.entity';

export class User extends CoreEntity {
  name: string;
  email: string;
  password?: string;
  shop_id?: number;
  profile?: Profile;
  is_active?: boolean = true;
  // orders?: Order[];
}
