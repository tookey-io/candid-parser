# Candid to JSON parser

This library parses Internet Computed IDL (candid) to JSON format.

## Usage

Install library from npmjs:

```sh
npm install @tookey-io/candid-parser
# or 
pnpm install @tookey-io/candid-parser
# or 
yarn add @tookey-io/candid-parser
# or 
```

Load and use: 
```
import {parseIdlPretty, parseIdl } "@tookey-io/candid-parser";

const did = `
service : {
  foo: () -> (nat) query;
  bar: () -> (text) query;
}
`

const jsonPretty = parseIdlPretty(did)
const jsonMinimized = parseIdl(did) 

```

## Examples

[ICPC-1 Huge JSON](/__tests__/fixtures/icp.json)
[Simple Canister JSON](/__tests__/fixtures/simple.json)
[Hello example JSON](/__tests__/fixtures/hello.json)