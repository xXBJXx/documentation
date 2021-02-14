---
title: Camera recording
---

## Motion detection activation
In the commands (on the [image no.: 1](#image-no-1) the no.: 7).
### Image no: 1
![objects.png](/images/media/Fully-Tablet-Control/objects.png)
you will find the button (on the [image no.:2](#image-no-2) the no.: 1) to trigger a camera shot (camshot),
### Image no: 2
![Obj_commands.png](/images/media/Fully-Tablet-Control/Obj_commands.png) 
but this is only possible if the state motionDetection (on the [image no.: 2](#image-no-2) the no.: 2) is set to
<span style="color:red;font-size:1.5rem">true</span>.

:::warning Attention
**enabling motionDetection causes higher power consumption of the tablet!**.
:::

this can either be set manually to <span style="color:red;font-size:1.5rem">true</span> or let the adapter 
do it automatically when you click on the button.
To allow the adapter to activate the data point motionDetection, you have to go to the Adapter Configuration
page under Image Acquisition, in **Automatic Activation of Motion Detection** (on the [Image no.: 3](#image-no-3))
### Image no.: 3
![MotionDetect-Mode.png](/images/media/Fully-Tablet-Control/MotionDetect-Mode.png)

in the selection switch from Manual to Automatic, then the adapter will check at the startup if the
motion detection is enabled in FullyBrowser and match the corresponding data point motionDetection, 
now as soon as you press the button for camera recording (on the [Image no.: 2](#image-no-2) the no.: 1) 
the adapter will set the datapoint motionDetection (on the [image no.: 2](#image-no-2) the no.: 2) 
to <span style="color:red;font-size:1.5rem">true</span> if it is necessary and then take a picture.

:::warning Attention
**disabling motionDetection (motion detection) if you don't need it anymore has to be done manually in both missing
for this the datapoint motionDetection (on the [<span style="color:#63b4f4">image no.: 2</span>](#image-no-2) the no.: 2) has to be
to set to  <span style="color:red;font-size:1.5rem">false</span>.**
:::

## Shooting mode configuration
In the **Selection of the type of recording mode** you can decide how the pictures should be taken ([Image no.: 4](#image-no-4))
### Image no.: 4
![recording_mode](/images/media/Fully-Tablet-Control/recording_mode.png)
you have the choice between single recording and continuous recording, depending on what was selected the other settings change. \
with the single recording ([picture no.: 5](#picture-no-5)) you have only one selection, where you can specify how many
images are saved before they are overwritten again (<span style="color:red"> MAX 30 images adjustable </span>).
::: warning Attention
**<span style="color:red;font-size:1.5rem">At 0 o'clock the counter will be set to 0 again, so the pictures will always be
started from 0 o'clock with image no.: 1 begin.</span>**
:::

### Image no.: 5
![single_shot_mode](/images/media/Fully-Tablet-Control/single_shot_mode.png)

In the continuous shooting mode you have the possibility:
* specify how many pictures should be taken in a row (<span style="color:red"> MAX 30 pictures adjustable </span>).
  (on the [picture no.: 6](#picture-no-6) <span style="color:red">the no.: 1</span>)
* how many images should be saved (<span style="color:red">MAX 30 images adjustable</span>)
  (on the [picture no.: 6](#picture-no-6) <span style="color:blue">the no.: 2</span>)
* and at what interval the pictures are taken ( <span style="color:red">MIN 1s / MAX 5s</span> )
  (on the [picture no.: 6](#picture-no-6) <span style="color:green">the no.: 3</span>)
::: warning Attention.
**<span style="color:red;font-size:1.5rem">At 0 o'clock the counter will be set to 0 again therefore the images will always be 
started from 0 clock with image no.: 1 begin.</span>**
:::
### Image no.: 6
![series_recording_mode](/images/media/Fully-Tablet-Control/series_recording_mode.png)

## Objects for the camera shots
The image URL is stored under the device_info in the state **camshotUrl** ([Image no.: 7](#image-no-7) depending on
how many pictures are taken the number of URLs in the object increases e.g.
``` js
{
"Nr1":"/fully-tablet-control.admin/media/camshot_samsung_1.png",
"Nr2":"/fully-tablet-control.admin/media/camshot_samsung_2.png"
}
```
the state **camshot64** then always shows the last picture taken.
### Image no.: 7
![Objects_camshotUrl](/images/media/Fully-Tablet-Control/Objects_camshotUrl.png)

## Storage location
Here still a small overview where the pictures are to be found:
* **FTP:**
``` shell
/opt/iobroker/iobroker-data/files/fully-tablet-control.admin/media/
```
![SFTP_obj](/images/media/Fully-Tablet-Control/SFTP_obj.png)

* **Vis File Manager:** \
![Vis_Datei_Manager](/images/media/Fully-Tablet-Control/Vis_Datei_Manager.png)

