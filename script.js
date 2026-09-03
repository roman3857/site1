const user = {
  name: `Roman`,
  surname: `Shakhrai`,
};

const userTemplete = document.querySelector("#countryTemplate");
const templateFunction = Handlebars.compile(userTemplete.innerHTML);
const userMarkup = templateFunction(user);
console.log(userMarkup);
document.querySelector(".userContainer").innerHTML = userMarkup;
import countries from "./coutries.json";
