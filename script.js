function myfunction() {
  window.open("index.html", "_self");
}

function myfunctiontwo() {
  window.open("games.html", "_self");
}

function myfunctionthree() {
  window.open("sevices.html", "_self");
}

function myfunctionfour() {
  window.open("service_coding.html", "_self");
}

function myfunctionfive() {
  window.open("news.html", "_self");
}

function myfunctionsix() {
  window.open("login.html", "_self");
}

function myfunctionsignup() {
  window.open("signup.html", "_self");
}

function myfunctionhome() {
  window.open("index.html", "_self");
}

function myfunctionfirstnews() {
  window.open("FirstNews.html", "_self");
}

function myfunctionSecondnews() {
  window.open("SecondNews.html", "_self");
}

function myfunctionThirdnews() {
  window.open("ThirdNews.html", "_self");
}

function myfunctionFourthnews() {
  window.open("FourthNews.html", "_self");
}

function myfunctionFifthnews() {
  window.open("FifthNews.html", "_self");
}

function myfunctionq() {
  window.open("questions.html", "_self");
}

function myfunctioncodingser() {
  window.open("service_coding.html", "_self");
}

function myfunctiondataana() {
  window.open("services-DataAnalsis.html", "_self");
}

function myfunctioncomputer() {
  window.open("services-computerEngeneer.html", "_self");
}

function myfunctiond() {
  window.open("service_Design.html", "_self");
}

function myfunctionsubmit() {
  window.open("sevices.html", "_self");
}

function myfunctionsara() {
  window.open("profile_1.html", "_blank");
}

function myfunctionjohn() {
  window.open("profile_4.html", "_blank");
}

function myfunctionfaris() {
  window.open("profile_3.html", "_blank");
}

function myfunctionsofia() {
  window.open("profile_2.html", "_blank");
}

function myfunctionspace() {
  window.open("https://app.codemonkey.com/space/challenges/1", "_blank");
}

function myfunctioncoding() {
  window.open("https://app.codemonkey.com/challenges/0", "_blank");
}

function myfunctionbeaver() {
  window.open(
    "https://app.codemonkey.com/beaver-achiever/hour-of-code/1",
    "_blank"
  );
}

function myfunctiondodo() {
  window.open(
    "https://app.codemonkey.com/hour-of-code/dodo-does-math/challenges/1",
    "_blank"
  );
}

function myfunctionjumper() {
  window.open(
    "https://app.codemonkey.com/courses/blocks-hour-of-code#1",
    "_blank"
  );
}

function myfunctionmoon() {
  window.open(
    "https://app.codemonkey.com/hour-of-code/moon-lander/course#1",
    "_blank"
  );
}

function myfunctionbanana() {
  window.open("https://app.codemonkey.com/banana-tales/challenges/1", "_blank");
}

function myfunctiondesign() {
  window.open(
    "https://app.codemonkey.com/hour-of-code/game-builder/course#1",
    "_blank"
  );
}

function myfunctionhourofcode() {
  window.open(
    "https://app.codemonkey.com/hour-of-code/trivia-chatbot/course#1",
    "_blank"
  );
}

function myfunctionjr() {
  window.open(
    "https://app.codemonkey.com/junior/chapters/sequencing/challenges/1",
    "_blank"
  );
}

function myfunctioncssdiner() {
  window.open("https://flukeout.github.io/", "_blank");
}

function registration() {
  var name = document.getElementById("firstName").value;
  var email = document.getElementById("username").value;
  var pwd = document.getElementById("password").value;
  var cpwd = document.getElementById("checkpassword").value;

  var pwd_expression =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  var letters = /^[A-Za-z]+$/;
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (name == "") {
    label.removeClass("active highlight");
  } else if (!letters.test(name)) {
    alert("Name field required only alphabet characters");
  } else if (email == "") {
    label.removeClass("active highlight");
  } else if (!filter.test(email)) {
    alert("Invalid email");
  } else if (pwd == "") {
    label.removeClass("active highlight");
  } else if (cpwd == "") {
    label.removeClass("active highlight");
  } else if (pwd != cpwd) {
    alert("Password not Matched");
  } else if (document.getElementById("checkpassword").value.length < 6) {
    alert("Password minimum length is 6");
  } else if (document.getElementById("checkpassword").value.length > 12) {
    alert("Password max length is 12");
  } else {
    // Redirecting to other page or webste code.
    window.open("index.html");
  }
}

function registrationone() {
  var email = document.getElementById("username").value;
  var pwd = document.getElementById("password").value;

  var pwd_expression =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  var letters = /^[A-Za-z]+$/;
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (email == "") {
    label.removeClass("active highlight");
  } else if (!filter.test(email)) {
    alert("Invalid email");
  } else if (pwd == "") {
    label.removeClass("active highlight");
  } else {
    // Redirecting to other page or webste code.
    window.open("index.html");
  }
}

function registrationtwo() {
  var email = document.getElementById("username").value;
  var pwd = document.getElementById("password").value;
  var cpwd = document.getElementById("checkpassword").value;

  var pwd_expression =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  var letters = /^[A-Za-z]+$/;
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (email == "") {
    label.removeClass("active highlight");
  } else if (!filter.test(email)) {
    alert("Invalid email");
  } else if (pwd == "") {
    label.removeClass("active highlight");
  } else if (cpwd == "") {
    label.removeClass("active highlight");
  } else if (pwd != cpwd) {
    alert("Password not Matched");
  } else if (document.getElementById("checkpassword").value.length < 6) {
    alert("Password minimum length is 6");
  } else if (document.getElementById("checkpassword").value.length > 12) {
    alert("Password max length is 12");
  } else {
    // Redirecting to other page or webste code.
    window.open("login.html");
  }
}
