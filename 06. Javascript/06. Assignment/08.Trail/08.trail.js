// Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string.

// The trim() method is used to remove any trailing whitespace at the beginning and the end of a string.

var myString = "   My Name is Binod kumar   ";
console.log(myString); // Output: "   My Name is Binod kumar   "
console.log(myString.trim()); // Output: "My Name is Binod kumar"

// In the above example, there are some trailing whitespaces at the beginning and the end of the string "My Name is Binod kumar" but after using the trim() method it removes all the whitespaces and shows the string without any whitespaces.


var myString = "   Binod kumar";
console.log(myString);  // Output: "   Binod kumar"
console.log(myString.trim()); // Output: "Binod kumar"

// In this example, there are some trailing whitespaces at the begininning of the string "Binod kumar" but after using the trim() method it removes all the whitespaces and shows the string without any whitespaces.

// It's important to note that the trim() method does not remove any whitespaces between words, it only removes whitespaces at the beginning and the end of a string.

// Also, this method can be used on any string variable, and it does not change the original string, it returns a new string with the trailing whitespaces removed.