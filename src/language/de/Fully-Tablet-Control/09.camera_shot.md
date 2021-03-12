---
title: Kameraaufnahme
---

## Aktivierung von Bewegungserkennung 
In den commands (auf dem [Bild Nr.: 1](#bild-nr-1) die Nr.: 7)
### Bild Nr.: 1 
![objects.png](/images/media/Fully-Tablet-Control/objects.png)
findet ihr den Button (auf dem [Bild Nr.:2](#bild-nr-2) die Nr.: 1) um eine Kameraaufnahme (camshot) auszulösen,
### Bild Nr.: 2 
![Obj_commands.png](/images/media/Fully-Tablet-Control/Obj_commands.png)
dies ist aber erst dann möglich wen der state motionDetection (auf dem [Bild Nr.: 2](#bild-nr-2) die Nr.: 2) auf 
<span style="color:red;font-size:1.5rem">true</span> gesetzt wird.

:::warning Achtung
**das Aktivieren von motionDetection (Bewegungserkennung) verursacht einen höheren Energieverbrauch des Tablets!**
:::

dies kann man entweder manuell auf <span style="color:red;font-size:1.5rem">true</span> setzen oder es den Adapter 
automatisch machen lassen, sobald man auf den Button klickt.
Um den Adapter das Aktivieren von dem Datenpunkt motionDetection zu erlauben, müsst ihr in der Adapter Konfigurations 
Seite unter Bildaufnahme, in **Automatische Aktivierung von Motion Detection** (auf dem [Bild Nr.: 3](#bild-nr-3))
### Bild Nr.: 3 
![MotionDetect-Mode.png](/images/media/Fully-Tablet-Control/MotionDetect-Mode.png) 

in der Auswahl von Manuell auf Automatisch umschalten, dann wird der Adapter beim Starten überprüfen, ob die 
Bewegungserkennung im FullyBrowser aktiviert ist und dem entsprechenden Datenpunkt motionDetection anpassen, sobald man jetzt auf 
den Button für die Kameraaufnahme drückt (auf dem [Bild Nr.: 2](#bild-nr-2) die Nr.: 1) wird der Adapter den 
Datenpunkt motionDetection (auf dem [Bild Nr.: 2](#bild-nr-2) die Nr.: 2)
auf <span style="color:red;font-size:1.5rem">true</span> setzen, falls es nötig ist und danach ein Bild machen.

:::warning Achtung
**das Deaktivieren von motionDetection (Bewegungserkennung) falls man es nicht mehr braucht muss in beiden fehlen manuell 
getätigt werden dazu muss der Datenpunkt motionDetection (auf dem [<span style="color:#63b4f4">Bild Nr.: 2</span>](#bild-nr-2) die Nr.: 2) 
auf <span style="color:red;font-size:1.5rem">false</span> setzen.**
:::

## Aufnahmemodus Konfiguration
In der **Auswahl der Art des Aufnahmemodus** könnt ihr entscheiden wie die Bilder gemacht werden sollen ([Bild Nr.: 4](#bild-nr-4))
### Bild Nr.: 4
![recording_mode](/images/media/Fully-Tablet-Control/recording_mode.png)
ihr hab die Auswahl zwischen Einzelaufnahme und Serienaufnahme, je nachdem was ausgewählt wurde verändern sich die weiteren Einstellungen. \
bei der Einzelaufnahme ([Bild Nr.: 5](#bild-nr-5)) habt ihr nur eine auswahl, bei der ihr angeben, könnt wie viele bilder gespeichert werden bevor sie wieder überschrieben werden (<span style="color:red"> MAX 30 Bilder einstellbar </span>)
::: warning Achtung
**<span style="color:red;font-size:1.5rem">Um 0 Uhr wird der Zähler wieder auf 0 gesetzt somit werden die Bilder immer angefangen ab 0 Uhr mit Bild Nr.: 1 anfangen.</span>**
:::

### Bild Nr.: 5
![single_shot_mode](/images/media/Fully-Tablet-Control/single_shot_mode.png)

In dem Serienaufnahme-Modus habt ihr die Möglichkeit: 
* anzugeben wie viele Bilder in Folge gemacht werden sollen (<span style="color:red"> MAX 30 Bilder einstellbar </span>) (auf dem [Bild Nr.: 6](#bild-nr-6) <span style="color:red">die Nr.: 1</span>)
* wie viele Bilder gespeichert werden sollen (<span style="color:red"> MAX 30 Bilder einstellbar </span>) (auf dem [Bild Nr.: 6](#bild-nr-6) <span style="color:blue">die Nr.: 2</span>)
* und in welchen abstand die bilder gemacht werden ( <span style="color:red">MIN 1s / MAX 5s</span> ) (auf dem [Bild Nr.: 6](#bild-nr-6) <span style="color:green">die Nr.: 3</span>)
::: warning Achtung
**<span style="color:red;font-size:1.5rem">Um 0 Uhr wird der Zähler wieder auf 0 gesetzt somit werden die Bilder immer angefangen ab 0 Uhr mit Bild Nr.: 1 anfangen.</span>**
:::
### Bild Nr.: 6
![series_recording_mode](/images/media/Fully-Tablet-Control/series_recording_mode.png)

## Objecte für die Kameraaufnahmen
Die Bild URL wird unter den device_info in den state **camshotUrl** abgespeichert ([Bild Nr.: 7](#bild-nr-7) je nachdem wie viele Bilder gemacht 
werden erhöht sich die anzahl der URLs in dem Object z.B. 
``` js
{
"Nr1":"/fully-tablet-control.admin/media/camshot_samsung_1.png",
"Nr2":"/fully-tablet-control.admin/media/camshot_samsung_2.png"
}
```
der state **camshot64** zeigt dann immer das letzte gemachte Bild an.
### Bild Nr.: 7
![Objects_camshotUrl](/images/media/Fully-Tablet-Control/Objects_camshotUrl.png)

## Speicherort
Hier noch eine kleine Übersicht wo die Bilder zu finden sind:
* **FTP:**
``` shell
/opt/iobroker/iobroker-data/files/fully-tablet-control.admin/media/
```
![SFTP_obj](/images/media/Fully-Tablet-Control/SFTP_obj.png)

* **Vis Datei Manager:** \
![Vis_Datei_Manager](/images/media/Fully-Tablet-Control/Vis_Datei_Manager.png)

