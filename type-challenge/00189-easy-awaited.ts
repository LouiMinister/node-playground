// ============= Test Cases =============
import type { Equal, Expect, IsFalse } from "./test-utils";

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;
type T = { then: (onfulfilled: (arg: number) => any) => any };
// type M = { then: (onfulfilled: number) => any };

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>
];

// @ts-expect-error
type error = MyAwaited<number>;

// ============= Your Code Here =============
// type PromiseAwaited<T extends Promise<any>> = T extends Promise<infer I>
//   ? I extends Promise<infer II>
//     ? PromiseAwaited<I>
//     : I
//   : never;
//
// type FuncParam<T extends Function> = T extends (
//   arg: infer P,
//   ...args: any[]
// ) => any
//   ? P extends Function
//     ? FuncParam<P>
//     : P
//   : never;
//
// type ThenAwaited<T extends { then: (onfulfilled: any) => any }> =
//   T["then"] extends (onfulfilled: infer O) => any
//     ? O extends Function
//       ? FuncParam<O>
//       : O
//     : never;
//
// type MyAwaited<T extends Promise<any> | { then: (onfulfilled: any) => any }> =
//   T extends Promise<any>
//     ? PromiseAwaited<T>
//     : T extends { then: (onfulfilled: any) => any }
//     ? ThenAwaited<T>
//     : never;

type Thenable<U> = { then: (onfulfilled: (arg: U) => any) => any };

type MyAwaited<T extends Thenable<any> | Promise<any>> = T extends Promise<
  infer Inner
>
  ? Inner extends Promise<any>
    ? MyAwaited<Inner>
    : Inner
  : T extends Thenable<infer U>
  ? U
  : never;
