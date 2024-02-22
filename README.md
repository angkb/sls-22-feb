# sls-22-feb
## Ang Kok Beng is attending class on 22 Feb 2024
### Step 1
$ npm install -g serverless

npm WARN deprecated querystring@0.2.1: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
npm WARN deprecated querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
npm WARN deprecated querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
npm WARN deprecated superagent@7.1.6: Please downgrade to v7.1.5 if you need IE/ActiveXObject support OR upgrade to v8.0.0 as we no longer support IE and published an incorrect patch version (see https://github.com/visionmedia/superagent/issues/1731)

### Step 2
$ serverless -v
Framework Core: 3.38.0
Plugin: 7.2.0
SDK: 4.5.1

$ sls -v
Framework Core: 3.38.0
Plugin: 7.2.0
SDK: 4.5.1

### Step 3
npm init  [produce package.json]
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (sls-22-feb)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to C:\Learn\22022024-CI\sls-22-feb\package.json:

{
  "name": "sls-22-feb",
  "version": "1.0.0",
  "description": "$ npm install -g serverless",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) yes



### Step 4
create serverless.yml

service: sls-22-feb
frameworkVersion: 3

provider:
  name: aws
  runtime: nodejs18.x

===============
create index.js
---------
Note: yml strict formating 
---------


### Step 4

# serverless

## npm install serverless

## npm install serverless-offline --save-dev


## sls offline start
Run offline and will gives: GET  | POST links

### Display {
    "message": "Helllo AKB ==> THIS IS OUR HTTP RESPONSE"
} 

### severless deploy

# Step 5
$ npm install jest --save-dev
$ npm install -g jest

## create index.test.js

## run jest
Failed message due to diff index.js vs index.test.js output message
message: "THIS IS OUR HTTP RESPONSE" [index.test.js]
message: "Helllo AKB ==> THIS IS OUR HTTP RESPONSE" [index.js]

## to correct change sync messages
Helllo AKB ==> THIS IS OUR HTTP RESPONSE

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.422 s, estimated 1 s
Ran all test suites.

# Step 6
