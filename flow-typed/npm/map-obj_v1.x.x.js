// flow-typed signature: 0b57445dd98eed5087390e32e7f32b37
// flow-typed version: 230c72bbaf/map-obj_v1.x.x/flow_>=v0.28.x

declare module 'map-obj' {
  declare module.exports: <
    TInputValue,
    TOutputValue,
    TObject: { [key: string]: TInputValue }
  >(
    object: TObject,
    iteratee: (
      key: string,
      value: TInputValue,
      object: TObject
    ) => [string|number, TOutputValue]
  ) => { [key: string]: TOutputValue };
}
