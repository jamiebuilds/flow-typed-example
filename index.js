// @flow

import mapObj from 'map-obj';

const res = mapObj({ foo: 1, bar: 2 }, (key, value, object) => {
  return [value, key];
});

const foo: string = res.foo;
const bar: number = res.bar;
