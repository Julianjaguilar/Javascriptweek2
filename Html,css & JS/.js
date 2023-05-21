//queryselector to our Password,Length,Uppercase,lowercase and symbols.
const password_el = document.querySelector('#Password');
const length_el = document.querySelector('#length');
const uppercase_el = document.querySelector('#uppercase');
const lowercase_el = document.querySelector('#lowercase');
const numbers_el = document.querySelector('#numbers');
const symbols_el = document.querySelector('#symbols');

//queryselector for our buttons
const generate_btn = document.querySelector('#generate');
generate_btn.addEventListener('click', Generatepassword);
const copy_btn = document.querySelector('#copy');
generate_btn.addEventListener('click', CopyPassword);
// Symbols for our Uppercase,Lowercase,Numbers and special symbols
const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
const numbers_chars = "123456789";
const symbols_chars = "!@#$%^&*()";

// creating 2 functions for our generate password and copy //

function GeneratePassword () {
  let password = "";
  let length = length_el.value;
  let chars = "";

  chars += uppercase_el.checked ? uppercase_chars : "";
  chars += lowercase_el.checked ? lowercase_chars : "";
  chars += numbers_el.checked ? numbers_chars : "";
  chars += symbols_el.checked ? symbols_chars : "";

  for(let i = 0; i <= length; i++);{
    let rand = Math.floor(math.random()* chars.length);
    password += chars.substring(rand, rand + 1);
  }
  password.el.value = password;

}






