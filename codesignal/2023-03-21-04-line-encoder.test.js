const solution = require("./2023-03-21-04-line-encoder");

// Given a string, return its encoding defined as follows:

// First, the string is divided into the least possible number of
// disjoint substrings consisting of identical characters
// for example, "aabbbc" is divided into ["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced
// with a concatenation of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the 
// same order and a new string is returned.
// Example

// For s = "aabbbc", the output should be
// solution(s) = "2a3bc".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s

// String consisting of lowercase English letters.

// Guaranteed constraints:
// 4 ≤ s.length ≤ 15.

// [output] string

// Encoded version of s.

describe("lineEncoder", () => {
  test('"aabbbc" => "2a3bc"', () => {
    expect(solution("aabbbc")).toEqual("2a3bc");
  });

  test('"aaaa" => "4a"', () => {
    expect(solution("aaaa")).toEqual("4a");
  })

  test('"abcd" => "abcd"', () => {
    expect(solution("abcd")).toEqual("abcd");
  })

  test('"aaabbcccaad" => "3a2b3c2ad', () => {
    expect(solution("aaabbcccaad")).toEqual("3a2b3c2ad");
  })

  test('"abcdd" => "abc2d"', () => {
    expect(solution("abcdd")).toEqual("abc2d");
  });
})