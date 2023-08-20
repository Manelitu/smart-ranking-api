export interface UseCase<TModel> {
  execute(...args: any[] | any): TModel | TModel[];
}
