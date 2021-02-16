---
title: Adapter description for E-control.at fuel
---
<img class="image" src="/images/media/e-control-at-fuel/e-control-at-fuel.png#center" alt="e-control-at-fuel.png" title="E-control at fuel" />
<img src="https://iobroker.live/badges/e-control-at-fuel-installed.svg#center#install" alt="E-control at fuel installed" title="E-control at fuel installed" />

[![GitHub Logo](/images/GitHub.png#icons)](https://github.com/xXBJXx/ioBroker.e-control-at-fuel)

[![NPM version](https://img.shields.io/npm/v/iobroker.e-control-at-fuel.svg?logo=npm#NPM)](https://www.npmjs.com/package/iobroker.e-control-at-fuel)
``` shell
npm i iobroker.e-control-at-fuel
```


# Fuel prices for Austria

[Forum post](https://forum.iobroker.net/topic/33033/e-control-at-fuel-kraftstoffpreise-f%C3%BCr-%C3%B6sterreich)

### The adapter reads the fuel prices from E-Control.at:

![config](/images/media/e-control-at-fuel/config.png)

On the config page you only have to set the interval **(the smallest adjustable time is 10 min)** and enter the latitude 
and longitude which you can look up here **https://www.latlong.net/** then you only have to choose which fuel you want, 
and you are done.

As soon as the adapter starts, for each city name and the fuel type that was specified on the config page,
a folder is created e.g. **rosenheim_diesel** and in this folder the gas station folders are created the number
depends on the gas stations, which transmit their prices it is created still 1 folder the cheapest gas stations,
and a JSON table for all gas stations, which were created in the folder.

![config](/images/media/e-control-at-fuel/objects.png)

The price is divided into 3 different indications once the normal price e.g. **0.962€** at the 2ten the **2** was removed **0.96€** with this variant one can with the 
help of CSS and Bindings in the vis the removed **2** in small anzeigen lasen e.g. so **0.96²€** and the 3te is the removed **2**.
the state combined is an html code that connects the priceshort and price3rd to e.g. 0.93³€ this can be used in the vis in html widget.

![config](/images/media/e-control-at-fuel/price.png)

![config](/images/media/e-control-at-fuel/html-widget.png)

I recommend to work with bindings like **{e-control-at-fuel.0.radstadt_CNG.cheapest.prices.combined}** the value will be updated automatically.
the html is given a CSS class here still the suitable CSS:

``` css

.station_open {
    color: blue;
}

.station_closed {
    color: red !important; /* !important can be omitted if necessary */
}

/* € sign */
.station_combined_euro {
    font-family: Times;
    font-size: 80%;
}

```