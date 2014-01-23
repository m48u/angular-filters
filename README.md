# angular-filters
This is just a very small project which provides some filters for your AngularJS project.

## Installation
Just add this library to your site and add the module "m48u" as a dependency to your AngularJS module

```javascript
angular.module("yourModule", ["m48u"]);
```

## Usage
After that in your app you have the filters from this module available

```javascript
{{model.helloWorld | reverse }}
```

Filters are:
- reverse