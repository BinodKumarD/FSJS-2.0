// Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

function getFileExtension(filename) {
  var fileExtension = filename.split('.').pop();
  console.log(fileExtension);
}

getFileExtension("sample.txt"); // Output: txt
getFileExtension("sample.pdf"); // Output: pdf
getFileExtension("sample.docs"); // Output: docs
getFileExtension("sample.img"); // Output: img

// In this program, the getFileExtension function takes a filename as an argument and splits the string into an array of substrings using the . character as a separator. The pop method is then used to retrieve the last element of the array, which is the file extension. Finally, the file extension is logged to the console using console.log.