import { Entity } from '@/base';

export class PlayerEntity extends Entity {
  public _id: string;
  public phone: string;
  public email: string;
  public name: string;
  public ranking: string;
  public rankingPosition: number;
  public image: string;
}
