# Charger

![charger](/images/media/Fully-Tablet-Control/charger.png)

Here the ID of the charger must be entered so that the tablet can be charged.

1. charging control Switch on or switch off, if switched off the adapter ignores everything that has to do with charging the tablet.
   warnings for low battery.

2. not filling is automatically filled after a reload.

3. data point ID (either copy from iobroker objects or select by button) of the charger which should be switched on and off.

4. charge mode selectable are **continuous current** or **charge cycle** with both the **ID must be entered** with continuous current the tablet will be
   and with charge cycle the tablet will start charging at e.g. 20% and stop charging at 85%. \
   if **off** is selected the charging control for this tablet will be turned off there is also no **ID** to enter.
   ![charger-mode](/images/media/Fully-Tablet-Control/charger-mode.png)

5. **(only relevant for charging cycle)** Charging start from this value the tablet starts charging.

6. **(only relevant for charging cycle)** Charging stop up to this value the tablet is charged.
