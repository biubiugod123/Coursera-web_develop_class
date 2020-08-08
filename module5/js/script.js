//console.log(document.getElementById("title"));
//console.log(document instanceof HTMLDocument);

function sayHello(){
  var name =
    document.getElementById("name").value;
    var message = "<h2>Hello " + name + "!</h2>";
    document.getElementById("content").innerHTML = message;

    if (name === "student"){
      var title =
      document.querySelector("#title").textContent;

      title += " & Lovin' it!";
      document.querySelector("#title").textContent = title;
    }

}
