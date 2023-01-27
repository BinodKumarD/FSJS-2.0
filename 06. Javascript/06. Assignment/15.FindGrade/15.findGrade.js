/*Write a program which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F*/

    function assignGrade(score) {
        if (score >= 80 && score <= 100) {
          return "A";
        } else if (score >= 70 && score <= 89) {
          return "B";
        } else if (score >= 60 && score <= 69) {
          return "C";
        } else if (score >= 50 && score <= 59) {
          return "D";
        } else if (score >= 0 && score <= 49) {
          return "F";
        } else {
          return "Invalid score";
        }
      }
      
      console.log(`Grade for score 87: ${assignGrade(87)}`); // prints "A"
      console.log(`Grade for score 72: ${assignGrade(72)}`); // prints "B"
      console.log(`Grade for score 65: ${assignGrade(65)}`); // prints "C"
      console.log(`Grade for score 55: ${assignGrade(55)}`); // prints "D"
      console.log(`Grade for score 40: ${assignGrade(40)}`); // prints "F"
      console.log(`Grade for score 120: ${assignGrade(120)}`); // prints "Invalid score"

    //   The above program uses if...else statements to check the score range and return the corresponding grade. The program also includes a check for an invalid score (i.e. a score less than 0 or greater than 100) and returns an appropriate message.
      
    //   we can test the program by calling the assignGrade(score) function and passing in different scores as arguments
