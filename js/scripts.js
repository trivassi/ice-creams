$(document).ready(function() {
  $("h1").click(function (event) {

  var flavors = ["chocolate", "mint", "strawberry", "vanilla"];
  var count = 1;

  flavors.forEach(function(flavor) {
    $("ul#flavors").append("<li>" + flavor + count + "</li>")
    count += 1;
  });

  event.preventDefault();


  });
});
