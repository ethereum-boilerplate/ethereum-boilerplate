import { FieldValues, FormProviderProps, UseFormReturn } from './types';
export declare const useFormContext: <TFieldValues extends FieldValues>() => UseFormReturn<TFieldValues, object>;
export declare const FormProvider: <TFieldValues extends FieldValues, TContext extends object = object>(props: FormProviderProps<TFieldValues, TContext>) => JSX.Element;
//# sourceMappingURL=useFormContext.d.ts.map