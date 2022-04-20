import { CoreEntity } from 'src/api/common/entities/core.entity';

export class Attachment extends CoreEntity {
  thumbnail?: string;
  original?: string;
}
