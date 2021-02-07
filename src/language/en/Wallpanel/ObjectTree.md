
# State overview
Here is an overview of the stats.
![wallpanel_state.png](/images/media/Wallpanel/Wallpanel_state.png)

#### Command's:
* brightness ===> brightness from 0 to 255
* camera ===> enables / disables camera streaming and prompts for camera activation.
* clearCache ===> clears the browser cache.
* eval ===> evaluates JavaScript in the dashboard e.g. **alert('Hello World!')**.
* relaunch ===> restarts the dashboard using the configured launch URL.
* reload ===> reloads the current page immediately.
* speak ===> uses the device's TTS to speak the message.
* url ===> Navigate to a new URL immediately.
* urlAudio ===> Play the audio specified by the URL immediately.
* volume ===> change volume, value 0-100 (in % Does not affect TTS volume).
* wake ===> wakes up the screen if it is off.

#### Query the states
* brightness ===> current brightness value of the screen.
* currentUrl ===> current URL which is displayed.
* ip ===> Ip address from the device.
* isWallpanelAlive ===> comes from the adapter and shows if the device is reachable.
* lastInfoUpdate ===> comes from the adapter and shows when the last update of the states was.
* screenOn ===> shows if the screen is currently on.


#### MQTT Adapter states query
::: warning Attention
##### 
<span style="color:red; font-size:2em; font-weight: bold" >Attention mqtt.0 adapter must be installed and set up for this and MQTT must be set up in the WallPanel App.</span>
:::
![wallpanel_state.png](/images/media/Wallpanel/Wallpanel_state_MQTT.png)