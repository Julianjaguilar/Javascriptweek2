//queryselector to our Password,Length,Uppercase,lowercase and symbols.
const password_el = document.querySelector('#password');
const length_el = document.querySelector('#length');
const uppercase_el = document.querySelector('#uppercase');
const lowercase_el = document.querySelector('#lowercase');
const numbers_el = document.querySelector('#numbers');
const symbols_el = document.querySelector('#symbols');

//queryselector for our buttons
const generate_btn = document.querySelector('#generate');

const copy_btn = document.querySelector('#copy');

// Symbols for our Uppercase,Lowercase,Numbers and special symbols
const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
const numbers_chars = "123456789";
const symbols_chars = "!@#$%^&*()";

// creating 2 functions for our generate password and copy //

function GeneratePassword () {
  console.log("password")
  var password = "";
  var length = parseInt(length_el.value);
  var chars = "";

  chars += uppercase_el.checked ? uppercase_chars : "";
  chars += lowercase_el.checked ? lowercase_chars : "";
  chars += numbers_el.checked ? numbers_chars : "";
  chars += symbols_el.checked ? symbols_chars : "";

  for(let i = 0; i <= length; i++){
    let rand = Math.floor(Math.random()* chars.length);
    password += chars.substring(rand, rand + 1);
    
  }
  password_el.value = password;
  
  
}


generate_btn.addEventListener('click', GeneratePassword);

