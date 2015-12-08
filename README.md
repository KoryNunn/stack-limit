# stack-limit

Get the stack at the current location, at a given stack depth limit

## Usage

```
var stackLimit = require('../');

stackLimit(); // -> Up to 10 depth of stack (10 is the default)

stackLimit(100); // -> Up to 100 depth of stack
```