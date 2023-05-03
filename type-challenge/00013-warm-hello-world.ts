// ============= Test Cases =============
// 요것들은 type - challenge 에서 정의해 놓은 타입이다.
import type { Equal, Expect, NotAny } from "./test-utils";

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];

// ============= Your Code Here =============
type HelloWorld = string; // expected to be a string
