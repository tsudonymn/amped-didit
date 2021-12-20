binary_sensor:
 - platform: template
   sensor:
     needs_water:
       friendly_name: "Does tank need water?"
       value_template: >-
          {% set state = states('sensor.ultrasonic_sensor') %}
          {% if is_number(state) and state | float > .3 %}
            yes
          {% else %}
            no
          {% endif %}