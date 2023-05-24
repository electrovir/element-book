export type NestedType<SubType> = {[prop: PropertyKey]: SubType | NestedType<SubType>};
