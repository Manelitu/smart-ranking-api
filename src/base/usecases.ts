export interface UseCase<TModel> {
  execute(...args: any[] | any): Promise<TModel | TModel[]>;
}
