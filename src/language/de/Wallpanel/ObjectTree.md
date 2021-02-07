# State Übersicht
Hier eine Übersicht über die Stats.
![wallpanel_state.png](/images/media/Wallpanel/Wallpanel_state.png)

#### Command's:
* brightness → Helligkeit von 0 bis 255
* camera → aktiviert / deaktiviert das Kamera-Streaming und fordert die Aktivierung der Kamera.
* clearCache → löscht den Browser-Cache.
* eval → wertet JavaScript im Dashboard aus z.B. **alert('Hello World!')**.
* relaunch → startet das Dashboard über die konfigurierte launch URL neu.
* reload → lädt die aktuelle Seite sofort neu.
* speak → verwendet das TTS des Geräts, um die Nachricht zu sprechen.
* url → Navigieren Sie sofort zu einer neuen URL.
* urlAudio → Spielen Sie das durch die URL angegebene Audio sofort ab.
* volume → ändert die Lautstärke, Wert 0–100 (in%. Wirkt sich nicht auf die TTS-Lautstärke aus).
* wake → weckt den Bildschirm, wenn er ausgeschaltet ist.

#### Abfrage der states
* brightness → aktueller Helligkeitswert des Bildschirms.
* currentUrl → aktuelle URL, die angezeigt wird.
* ip → Ip Adresse vom dem Device.
* isWallpanelAlive → kommt vom Adapter und zeigt an, ob das Devise erreichbar ist.
* lastInfoUpdate → kommt vom Adapter und zeigt an, wann die letzte Aktualisierung der states war.
* screenOn → zeigt an ob der Bildschirm grade an ist

#### MQTT Adapter states Abfrage
::: warning Achtung 
<span style="color:red; font-size:2em; font-weight: bold" >Achtung mqtt.0 Adapter muss dafür installiert und eingerichtet sein und MQTT in der WallPanel App eingerichtet sein.</span>
:::

![wallpanel_state.png](/images/media/Wallpanel/Wallpanel_state_MQTT.png)
