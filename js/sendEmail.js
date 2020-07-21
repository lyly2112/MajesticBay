jQuery(document).ready(function($) {
  "use strict";

  var contactform = $("form#contactform");
  contactform.submit(function (event) {
    event.preventDefault();

    // var params = contactform.serializeArray().reduce(function (obj, item) {
    //   obj[item.name] = item.value;
    //   return obj;
    // }, {});
    let params = {lol: "kek"};

    // Change to your service ID, or keep using the default service
    var service_id = "gmail";

    var template_id = "majestic_bay";
    contactform.find("send-button").text("Sending...");
    emailjs.send(service_id, template_id, params)
      .then(function () {
        alert("Sent!");
        contactform.find("send-button").text("Send");
      }, function (err) {
        alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
        contactform.find("send-button").text("Send");
      });

    return false;
  });
});