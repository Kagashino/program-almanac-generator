# Programmer Almanac

Daily Almanac Event Caculator for programmer.
Generate events of the day based on date you've passed (default today).
Good luck.

## Installation
> npm i programmer-almanac-generator

or
> yarn add programmer-almanac-generator

## Usage

in ES Module:
```
import * as Almanac from 'programmer-almanac-generator'
Almanac.init(new Date())
```

in commonjs
```
const Almanac = require('programmer-almanac-generator')
const almanac = Almanac.init(new date)
```

in browser
```
const almanac = Almanac.init(new date)
```

### Use custom Almanac Events Set

use your own events
```
import { generateAlmanac } from 'programmer-almanac-generator'

const CustomEvents = {
	Activities: [],
	tools: [],
	// other options
}

generateAlmanac(CustomEvents, new Date())
```