import { HelloWorld } from './../utils/utils';
import * as Utils from "../utils/utils";

describe("Utils test suite", () => {
  
  test("Should return Hellow", () => {
    const actual = Utils.HelloWorld();
    expect(actual).toBe("Hello World!")
  })
})