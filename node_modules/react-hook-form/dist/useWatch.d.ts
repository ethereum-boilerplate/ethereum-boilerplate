import { Control, DeepPartialSkipArrayKey, FieldPath, FieldPathValue, FieldPathValues, FieldValues, UnpackNestedValue } from './types';
export declare function useWatch<TFieldValues extends FieldValues = FieldValues>(props: {
    defaultValue?: UnpackNestedValue<DeepPartialSkipArrayKey<TFieldValues>>;
    control?: Control<TFieldValues>;
    disabled?: boolean;
    exact?: boolean;
}): UnpackNestedValue<DeepPartialSkipArrayKey<TFieldValues>>;
export declare function useWatch<TFieldValues extends FieldValues = FieldValues, TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(props: {
    name: TFieldName;
    defaultValue?: FieldPathValue<TFieldValues, TFieldName>;
    control?: Control<TFieldValues>;
    disabled?: boolean;
    exact?: boolean;
}): FieldPathValue<TFieldValues, TFieldName>;
export declare function useWatch<TFieldValues extends FieldValues = FieldValues, TFieldNames extends readonly FieldPath<TFieldValues>[] = readonly FieldPath<TFieldValues>[]>(props: {
    name: readonly [...TFieldNames];
    defaultValue?: UnpackNestedValue<DeepPartialSkipArrayKey<TFieldValues>>;
    control?: Control<TFieldValues>;
    disabled?: boolean;
    exact?: boolean;
}): FieldPathValues<TFieldValues, TFieldNames>;
export declare function useWatch<TFieldValues extends FieldValues = FieldValues, TFieldNames extends FieldPath<TFieldValues>[] = FieldPath<TFieldValues>[]>(): FieldPathValues<TFieldValues, TFieldNames>;
//# sourceMappingURL=useWatch.d.ts.map