
# Config
Noch Kurtz zu der Config Seite was man einstellen muss.
![wallpanel_config.png](/images/media/Wallpanel/Wallpanel_config.png)

1. Hier wird der Abfrageintervall festgelegt **(Achtung nicht unter 10 sec einstellen)**.
2. Hier wird die Verwendung von MQTT eingeschaltet erst danach werden die daten von dem MQTT Adapter abgefragt und die states erstellt.
3. Hier wird die MQTT Instanz festgelegt die man Verwendet (die instanzen werden beim Aufrufen der seite von Iobroker abgefragt und auswählbar gemacht)    
4. Hier wird der Name von eurer Devise eingetragen (dieser wird dann für die Erstellung der Devise Ordner in den Datenpunkten verwendet).
5. Hier wird die Ip Adresse von eurem Device das ihr Abfragen bzw. Steuern wollt eingetragen **(wenn kein Name für das Devise eingetragen wurde, wird die Ip für die Devise Ordner verwendet)**.
6. Hier trage ihr den Port denn ihr in der Wallpanel app vergeben habt **Standard ist 2971**.
7. Hier muss das Base Topic von MQTT eingetragen werden so wie er in der Wallpanel App steht.
8. Hier kann man das Device von der Abfrage Deaktivieren, ohne es zu löschen.

