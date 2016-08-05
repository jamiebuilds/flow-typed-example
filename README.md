# flow-typed-example

In order to see the errors:

```sh
$ npm install --global flow-bin
$ cd path/to/flow-typed-example
$ flow
```

You should see:

```
index.js:5
  5: const res = mapObj({ foo: 1, bar: 2 }, (key, value, object) => {
                 ^ function call
 10: const bar: number = res.bar;
                         ^^^^^^^ string. This type is incompatible with
 10: const bar: number = res.bar;
                ^^^^^^ number


Found 1 error
```

### How we got here:

```sh
$ npm install --global flow-typed flow-bin
$ git init flow-typed-example && cd flow-typed-example
$ flow init
$ npm init --yes
$ npm install --save map-obj
$ flow-typed install map-obj@1.0.0 --flowVersion 0.30
$ touch index.js
# add code to index.js
$ flow
>
> index.js:5
>   5: const res = mapObj({ foo: 1, bar: 2 }, (key, value, object) => {
>                  ^ function call
>  10: const bar: number = res.bar;
>                          ^^^^^^^ string. This type is incompatible with
>  10: const bar: number = res.bar;
>                 ^^^^^^ number
>
>
> Found 1 error
```
