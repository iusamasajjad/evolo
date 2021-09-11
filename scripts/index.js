$(document).ready(function () {
  $("#registration").validate({
    // initialize the plugin
    rules: {
      firstName: {
        required: true,
      },
    },
    messages: {
      firstName: "First Name is Required",
    },
    highlight: function(element) {
        $(element).parent().addClass('has-error');
      },
      unhighlight: function(element) {
        $(element).parent().removeClass('has-error');
      },
  });
// login-form-validation 
$("#login").validate({
    // initialize the plugin
    rules: {
      userName: {
        required: true,
      },
      password:{
          required: true,
          minlength: 8,
      }
    },
    messages: {
      userName: "Username is required",
      password: {
          required: "Password is required",
          minlength: jQuery.validator.format("At least {0} characters required!"),
      },
    },
    highlight: function(element) {
        $(element).parent().addClass('has-error');
      },
      unhighlight: function(element) {
        $(element).parent().removeClass('has-error');
      },
  });
});
