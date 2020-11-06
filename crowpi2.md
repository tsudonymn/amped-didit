- https://learn.adafruit.com/i2c-spi-lcd-backpack/python-circuitpython

```
def _sensors():

    contents = []

    if hasattr(psutil, "sensors_temperatures"):
        sensors_temperatures = psutil.sensors_temperatures()
        for name, entries in sensors_temperatures.items():
            for entry in entries:
                contents.append(
                    _format_info(entry.label or name, '%s °C' % entry.current))

    sbattery = psutil.sensors_battery()

    if sbattery:
        contents.append(_format_info('battery_percent', '%s %%' % sbattery.percent))
        contents.append(_format_info('secsleft', sbattery.secsleft))
        contents.append(_format_info('power_plugged', sbattery.power_plugged))
    _print_info(contents, 'Sensors') 
```
