# beautylog
beautiful logging

## Buildstatus
[![Build Status](https://travis-ci.org/pushrocks/beautylog.svg?branch=v0.0.9)](https://travis-ci.org/pushrocks/beautylog)
[![Dependency Status](https://david-dm.org/pushrocks/beautylog.svg)](https://david-dm.org/pushrocks/beautylog)


## Usage
```javascript

### Simple Logging
var bl = require('beautylog')("os"); //for use in OS console environment
var bl = require('beautylog')("browser"); //for use in browser console environment like Google Chrome


bl.log('some log message'); //normal console log message
bl.success('some success message'); //success console log message
bl.error('some error message'); //error console log message

//alternatively you can use a logType parameter
bl.log('some log message','normal');
bl.log('some success message','success');
bl.log('some error message','error');
```
The plugin produces beautiful output like this:
![console.png](https://mediaserve.lossless.digital/github.com/pushrocks/beautylog/console.png)

### Console Tables
beautylog allows displaying data in nice tables for better overview.

```javascript
var bl = require('beautylog')("os"); //for use in OS console environment
var myTable = bl.table.new("checks")
myTable.push(["check 1","success"]); // adds a row the myTable
myTable.push(["check 2","error"]); // adds a row the myTable
myTable.push(["check 3","error"]); // adds a row the myTable
myTable.print(); //prints myTable to the console
```
