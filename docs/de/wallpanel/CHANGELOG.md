---

# This control sidebar index

index: 5

# This is the icon of the page

icon: list

# This is the title of the article

title: Changelog

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
- Changelog

# The page’s sidebar heading rendering depth.

headerDepth: 2
---

## Version
### 0.3.7 (2022-06-06)
* (xXBJXx) Node-Versionsunterstützung auf >= v15.x.x gesetzt, da neue Funktionen von Node.js benötigt werden.
* (xXBJXx) mqtt topic Anzeige Richtung korrigiert

### 0.3.6 (2022-05-30)
* (xXBJXx) Vorbereitung zur Veröffentlichung im Iobroker Repo. Adapter-Check Probleme bearbeitet

### 0.3.5 (2022-05-30)
* (xXBJXx) Aktualisierung des Changelogs und Behebung von Typproblemen

### 0.3.3 (2022-05-30)
* (xXBJXx) Update Abhängigkeiten

### 0.3.0 (2022-05-29)
* (xXBJXx) Admin UI zu einer neuen React UI umgebaut.
* (xXBJXx) Aktualisierung der Abhängigkeiten und Hinzufügen neuer Abhängigkeiten für die neue React UI.
* (xXBJXx) Codebereinigung
	* Eine Abfrage hinzugefügt, ob der Adapter im Debug-Modus läuft, um nicht so viel Log zu schreiben.
	* die Abfrage für die MQTT state's wurde überarbeitet.
	* Neuer Status hinzugefügt [mjpegStream, connected, json].
	* neuer Befehl hinzugefügt [settings], mit dem man die Einstellungsseite im Wallpanel aufrufen kann.
	* MQTT state Erstellung etwas angepasst, sodass der sensor Ordner nicht erstellt wird, wenn MQTT ausgeschaltet ist.
	* Löschfunktion hinzugefügt, um Geräte zu löschen, die nicht mehr konfiguriert sind.
	* Code angepasst für die neue React UI [onMessage] wurde aktiviert.
* (xXBJXx) README und Lizenzdatum aktualisieren


### 0.2.0-0.0 (2022-03-28)
* (xXBJXx) automatische Übersetzungen migriert von gulp nach ⇨ [iobroker/adapter-dev](https://github.com/ioBroker/adapter-dev)
* (xXBJXx) Abhängigkeiten aktualisiert
* (xXBJXx) Projekt von JavaScript auf TypeScript umgestellt
* (xXBJXx) behoben: [(issue #270)](https://github.com/xXBJXx/ioBroker.wallpanel/issues/270)

### 0.1.7-0 (2021-09-06)

* (xXBJXx) test-and-release.yml aktualisieren
* (xXBJXx) Aktualisierung der Abhängigkeiten
* (xXBJXx) Überprüfung der erstellten datenpunkt struktur hinzugefügt

### 0.1.6-0 (2021-02-26)

* (xXBJXx) README bearbeitet und unbenutzte Bilder gelöscht
* (xXBJXx) MQTT-Instanz Auswahl hinzufügen und automatisches löschen der states entfernt

### 0.1.5-0 (2021-01-27)

* (xXBJXx) Aktualisierung von dependabot.yml und test-and-release.yml
* (xXBJXx) Aktualisierungen der Abhängigkeiten
* (xXBJXx) README überarbeitet und Dokumentationslink hinzugefügt und LICENSE aktualisiert
* (xXBJXx) Code-Optimierung
* (xXBJXx) Stil der Konfigurationsseite angepasst

### 0.1.4-beta.4 (2020-10-08)

* (xXBJXx) README change

### 0.1.4-beta.3 (2020-10-08)

* (xXBJXx) Test and Release.yml change

### 0.1.4-beta.2 (2020-10-08)

* (xXBJXx) fix display bug

### 0.1.4-beta.1 (2020-10-07)

* (xXBJXx) README edited

### 0.1.4-beta.0 (2020-10-07)

* (xXBJXx) Added MQTT states query
* (xXBJXx) GitHub Actions added

### 0.1.3-0 (2020-09-08)

* (xXBJXx) code update

### 0.1.2-0 (2020-09-05)

* (xXBJXx) Dependency update and release

### 0.1.1

* (xXBJXx) added IP address datapoint
* (xXBJXx) wake state edit

### 0.1.0

* (xXBJXx) Revised code
* (xXBJXx) Documentation added
* (xXBJXx) lastInfoUpdate state added

### 0.0.2

* (xXBJXx) first Beta

### 0.0.1

* (xXBJXx) initial release