// Allow user to access course if he is:
// logged in from email 
// logged in from Google
// logged in from Facebook

var email = false;
var facebook = false;
var google = false;

if (facebook || google || email) {
    console.log("Login success");
} else {
    console.log("Login failure");
}
