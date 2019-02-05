React with Typescript:

Installation:

create-react-app react-typescript --scripts-version=react-scripts-ts

Once the react app is created we can see three new files namely

tsconfig.json  - Compiler options
tsconfig.prod.json
tsconfig.test.json
tslint.json

Documentation Link: https://goo.gl/YfVYdJ
Demo Link: https://friendlychat-eaac3.firebaseapp.com/


Error: TypesScript warning : Use an interface instead of a type literal.  I:


Try to add the rules in tslint.json

"rules": { 
    "object-literal-sort-keys": false, 
    "interface-name": false, 
    "member-access": [true, "no-public"], 
    "ordered-imports": false 
  }

Solution Link:  https://stackoverflow.com/questions/42973161/typesscript-warning-use-an-interface-instead-of-a-type-literal
  