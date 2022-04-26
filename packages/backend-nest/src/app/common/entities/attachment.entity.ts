import { CoreEntity } from 'src/app/common/entities/core.entity';

export class Attachment extends CoreEntity {
  thumbnail?: string;
  original?: string;
}
