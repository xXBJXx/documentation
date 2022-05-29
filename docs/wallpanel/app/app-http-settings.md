---

# This control sidebar index

index: 1

# This is the icon of the page

icon: article

# This is the title of the article

title: Wallpanel App HTTP Settings

# Set author

author: xXBJXx

# Set writing time

date: 2022-05-25

# A page can have multiple categories

category:

- Wallpanel

# A page can have multiple tags

tag:

- Wallpanel

# The page’s sidebar heading rendering depth.

headerDepth: 1
--- 

## Http Settings

In order for the adapter to retrieve the data from the wallpanel app, the Rest-API setting and the port in the app must
be set.

![RestApiSettings](../../.vuepress/public/media/wallpanel/RestApiSettings.png#image)

1. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Port</span>: by default set to 2971, if you want to use
   a different you would like to use another port, you have to set it here.
2. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">REST API</span>: this setting is by default to off,
   this must be turned on.

## MJPEG Stream

If you would like to use a livestream from the wallpanel, this setting must be enabled

![RestApiSettings](../../.vuepress/public/media/wallpanel/MJPEG_Stream.png#image)

1. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">MJPEG Stream</span>: this setting is off by
   default, it must be turned on if you want to use the stream from the wallpanel.
2. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">MJPEG Max Streams</span>: here you can set the amount
   of streams that can be displayed by the wallpanel.

## Settings preview

Here is a little preview where the settings are

![AppHttpSettings](../../.vuepress/public/media/wallpanel/AppHttpSettings.gif#gif)