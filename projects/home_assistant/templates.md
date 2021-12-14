# Trying to build a card that will just display an answer instead of a number

- Range sensor gives back a number
  - if that number is great than .3m than the tank needs water
  - I want a card to say that instead of having to remember the number

---
template:
  - sensor:
      - name: Does tank need water?
        state: |
          {% if sensor.ultrasonic_sensor >= .3 %}
            yes
          {% else %}
            no
          {% endif %}

---
template:
  - sensor:
      - name: Does tank need water?
        state: >
          {% set state = states('sensor.ultrasonic_sensor') %}
          {% if is_number(state) and state | float > .3 %}
            yes
          {% else %}
            no
          {% endif %}

---
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

---

Template beginner tutorial
https://www.youtube.com/watch?v=GnW0mLt2YLg
