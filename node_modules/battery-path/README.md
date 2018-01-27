# battery-path

Get the path to a battery. Probably only works on Linux.

Really simple module created to reduce code duplication across my battery
modules. Changes to this module will seamlessly propagate to other modules that
deal with batteries.

## Example

``` javascript
var batteryPath = require('battery-path');

batteryPath('BAT0');
// => '/sys/class/power_supply/BAT0'
```

## Installation

``` bash
$ npm install battery-path
```

## API

``` javascript
var batteryPath = require('battery-path');
```

### `batteryPath(battery)`

Returns the _String_ path to `battery`.