# Programmer Almanac

Daily Almanac Event Caculator for programmer.
Generate events of the day based on date you've passed (default today).
Good luck.

## Installation
> npm i programmer-almanac

or
> yarn add programmer-almanac

## Usage

in ES Module:
```
import * as Almanac from 'programmer-almanac'
Almanac.init(new Date())
```

in commonjs
```
const Almanac = require('programmer-almanac')
const almanac = Almanac.init(new date)
```

in browser
```
const almanac = Almanac.init(new date)
```

### Use custom Almanac Events Set

use your own events
```
import { generateAlmanac } from 'programmer-almanac'

const CustomEvents = {
	Activities: [],
	tools: [],
	// other options
}

generateAlmanac(CustomEvents, new Date())
```