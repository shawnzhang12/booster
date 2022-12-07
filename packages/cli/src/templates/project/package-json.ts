// New projects use the same Booster version as the installed CLI
const VERSION = require('../../../package.json').version

export const template = `{
  "name": "{{{projectName}}}",
  "description": "{{{description}}}",
  "version": "{{{version}}}",
  "author": "{{{author}}}",
  "dependencies": {
    "tslib": "^2.4.0",
    "@boostercloud/framework-core": "^${VERSION}",
    "@boostercloud/framework-types": "^${VERSION}",
    "@boostercloud/framework-common-helpers": "^${VERSION}",
    "{{{providerPackageName}}}": "^${VERSION}"
  },
  "devDependencies": {
    "@boostercloud/framework-provider-local": "^${VERSION}",
    "@boostercloud/framework-provider-local-infrastructure": "^${VERSION}",
    "@boostercloud/metadata-booster": "^${VERSION}",
    "{{{providerPackageName}}}-infrastructure": "^${VERSION}",
    "rimraf": "^3.0.1",
    "@typescript-eslint/eslint-plugin": "4.22.1",
    "@typescript-eslint/parser": "4.22.1",
    "eslint": "7.26.0",
    "eslint-config-prettier": "8.3.0",
    "eslint-plugin-prettier": "3.4.0",
    "mocha": "8.4.0",
    "@types/mocha": "8.2.2",
    "@types/jsonwebtoken": "^8.5.1",
    "nyc": "15.1.0",
    "prettier":  "2.3.0",
    "typescript": "4.7.4",
    "ts-node": "9.1.1",
    "@types/node": "16.11.7",
    "ttypescript": "1.5.13"
  },
  "engines": {
    "node": ">=14.0.0"
  },
  "homepage": "{{{homepage}}}",
  "license": "{{{license}}}",
  "main": "dist/index.js",
  "repository": "{{{repository}}}",
  "scripts": {
    "lint:check": "eslint --ext '.js,.ts' **/*.ts",
    "lint:fix": "eslint --quiet --fix --ext '.js,.ts' **/*.ts",
    "build": "ttsc -b tsconfig.json",
    "clean": "rimraf ./dist tsconfig.tsbuildinfo",
    "test": "cross-env AWS_SDK_LOAD_CONFIG=true cross-env BOOSTER_ENV=test nyc --extension .ts mocha --forbid-only \\"test/**/*.test.ts\\""
  },
  "types": "lib/index.d.ts"
}`
