# Backbone API : Vimeo

A simple way to interact with Vimeo's API using Backbone.js objects.

## Install

```
bower install backbone.api.vimeo
```

## Dependencies

_none_

## Usage

The plugin will try to create a global namespace ```Vimeo``` that will host all the Models/Views/Collections mirrored from Backbone.API.Vimeo

Most Backbone.js conventions apply using the _Vimeo_ namespace.

```
var video = new Vimeo.Models.Video({ id : "2R4563FGs2" });
```


## Credits

Created by Makis Tracend ( [@tracend](http://github.com/tracend) )

Originally used for [Tabtube](https://apps.facebook.com/tabtube)

Distributed through [Makesites.org](http://makesites.org)

Released under the [MIT license](http://makesites.org/licenses/MIT)
