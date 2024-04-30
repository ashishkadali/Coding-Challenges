/**
 * Write a function called validateEmail that takes in a string and
 *  returns whether the string is a valid email address.
 *  For the purposes of this challenge, a valid email address is
 *  defined as a string that contains an @ symbol and a . symbol.
 */

function validateEmail(email){
      const reg = /^[a-z A-Z 0-9 \_ \.]+[@][a-z]+\.[a-z]{2,3}$/  
      return reg.test(email)
}

console.log(validateEmail('john@gmail.com'));