---

# This control sidebar index

index: 8

# This is the icon of the page

icon: article

# This is the title of the article

title: Objects

# Set author

author: xXBJXx

# Set writing time

date: 2022-05-24

# A page can have multiple categories

category:

- Fully Tablet Control

# A page can have multiple tags

tag:

- Fully Tablet Control

# The page’s sidebar heading rendering depth.

headerDepth: 2
---

## Objects

![objects](../.vuepress/public/media/fully-tablet-control/objects.png)

* at the created data points you can adjust the brightness manually for this you have to change first at point **1** from Admin to User,
  then you can change the brightness manually at point **3**.

* at point **2** a **true** value is set for a warning when the tablet is not charging.

* at point **4** the current battery level is written for a vis display e.g. **[ basic-Image 8 Widget]**.
  during normal operation, only the % number is written e.g. **10 %** when the tablet is charging, **charge 10 %** is displayed.

```
0 = 0%
1 = 10%
2 = charge 10%
3 = 20%
4 = charge 20%
5 = 30%
6 = charge 30%
7 = 40%
8 = charge 40%
9 = 50%
10 = charge 50%
11 = 60%
12 = charge 60%
13 = 70%
14 = charge 70%
15 = 80%
16 = charge 80%
17 = 90%
18 = charge 90%
19 = 100%
20 = charge 100%
```

Here is another example basic-Image 8 widget:

basic-Image 8 Widget

Sample with all battery levels:

![battery](../.vuepress/public/media/fully-tablet-control/battery.png)

``` js
 [{"tpl":"tplStatefulImage8","data":{"oid":"fully-tablet-control.0.device.eingang.state_of_charge_vis","g_fixed":false,"g_visibility":false,"g_css_font_text":false,"g_css_background":false,"g_css_shadow_padding":false,"g_css_border":false,"g_gestures":false,"g_signals":false,"g_last_change":false,"visibility-cond":"==","visibility-val":1,"visibility-groups-action":"hide","refreshInterval":"0","count":"20","signals-cond-0":"==","signals-val-0":true,"signals-icon-0":"/vis/signals/lowbattery.png","signals-icon-size-0":0,"signals-blink-0":false,"signals-horz-0":0,"signals-vert-0":0,"signals-hide-edit-0":false,"signals-cond-1":"==","signals-val-1":true,"signals-icon-1":"/vis/signals/lowbattery.png","signals-icon-size-1":0,"signals-blink-1":false,"signals-horz-1":0,"signals-vert-1":0,"signals-hide-edit-1":false,"signals-cond-2":"==","signals-val-2":true,"signals-icon-2":"/vis/signals/lowbattery.png","signals-icon-size-2":0,"signals-blink-2":false,"signals-horz-2":0,"signals-vert-2":0,"signals-hide-edit-2":false,"lc-type":"last-change","lc-is-interval":true,"lc-is-moment":false,"lc-format":"","lc-position-vert":"top","lc-position-horz":"right","lc-offset-vert":0,"lc-offset-horz":0,"lc-font-size":"12px","lc-font-family":"","lc-font-style":"","lc-bkg-color":"","lc-color":"","lc-border-width":"0","lc-border-style":"","lc-border-color":"","lc-border-radius":10,"lc-zindex":0,"src_11":"/icons-open-icon-library-png/status/battery-060.png","src_10":"/icons-open-icon-library-png/status/battery-charging-050.png","src_9":"/icons-open-icon-library-png/status/battery-050.png","src_8":"/icons-open-icon-library-png/status/battery-charging-040.png","src_7":"/icons-open-icon-library-png/status/battery-040.png","src_6":"/icons-open-icon-library-png/status/battery-charging-030.png","src_5":"/icons-open-icon-library-png/status/battery-030.png","src_4":"/icons-open-icon-library-png/status/battery-charging-020.png","src_3":"/icons-open-icon-library-png/status/battery-020.png","src_2":"/icons-open-icon-library-png/status/battery-charging-010.png","src_1":"/icons-open-icon-library-png/status/battery-010.png","src_0":"/icons-open-icon-library-png/status/battery-000.png","src_13":"/icons-open-icon-library-png/status/battery-070.png","src_15":"/icons-open-icon-library-png/status/battery-080.png","src_17":"/icons-open-icon-library-png/status/battery-090.png","src_19":"/icons-open-icon-library-png/status/battery-100.png","src_20":"/icons-open-icon-library-png/status/battery-charging-100.png","src_18":"/icons-open-icon-library-png/status/battery-charging-090.png","src_16":"/icons-open-icon-library-png/status/battery-charging-080.png","src_14":"/icons-open-icon-library-png/status/battery-charging-070.png","src_12":"/icons-open-icon-library-png/status/battery-charging-060.png"},"style":{"left":"177px","top":"76px","width":"44px","height":"43px"},"widgetSet":"basic"}]
```

Open icons library is used

Under no.**5** is a state as a button, which causes all tablets that are active to reload the view.

Under no.**6** you can find the Fully Browser Info states.

Under no.**7** you can use the Fully Browser commands.
