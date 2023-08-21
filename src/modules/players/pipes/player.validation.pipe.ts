import {
  ArgumentMetadata,
  PipeTransform,
  BadRequestException,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class PlayerValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;

    if (!metatype || !this.validateMetaType(metatype)) {
      return value;
    }

    if (!value) {
      throw new BadRequestException(`${metadata.data} must be called`);
    }

    return value;
  }

  private validateMetaType(metatype: unknown): boolean {
    const types: (new () => any)[] = [String, Boolean, Number, Array, Object];

    if (typeof metatype === 'function') {
      return !types.some((type) => metatype.prototype instanceof type);
    }

    return false;
  }
}
