# datocms-codegen-imgix-repro

## Description

-   We generate typescript types from Dato's GQL schema
-   We use the new `X-Exclude-Invalid` header in conjunction with `avoidOptionals` to stricten the types

=> The type for `ImgixParams` is too strict, since all of the properties that are possible as imgix params are resolved as required.

## Reproduce

Should work on any DatoCMS project.

```sh
$ npm install
$ DATOCMS_API_TOKEN_READONLY=<TOKEN> npm run build
$ npm test
```
