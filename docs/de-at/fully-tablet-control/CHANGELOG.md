---

# This control sidebar index

index: 11

# This is the icon of the page

icon: article

# This is the title of the article

title: Changelog

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

## Version

### 0.3.6-1 (2021-06-10)

* (xXBJXx) ändern von Adapter Dokumentation Link [(issue #193)](https://github.com/xXBJXx/ioBroker.fully-tablet-control/issues/193)

### 0.3.6-0 (2021-05-27)

* (xXBJXx) State "s" hat keine vorhandene Objekt meldung behoben [(issue #184)](https://github.com/xXBJXx/ioBroker.fully-tablet-control/issues/184)

### 0.3.5-0 (2021-05-25)

* (xXBJXx) Helligkeit Modus wechsel optimiert
* (xXBJXx) Adapterebene auf 3 gesetzt
* (xXBJXx) Abhängigkeiten aktualisiert
* (xXBJXx) Prüfen, ob Adapterkonfiguration gültig ist geändert
* (xXBJXx) Prüfung und Test für Node.js 16 hinzugefügt [(issue #170)](https://github.com/xXBJXx/ioBroker.fully-tablet-control/issues/170)

### 0.3.4-0 (2021-04-30)

* (xXBJXx) Aktualisierungen der Abhängigkeiten
* (xXBJXx) falschen Typ von displayWidthPixels und displayHeightPixels korrigiert [(issue #164)](https://github.com/xXBJXx/ioBroker.fully-tablet-control/issues/164)
* (xXBJXx) encodeUrl hinzugefügt und Log-Meldung geändert

### 0.3.3-beta.0 (2021-02-14)

* (xXBJXx) README bearbeitet
* (xXBJXx) Prüfung für batteryLevel = -1 % entfernt
* (xXBJXx) Funktion camshot um Serienaufnahmen erweitert, und es ist nun möglich, mehrere Bilder aufzunehmen und zu speichern.
  Neue Registerkarte in der Konfigurationsseite hinzugefügt.
* (xXBJXx) Fehler bei Helligkeit-CheckIntervall behoben (wird jetzt wie vorgesehen alle x Minuten geprüft, ob sich die Helligkeit geändert hat)

### 0.3.2-beta.0 (2021-01-24)

* (xXBJXx) Problem mit (has no existing object) für den neuen JS-Controller behoben [(issue #114)](https://github.com/xXBJXx/ioBroker.fully-tablet-control/issues/114)
* (xXBJXx) behoben [(issue #120)](https://github.com/xXBJXx/ioBroker.fully-tablet-control/issues/120) Prüfung, ob der Bildschirmschoner definiert ist hinzugefügt
* (xXBJXx) Fehler in der Helligkeitssteuerung behoben
* (xXBJXx) Löschung des Bildschirmschoners aus der Konfiguration hinzugefügt [(issue #124)](https://github.com/xXBJXx/ioBroker.fully-tablet-control/issues/124)

### 0.3.1-beta.2 (2021-01-08)

* (xXBJXx) behoben TypeError: Cannot read property 'val' of null [(issue #113)](https://github.com/xXBJXx/ioBroker.fully-tablet-control/issues/113)

### 0.3.1-beta.1 (2021-01-01)

* (xXBJXx) Telegramm-Fehlermeldung beim Zugriff auf die Config-Seite behoben [(issue #109)](https://github.com/xXBJXx/ioBroker.fully-tablet-control/issues/109)

### 0.3.1-beta.0 (2020-12-31)

* (xXBJXx) test-and-release.yml Update
* (xXBJXx) admin Seite überarbeitet
* (xXBJXx) Prüfung auf 0/1 für Steckdosen implementiert [(issue #66)](https://github.com/xXBJXx/ioBroker.fully-tablet-control/issues/66)

### 0.3.0-beta.5 (2020-10-24)

* (xXBJXx) Auslesen des Benutzers aus Telegramm-Adapter-Instanz 0–10 hinzugefügt
* (xXBJXx) aktuelle Seite zu Geräte-Info hinzugefügt

### 0.3.0-beta.4 (2020-10-08)

* (xXBJXx) Bewegungsmelder ist nicht definiert Warnmeldung behoben

### 0.3.0-beta.3 (2020-10-08)

* (xXBJXx) camshotUrl-Ordner behoben

### 0.3.0-beta.2 (2020-10-06)

* (xXBJXx) Prüfung auf ungültigen batteryLevel hinzugefügt

### 0.3.0-beta.0 (2020-10-05)

* (xXBJXx) manuelle Helligkeit überarbeitet
* (xXBJXx) automatische Helligkeit überarbeitet
* (xXBJXx) manuelle Helligkeit erweitert um die Nachmittagssteuerung
* (xXBJXx) Config-Seite überarbeitet
* (xXBJXx) StartUrl-Befehl hinzugefügt
* (xXBJXx) Befehl motionDetection on/Off hinzufügen
* (xXBJXx) Befehl camshot und 2 Zustände für Image hinzufügen (base64 und imageURl)
* (xXBJXx) README ändern

### 0.2.15

* (xXBJXx) media Volume hinzufügen

### 0.2.14

* (xXBJXx) Fehler behoben

### 0.2.12

* (xXBJXx) Bildschirmschoner-Helligkeitskontrolle kann ein- oder ausgeschaltet werden
* (xXBJXx) Abhängigkeiten aktualisiert

### 0.2.11

* (xXBJXx) neue Ladeoption hinzugefügt
* (Steff42) Tippfehler in words.js behoben

### 0.2.10

* (xXBJXx) Anfrage-Log-Ausgabe angepasst

### 0.2.9

* (xXBJXx) manuelle Änderung der Nachthelligkeit hinzugefügt

### 0.2.8

* (xXBJXx) Fehler in Helligkeitsregelung und Ladefunktion behoben

### 0.2.7

* (xXBJXx) Astrozeit hinzugefügt

### 0.2.6

* (xXBJXx) Helligkeitsregelung geändert und Konfigurationsseite geändert

### 0.2.5

* (xXBJXx) FullyBrowser implementiert
* (xXBJXx) einige Bugs behoben

### 0.2.4

* (xXBJXx) Bildschirmschoner Zeit jetzt in 1 min Schritten eingestellt
* (xXBJXx) State_of_charge angepasst
* (xXBJXx) Intervallgrenze hinzugefügt
* (xXBJXx) Ladesteuerung ein-/ausschalten hinzugefügt
* (xXBJXx) Helligkeit einzeln aktiviert

### 0.2.2

* (xXBJXx) Adapter Name ändern

### 0.2.0

* (xXBJXx) Ausgabe der Ladewarnmeldung angepasst

### 0.1.9

* (xXBJXx) Fehler beim automatischen Wechsel zum Home View Widget 8 behoben

### 0.1.8

* (xXBJXx) automatischer Wechsel in die Home-Ansicht hinzugefügt

### 0.1.5

* (xXBJXx) Helligkeitsfehler behoben

### 0.1.4

* (xXBJXx) manuell StateChange optimiert

### 0.1.3

* (xXBJXx) Konfigurationsseite geändert

### 0.1.2

* (xXBJXx) Log-Level angepasst

### 0.1.1

* (xXBJXx) README.md bearbeitet

### 0.1.0

* (xXBJXx) Beta Release

### 0.0.8

* (xXBJXx) Gerät aktivieren hinzugefügt
* (xXBJXx) Fehlerkorrekturen

### 0.0.7

* (xXBJXx) zurück zu Fully Browser implementiert
* (xXBJXx) Fehlerkorrekturen

### 0.0.6

* (xXBJXx) Bildschirmschoner-Auswahl implementiert
* (xXBJXx) Bewegungsmelder implementiert

### 0.0.5

* (xXBJXx) manuelle Helligkeitssteuerung implementiert
* (xXBJXx) Bildschirmschoner hinzugefügt

### 0.0.4

* (xXBJXx) Anfrage für mehrere Geräte optimiert
* (xXBJXx) Helligkeitsregelung implementiert

### 0.0.3

* (xXBJXx) Funktion "Laden" optimiert
* (xXBJXx) Auswahlbildschirm für Dauerbetrieb hinzugefügt
* (xXBJXx) Telegram warnung hinzugefügt

### 0.0.2

* (xXBJXx) Funktion zum Laden hinzugefügt

### 0.0.1

* (xXBJXx) erste Freigabe