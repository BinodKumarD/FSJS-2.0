/*Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    - The same groups apply to both men and women.
    - Underweight: BMI is less than 18.5
    - Normal weight: BMI is 18.5 to 24.9
    - Overweight: BMI is 25 to 29.9
    - Obese: BMI is 30 or more*/

function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    if (bmi < 18.5) {
        return("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return("Normal weight");
    } else if (bmi >= 25 && bmi <= 29.9) {
        return("Overweight");
    } else {
        return("Obese");
    }
}

console.log(`Weight: 55kg and height: 1.8m is ${calculateBMI(55, 1.8)} BMI`);
console.log(`Weight: 75kg and height: 1.9m is ${calculateBMI(75, 1.9)} BMI`);
console.log(`Weight: 85kg and height: 1.69m is ${calculateBMI(85, 1.69)} BMI`);
console.log(`Weight: 62kg and height: 1.2m is ${calculateBMI(62, 1.2)} BMI`);

// This function takes in two arguments: weight (in kg) and height (in m) and calculates the BMI. It then compares the calculated BMI with the given range and prints out if the person is underweight, normal weight, overweight or obese.