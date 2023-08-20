export abstract class Mapper<I, O> {
  abstract mapFrom(param: I): any;

  abstract mapTo(param: O): any;
}
