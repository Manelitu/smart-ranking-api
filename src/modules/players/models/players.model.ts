import { UUID } from 'crypto';

export interface PlayerModel {
  readonly _id: UUID;
  phone: string;
  email: string;
  name: string;
  ranking: string;
  rankingPosition: number;
  image: string;
}
