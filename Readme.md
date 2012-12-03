
# opts

  Some librarys that don't use configurable require you to supply a large object for &quot;options&quot; you can use this tiny function to generate those objects nicely and supply them to the lib.

## Installation

    $ component install yields/opts

## API

#### opts(obj)

The function will return a new Function that accepts a key + val.

```javascript
var opts = require('opts');
var maps = opts({});
maps('center', new google.mapsLatLng(-34.397, 150.644));
maps('zoom', 8);
maps('mapsTypeId', google.maps.MapTypeId.ROADMAP);
maps('zoom');
// > 8
var map = new google.maps.Map(document.getElementById('map_canvas'), maps());
```


## License

  MIT
