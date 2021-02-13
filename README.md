## About Autoit-Serialize-JS
JavaScript counterpart for [Autoit-Serialize](https://github.com/tarreislam/Autoit-Serialize). THIS IS NOT A REPLACEMENT for JSON. Use this exclusively for Autoit2Javascript communication

## How to install

`npm install -s autoit-serialize-js`

## How to use

#### With import

```typescript
import Serializer from 'autoit-serialize-js'

// Serialize data
Serializer.serialize([1,2,3])

// Unserialize data
Serializer.unSerialize('a|0x496E7433327C3124496E7433327C3224496E7433327C33')
```

### Require

```javascript
// cba, check dist folder i made the package build there
```

## FAQ

### How bad is it?

Look at this graph
```
Serialized AUS len = 452
AUS: Serialize. IPS: 61660 @ 30 seconds
AUS: UnSerialize. IPS: 25077 @ 30 seconds
AUS: Serialize+UnSerialize. IPS: 16441 @ 30 seconds

Serialized JSON len = 92
JSON: Serialize. IPS: 255849 @ 30 seconds
JSON: UnSerialize. IPS: 246133 @ 30 seconds
JSON: Serialize+UnSerialize. IPS: 119166 @ 30 seconds
```

The data is **5 times bigger**, and the parsing is **41 times slower**, and its not human readable.

### Then, why don't you port JSON to AutoIt instead?

Because the JavaScript engine is much faster than Autoit interpreter. With that said, JavaScript can take the performance hit and still outperform the AutoIt counterpart with **31 times the speed**.

### Then, why don't you stop using AutoIt

This is my way of solving puzzles on my "free time"