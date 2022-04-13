document.querySelector("#seeMessage").addEventListener("click", showMessage);
function showMessage() {
  let message;
  message = "Hello!"
  alert(message);
}

document.getElementsByClassName("arnold")[0].addEventListener("click", showBirthday);
document.getElementsByClassName("arnold")[1].addEventListener("click", showBirthday);
document.getElementsByClassName("arnold")[2].addEventListener("click", showBirthday);
function showBirthday() {
  let user = 'Arnold', age = 30, message = "Hello Arnold. Happy 30th Birthday!";
  alert(user);
  alert(age);
  alert(message);
}

document.querySelector("#hm").addEventListener("click", showBirthday);
function showBirthday() {
  let hello = "Hello";
  let message = " World!";
  alert(hello + message)
}

document.querySelector("#john").addEventListener("click", showAdminJohn);
function showAdminJohn() {
  let admin;
  let name;
  name = "John";
  admin = name;
  alert(admin);
}

document.querySelector("#nameOfPlanet").addEventListener("click", showPlanet);
function showPlanet() {
  let planet;
  planet = "Earth";
  alert(planet)
}
document.querySelector("#nameOfUser").addEventListener("click", showUser);
function showUser() {
  let user;
  user = "Arnold";
  alert(user)
}