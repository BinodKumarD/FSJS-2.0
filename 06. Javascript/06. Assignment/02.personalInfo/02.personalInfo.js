// Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.


//personalInfo is defined with parameters
function personalInfo(first_name, last_name, marital_status, country, age) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.marital_status = marital_status;
    this.country = country;
    this.age = age;

    //This is the console log statement which is used to print output in console
    console.log(`-------------------------------- \nPersonal Information of my \nFirst name: ${this.first_name} \nLast name: ${this.last_name} \nMarital status: ${this.marital_status} \nCountry: ${country} \nAge: ${age}\n--------------------------------`);
}

// passing the parameter to personalInfo function
personalInfo("Binod", "kumar", "unmarried", "India", 22);
