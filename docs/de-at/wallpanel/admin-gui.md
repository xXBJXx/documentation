---

# This control sidebar index

index: 2

# This is the icon of the page

icon: article

# This is the title of the article

title: Admin Konfiguration

# Set author

author: xXBJXx

# Set writing time

date: 2022-05-24

# A page can have multiple categories

category:

- Wallpanel

# A page can have multiple tags

tag:

- Wallpanel

# The page’s sidebar heading rendering depth.

headerDepth: 2
---

Hier werden die Tablets Konfigurationen hinzugefügt und angezeigt.

### Admin Konfiguration

![WallpanelAdapterConfig_ohneMqtt.png](../../.vuepress/public/media/wallpanel/WallpanelAdapterConfig_withoutMqtt.png#image)

1. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Intervall</span>: Das Intervall wird in Sekunden <span style="color:#ffa500">(</span>min: 10
   Sekunden<span style="color:#ffa500">)</span> angegeben, in dem die Daten vom Gerät abgefragt werden, gilt für alle Geräte.

2. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">MQTT aktivieren</span>: Wenn MQTT aktiviert wird, werden zum ersten weitere Einstellungen freigeschaltet, die für
   die Funktionalität von MQTT benötigt werden.
   ::: warning Achtung
   <span style="color:red; font-size:1em; font-weight: bold" >Der ioBroker MQTT Adapter muss installiert sein!</span><br>
   <span style="color:orange; font-size:1em; font-weight: bold" >Falls er nicht installiert ist, wird eine Meldung angezeigt und MQTT kann nicht aktiviert werden</span>
   :::

   ![WallpanelAdapterConfig_mitMqtt.png](../../.vuepress/public/media/wallpanel/WallpanelAdapterConfig_withMqtt.png#mqttImage)<br>
   1.<span style="color:#cf3424; fontSize:1.1em; font-weight:bold">MQTT Instanz</span>: Die MQTT Instanzen, die auf dem Server verfügbar sind, werden automatisch im Dropdown
   angezeigt.<br>
   2.<span style="color:#cf3424; fontSize:1.1em; font-weight:bold">MQTT aktiviert</span>: Hier wird angezeigt, ob dieses Tablet MQTT benutzen soll oder nicht.<br>
   3.<span style="color:#cf3424; fontSize:1.1em; font-weight:bold">MQTT Topic</span>: Dieses Feld wird nur sichtbar, wenn das Tablet MQTT benutzt. Hier wird der Topic angezeigt,
   der für dieses Tablet konfiguriert wurde.<br>

### Gerät Hinzufügen Fenster

3. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Gerät Hinzufügen</span>: Button [Bild 1](#admin-konfiguration) beim Drücken öffnet sich ein Fenster, in dem
   dann die Konfigurationen eingetragen wird.

   ::: warning Achtung
   <span style="color:orange; font-size:1em; font-weight: bold" >Der Adapter muss laufen, um ein Tablet hinzuzufügen, falls der Adapter nicht läuft, wird eine entsprechende Meldung
   im Fenster angezeigt.</span><br>
   ![AdapterOffline.png](../../.vuepress/public/media/wallpanel/AdapterOffline.png#mqttImage)
   :::

Wenn der Adapter läuft, wird ein Fenster mit Eingabemöglichkeiten geöffnet.<br>
![WallpanelAddDevice.png](../../.vuepress/public/media/wallpanel/WallpanelAddDevice.png#image)<br>

1. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Gerät Name</span>: Hier müsst ihr den Namen des Tablets eingeben, den Namen könnt ihr frei
   vergeben <span style="color:#ffa500">(</span>maximal 20 Zeichen<span style="color:#ffa500">)</span>, aber Achtung dieser Name kann nicht geändert werden, da er für die ID des
   Geräteordners verwendet wird.<br>
2. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Gerät IP</span>: Die IP-Adresse des Gerätes diese wird geprüft, ob sie auch richtig angegeben wurde, es sind nur
   gültige IPv4 erlaubt z. B. 192.168.0.1 die Punkte werden automatisch nach jeder 3. Stelle gesetzt.

   ::: warning Achtung
   <span style="color:orange; font-size:1.3em; font-weight: bold" >Der Name und die IP-Adresse dürfen nur <span style="color:red; fontSize:1em; font-weight:bold">1x</span>
   vorhanden
   sein, wenn diese doppelt vorhanden sind, wird eine Meldung angezeigt.</span>
   :::

3. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Gerät Port</span>: hier gebt ihr den Port, den ihr in Wallpanel App konfiguriert habt
   an <br> <span style="color:#ffa500">(</span>Standard Port ist<span style="color:orange; fontSize:1.1em; font-weight:bold">2971</span><span style="color:#ffa500">)</span>.<br>

4. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Tablet aktiviert</span>: Wenn aktiviert, wird das Tablet abgefragt <span style="color:#ffa500">(</span>
   standardmäßig eingeschaltet<span style="color:#ffa500">)</span>.<br>

5. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Tablet MQTT aktiviert</span>: Hier wird die MQTT Abfrage für dieses Tablet aktiviert.<br>

6. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">MQTT Topic</span>: ist nur sichtbar, wenn der Tablet MQTT aktiviert ist. Hier gebt ihr den Topic an hier ein
   Beispiel wie es ausschauen kann<span style="color:#ffa500">(</span>Wichtig<span style="color:red; font-size:1.3em; font-weight: bold"> / </span>muss da
   sein<span style="color:#ffa500">)</span>Beispiel: <span style="color:orange; fontSize:1.1em; font-weight:bold">wallpanel/samsung</span> dieses Feld wird überprüft, ob der Topic
   gültig ist <span style="color:#ffa500">(</span>weitere Informationen zur<span style="color:#ffa500">)</span>[APP MQTT Einstellungen](/de/wallpanel/app/mqtt-settings)).<br>

7. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">MQTT Topic Vorschlag</span>: Hier wird der Anfang vom
   Topic<span style="color: green; font-size:1.3em; font-weight:bold" >wallpanel/</span> vorgeschlagen, ihr könnt es nutzen, falls ihr in der App
   auch <span style="color: green; font-size:1.3em; font-weight:bold"> wallpanel/</span> als Anfang genommen habt, falls nicht, schreibt euren eigenen in das Feld rein.

Die Felder, die mit einem <span style="color:red; fontSize:1.3em; font-weight:bold">*</span> gekennzeichnet sind,<span style="color: red; font-size:1.3em; font-weight:bold">
müssen</span> angegeben werden, sonst kann man das Gerät nicht anlegen, sobald alles richtig ausgefüllt wurde, kann man dann auf Hinzufügen klicken. Jetzt wird überprüft, ob das
Gerät erreichbar ist, wenn die Anfrage an das Gerät erfolgreich war, wird eine entsprechende Meldung angezeigt.<br>
Und nach 2 Sekunden schlisst sich das Fenster und das Gerät, wird in der Ansicht angelegt.<br>

#### Geräte Erstellung erfolgreich

![AddDeviceSuccessful.gif](../../.vuepress/public/media/wallpanel/AddDeviceSuccessful.gif#gif)

Falls die Prüfung <Badge text="nicht erfolgreich" type="danger" vertical="middle"/> war, wird eine Fehlermeldung angezeigt.

#### Geräte Erstellung fehlgeschlagen

![AddDeviceError.gif](../../.vuepress/public/media/wallpanel/AddDeviceError.gif#gif)

### Mögliche Fehler

Das sind nur ein paar mögliche Fehler, die angezeigt werden können, da ich hier nicht alle Fehler reproduzieren kann, können also noch andere Fehler angezeigt werden, dazu bitte im
Internet suchen, was diese bedeuten.
::: danger ECONNREFUSED
Verbindung vom Server abgelehnt.<span style="color:#ffa500">(</span>Server ⇨ Wallpanel App<span style="color:#ffa500">)</span><br>
Überprüfen Sie die IP-Adresse und Port und ob die App auf dem Gerät aktiviert ist.
:::
::: danger timeout of 15000ms exceeded
Verbindung zum Gerät dauert zu lange.<span style="color:#ffa500">(</span>Gerät ⇨ Tablet<span style="color:#ffa500">)</span><br>
Überprüfen Sie die IP-Adresse und Port und ob das Gerät im Netzwerk ist.
:::

### Tablet Card's

4. Die Tablet Card haben 2 Buttons <span style="color: #4dabf5; font-size:1.3em; font-weight:bold" >Gerät Bearbeiten</span>
   und <span style="color: red; fontSize: 1.3em; font-weight:bold">Gerät Löschen</span> außerdem zeigen sie noch ein paar Informationen an.<br>
   ![WallpanelCard.png](../../.vuepress/public/media/wallpanel/deviceCard.png#image)
	1. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Geräteinformation</span>: Hier wird der Name des Gerätes angezeigt, das beim Erstellen angegeben wurde. Die
	   Farbe sagt zusätzlich zu der Anzeige aktiviert oder deaktiviert, ob das Gerät beim Abfragen berücksichtigt wird.
	2. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Gerät Bearbeiten</span>: Hier drüber kann man das Gerät bearbeiten. Beim Klick auf den Button öffnet sich ein
	   Fenster mit vorausgefüllten Feldern, die man bearbeiten kann.

### Gerät Bearbeiten

![WallpanelEditDevice.png](../../.vuepress/public/media/wallpanel/WallpanelEditDevice.png#image)

::: warning Achtung
<span style="color:orange; font-size:1em; font-weight: bold" ><span style="color:#cf3424; font-size:1em; font-weight:bold" >Gerät Name</span>: Der Name des Tablets kann nicht
geändert werden! <br>
Da dieser für die ID des Geräteordners verwendet wird, falls ihr ein anderen Namen haben wollt, müsst ihr das Gerät erst löschen und dann neu anlegen.</span>
:::
:::tip Info
Alles andere kann geändert werden, es werden die dieselben Prüfungen wie beim Anlegen vom Gerät durchgeführt.
:::

### Gerät Löschen

3. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Gerät Löschen</span>: Beim Klick auf den Button öffnet sich ein Bestätigungsfenster, sobald dieses bestätigt wurde,
   wird das Gerät aus der Konfiguration gelöscht, jetzt nur noch Speichern.
   ::: warning Achtung!
   <span style="color:orange; font-size:1em; font-weight: bold" > Beim Speichern und anschließendem Neustarten des Adapters werden die Datenpunkte, die zu dem Tablet gehören,
   gelöscht und können nicht wiederhergestellt werden.</span>
   :::

![WallpanelDeleteDevice.png](../../.vuepress/public/media/wallpanel/WallpanelDeleteDevice.png#image)

### GitHub Issues und Dokumentation Seite

5. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">GitHub Issues</span>: [Bild 1](#admin-konfiguration) Hier kommt ihr direkt zu den GitHub Issues von diesem
   Adapter, falls ihr Probleme habt legt bitte ein Issue an.
6. <span style="color:#cf3424; fontSize:1.1em; font-weight:bold">Docs</span>: [Bild 1](#admin-konfiguration) Hier kommt ihr direkt zu der Dokumentationen von diesem Adapter.

