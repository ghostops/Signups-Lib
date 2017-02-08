## Signups JQuery Library

This is a small JQuery library built for interacting with the Signups API, but also generate forms in general.

## Basic setup

The form element will be generated for you, so apply it to a wrapper.

~~~~
$("#formWrapper").signupForm("form.json");
~~~~

## JSON Schema

### Main Object:

~~~~
{
  "form": {},
  "fields": []
}
~~~~

| Attribute   |      Use   | 
|----------|-------------|
| form |  Store attributes and data related to the form-element here |
| fields[] |  Store each field in the form here |

### Example Form Object:

~~~~
{
  "form": {
    "attributes": {
      "action": "/",
      "autocomplete": "on",
      "enctype": "text/plain",
      "method": "GET",
      "name": "form",
      "novalidate": "true"
    }
  }
}
~~~~
| Attribute   |      Use   | 
|----------|-------------|
| action |  Form action, where you want to send the data |
| autocomplete |    (HTML5) If autocompleteion will be turned on for the form   |
| enctype | Form encoding, usualy ```application/json``` or ```application/x-www-form-urlencoded``` |
| method | Form method, usualy GET/POST |
| name | Form name |
| novalidate | Skip validation of the form |

### Example Fields Array

~~~~
"fields": [
  {
    "element": "input",
    "label": "Label for input",
    "attributes": {
      "type": "text",
      "value": "Default Value",
      "autocomplete": "on",
      "min": "1",
      "max": "9",
      "pattern": "^hey",
      "placeholder": "Default placeholder",
      "required": "true",
      "step": "false",
      "class": "default-class",
      "name": "defaultName"
    },
    "grid": {
      "size": 50
    }
  },
  {
    "element": "select",
    "label": "This is a select",
    "attributes": {
      "class": "defaultSelect"
    },
    "options": [
      {
        "value": "One",
        "label": "Uno",
        "select": "false"
      },
      {
        "value": "Two",
        "label": "Dos",
        "select": "true"
      }
    ]
  },
  {
    "element": "datepicker",
    "label": "Your age",
    "attributes": {
      "class": "datepicker-class" // Will be applied after the default datepicker class
    },
    "settings": {
      // Datepicker plugin settings
    }
  }
]
~~~~

| Element   |      Use   | 
|----------|-------------|
| input |  A regular input-element with a type of your choice. |
| select |  A regular select with the options of your liking |
