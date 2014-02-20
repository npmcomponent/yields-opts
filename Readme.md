*This repository is a mirror of the [component](http://component.io) module [yields/opts](http://github.com/yields/opts). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/yields-opts`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# opts

  Some librarys that don't use configurable require you to supply a large object for &quot;options&quot;. you can use this tiny function to generate those objects nicely and supply them to the lib.

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
