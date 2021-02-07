
# Config
Still short to the Config page what you have to set.
![wallpanel_config.png](/images/media/Wallpanel/Wallpanel_config.png) 

1. here you can set the polling interval **(do not set below 10 sec)**.
2. here you can tell the adapter that it can delete the data points automatically when the device is removed from the list **(default off)**.
3. here the use of MQTT is switched on only after that the data from the MQTT adapter are queried and the states are created.
4. here you have to enter the name of your forex (this will be used to create the forex folder in the datapoints).
5. here you have to enter the Ip address of the device you want to control (if you don't enter a name for the device, the Ip will be used for the device folders).
6. here you have to enter the port you have assigned in the wallpanel app **default is 2971**.
7. here you have to enter the Base Topic of MQTT as it is in the Wallpanel App.
8. here you can disable the device from the query without deleting it.