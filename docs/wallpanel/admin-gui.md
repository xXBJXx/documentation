---

# This control sidebar index

index: 2

# This is the icon of the page

icon: article

# This is the title of the article

title: Admin configuration

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

headerDepth: 2
---


Here, the tablets configurations are added and displayed.

### Admin configuration

![WallpanelAdapterConfig_withoutMqtt.png](../.vuepress/public/media/wallpanel/WallpanelAdapterConfig_withoutMqtt.png#image)

1. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Interval</span>: The interval will be set in seconds <span style="color:#ffa500">(</span>min: 10
   seconds<span style="color:#ffa500">)</span>, in which the data is retrieved from the device applies to all devices.

2. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Enable MQTT</span>: When MQTT is is activated, additional settings are enabled for the first time, which are
   required for the functionality of MQTT. Functionality.

::: warning Attention
<span style="color:red; font-size:1em; font-weight: bold" >The ioBroker MQTT Adapter must be installed!</span><br>
<span style="color:orange; font-size:1em; font-weight: bold" >If it is not installed, a message will be displayed will be displayed and MQTT cannot be enabled.</span>
:::

![WallpanelAdapterConfig_withMqtt.png](../.vuepress/public/media/wallpanel/WallpanelAdapterConfig_withMqtt.png#mqttImage)<br>

1.<span style="color:#cf3424; fontSize:1.1em; font-weight:bold">MQTT instance</span>: The MQTT instances that are available on the server are automatically displayed in the
dropdown.<br>
2.<span style="color:#cf3424; fontSize:1.1em; font-weight:bold">MQTT enabled</span>: This will show indicates whether this tablet should use MQTT.<br>
3.<span style="color:#cf3424; fontSize:1.1em; font-weight:bold">MQTT Topic</span>: This field will be only visible if the tablet uses MQTT. This displays the topic that has been
configured for this tablet.<br>

### Add device window

3. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Add Device</span>: Button [Image 1](#admin-configuration) when pressed opens a window in which then the
   configurations are entered is entered.

::: warning Attention
<span style="color:orange; font-size:1em; font-weight: bold" >The adapter must be running to add a tablet, if the adapter is not running, a corresponding message will be displayed
in the window.</span><br>
![AdapterOffline.png](../.vuepress/public/media/wallpanel/AdapterOffline.png#mqttImage)
:::

When the adapter is running, a window with input options will open.<br>
<br>
![WallpanelAddDevice.png](../.vuepress/public/media/wallpanel/WallpanelAddDevice.png#image)

1. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Device Name</span>: Here you have to enter the name of the Tablets, the name you can freely assign
   <span style="color:#ffa500">(</span>maximum 20 characters<span style="color:#ffa500">)</span>, but attention this name can be not be changed, as it is used for the ID of the
   device folder.<br>
2. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Device IP</span>: The IP address of the device this will be checked if it was given correctly, only valid IPv4 are
   allowed e.g. 192.168.0.1 the dots are set automatically after every 3rd digit.

   ::: warning Attention
   <span style="color:orange; font-size:1.3em; font-weight: bold">The name and IP address must be present only <span style="color:red; fontSize:1em; font-weight:bold"> 1x
   </span>be present, if they are duplicated, a message will be displayed.</span>
   :::

3. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">device port</span>: here you enter the Port you have configured in Wallpanel
   App <span style="color:#ffa500">(</span>Default port is.<span style="color:orange; fontSize:1.1em; font-weight:bold">2971</span><span style="color:#ffa500">)</span>.<br>

4. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Tablet enabled</span>: If enabled, the tablet is queried <span style="color:#ffa500">(</span>by default turned
   on<span style="color:#ffa500">)</span>.
   <br>

5. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Tablet MQTT enabled</span>: This will enable the MQTT query enabled for this tablet.<br>

6. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">MQTT Topic</span>: is only visible, if the Tablet MQTT is activated. Here you specify the topic here is an
   example how it can look like <span style="color:#ffa500">(</span>Important <span style="color:red; font-size:1.3em; font-weight: bold">/</span> must be
   there<span style="color:#ffa500">)</span> Example: <span style="color:orange; fontSize:1.1em; font-weight:bold">wallpanel/samsung</span> this field will be checked if the topic
   is valid <span style="color:#ffa500">(</span>further information about the.<span style="color:#ffa500">)</span> [APP MQTT settings](/wallpanel/app/mqtt-settings)<br>

7. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">MQTT Topic Proposal</span>: Here is the beginning of the
   Topic <span style="color: green; font-size:1.3em; font-weight:bold">wallpanel/</span> is suggested, you can use it, if you also
   have <span style="color: green; font-size:1.3em; font-weight:bold">wallpanel/</span> in the app as the If not, write your own in the field.

The fields marked with a <span style="color:red; fontSize:1.3em; font-weight:bold">*</span>, <span style="color: red; font-size:1.3em; font-weight:bold">must</span> be specified,
otherwise the device cannot be Once everything has been filled in correctly, you can then click on Add. Now it is checked if the device is reachable, if the request to the device
was successful, a corresponding message is displayed.<br>
And after 2 seconds the window closes and the device, is created in the view.<br>

#### Devices creation successful

![AddDeviceSuccessful.gif](../.vuepress/public/media/wallpanel/AddDeviceSuccessful.gif#gif)

If the check was <Badge text="not successful" type="danger" vertical="middle"/>, an error message is displayed.

#### Device creation failed

![AddDeviceError.gif](../.vuepress/public/media/wallpanel/AddDeviceError.gif#gif)

### Possible errors

These are only a few possible errors that can be displayed because I cannot reproduce all errors here, so, there may be other errors displayed, please look for the internet to find
out what they mean.

::: danger ECONNREFUSED
Connection rejected by the server.<span style="color:#ffa500">(</span>Server ⇨ Wallpanel App<span style="color:#ffa500">)</span><br>
Check the IP address and port and if the app is enabled on the device.
:::

::: danger timeout of 15000ms exceeded.
Connection to the device is taking too long.<span style="color:#ffa500">(</span>Device ⇨ Tablet<span style="color:#ffa500">)</span><br>
Check the IP address and port and whether the device is on the network.
:::

### Tablet Card's

4. tablet card has 2 buttons <span style="color:#4dabf5; font-size:1.3em; font-weight:bold" >Edit Device</span> and <span style="color: red; fontSize: 1.3em; font-weight:bold">
   Delete device</span> in addition, they show some more information.<br>
   ![WallpanelCard.png](../.vuepress/public/media/wallpanel/deviceCard.png#image)

	1. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Device information</span>: This will display the name of the device that was specified when it was created. The
	   color tells in addition to the display enabled or disabled, whether the device will be considered when queried.
	2. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Edit device</span>: Here. You can edit the device. Clicking on the button opens a window with prefilled fields
	   that can be fields that you can edit.

### Edit device

![WallpanelEditDevice.png](../.vuepress/public/media/wallpanel/WallpanelEditDevice.png#image)

::: warning Attention
<span style="color:orange; font-size:1em; font-weight: bold" ><span style="color:#cf3424; font-size:1em; font-weight:bold" >Device Name</span>: The name of the tablet cannot be
changed! <br>
Since this is used for the ID of the device folder, if you want to have a different name, you must first delete the device first delete and then create new.</span>
:::

:::tip Info
Everything else can be changed, it will be the same checks as when creating from the device.
:::

### Delete device

3. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Delete device</span>: When clicking on the button opens a confirmation window, as soon as this has been confirmed,
   the device is deleted from the configuration. Now only save.

::: warning Attention!
<span style="color:orange; font-size:1em; font-weight: bold" >When saving and then restarting the adapter, the restarting the adapter, the data points that belong to the tablet
will be deleted and cannot be restored.</span>
:::

![WallpanelDeleteDevice.png](../.vuepress/public/media/wallpanel/WallpanelDeleteDevice.png#image)

### GitHub Issues and Documentation page.

5. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">GitHub Issues</span>:
   [Image 1](#admin-configuration) Here you come directly to the GitHub Issues of this adapter, if you experience any problems please create an issue.
6. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Docs</span>:
   [Image 1](#admin-configuration) Here you can go directly to the documentation of this adapter.
