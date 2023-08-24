import { Entity } from '@/base';
import { PlayerEntity } from './players.entity';

export class CategoryEntity extends Entity {
  public readonly category: string;
  public description: string;
  public events: Event[];
  players: PlayerEntity[];
}

export interface Event {
  name: string;
  operation: string;
  value: number;
}
