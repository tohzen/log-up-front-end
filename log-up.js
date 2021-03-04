const getInput = require("./get-input.js");
const {
  isValidEmail,
  isValidPassword,
  isRegisteredUser,
  passwordMatches,
  password1,
  password2,
  password3,
  user1,
  user2,
  user3
} = require("./main.js");

// The code immediately above grabs the functions you'll
// need for this front-end code. Remember that you
// already have the back-end logic.
// (Check out main.js if you don't believe me!)

// Your job is just to make a user interface for it,
// getting the user's input from `getInput`, feeding it
// to the four back-end functions we're requiring in
// below, and then console.logging the right message.



const Email = process.argv[2];
const Password = process.argv[3];

if (passwordMatches(Email, Password)) {
  console.log("You're Logged In!");
}

if (isRegisteredUser(Email)) {
  if (!passwordMatches(Email, Password)) {
    console.log("Password Incorrect");
  }
} else {
  if (isValidEmail(Email) && isValidPassword(Password)) {
    console.log("Signed Up");
  } else if (!isValidEmail(Email)) {
    console.log("Invalid Email");
  } else if (!isValidPassword(Password)) {
    console.log("Invalid Password");
  }
}


  


  




// App Workflow:

// We'll be running our code as users by typing in
// `node [path to this file]` on the command line,
// followed by our Email address and our password.
// (Or the Email and pw we want to test!)
// We want to perform checks on that Email and
// password to arrive at one of the following messages
// for the user:

// 1. If the Email belongs to one of our registered
// users AND the password matches that user, tell them
// that they are logged in.

// 2. If the Email belongs to one of our registered
// users but the password does not match that user,
// tell them their password is incorrect.

// 3. If the Email does not belong to one of our
// registered users, and the Email and password are
// both valid, tell them they're signed up.

// 4. If the Email does not belong to one of our
// registered users, and the Email is not valid,
// tell them their Email is not valid. Preferably
// also tell them what makes a valid Email.

// 5. If the Email does not belong to one of our
// registered users, and the password is not valid,
// tell them their password is not valid. Preferably
// also tell them what makes a valid password.

// As long as given those inputs you get the right
// outputs, how your branching `if` logic works is
// up to you!

// Remember to test (using command-line calls to your
// app) each of those possibilities!

// You can and should use all four back-end functions
// from the first part of this assignment.

// Being sure to do all that's outlined above, write
// your code below!



