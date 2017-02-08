// Global variables
(function($) {
  var ApplicapbleDOMElements = {
    SELECT: "select"
  };

  $.fn.signupForm = function(params) {
    if(typeof params == "string") {
      params = { json: params };
    }

    params = $.extend({
      json: "form.json"
    }, params);

    console.log(params);
    var $target = $(this);

    $.getJSON(params.json, function(formObject) {
      // Create the form element
      var form = document.createElement("form");

      // Set the attributes
      $.each(formObject.form.attributes, function(key, value) {
        form.setAttribute(key, value);
      });

      // Create the form children elements
      $.each(formObject.fields, function(key, data) {
        var element = document.createElement(data.element);

        $.each(data.attributes, function(key, value) {
          element.setAttribute(key, value);
        });

        // Select specific
        if(data.element == ApplicapbleDOMElements.SELECT) {
          $.each(data.options, function(key, value) {
            optionElement = document.createElement("option");

            $.each(value, function(key, value) {
              optionElement.setAttribute(key, value);
            });

            element.appendChild(optionElement);
          });
        }

        if(data.label) {
          labeledElement = document.createElement("label");
          labeledElement.classList.add((data.attributes.type || 'type') + "-" + data.element);
          labeledElement.innerHTML = "<span class='label-text'>" + data.label + "</span>";
          labeledElement.appendChild(element);
          element = labeledElement;
        }

        if(data.grid) {
          gridElement = document.createElement("div");
          gridElement.setAttribute("class", 'size-' + data.grid.size);
          gridElement.appendChild(element);
          element = gridElement;
        }

        form.appendChild(element);
      });

      // Append the form to the wrapper
      $target.append(form);

      return this;
    });
  };
})(jQuery);