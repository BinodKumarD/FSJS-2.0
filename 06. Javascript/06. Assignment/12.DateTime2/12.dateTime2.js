/*Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm */

// The Date object can be used to create a human-readable time format by accessing its properties and formatting them in a specific way. Here's how you can create the time formats you've listed using the Date object:

// YYYY-MM-DD HH:mm

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // adding 1 as getMonth() returns zero-based number
    const date = today.getDate();
    const hours = today.getHours();
    const minutes = today.getMinutes();

    const formattedDate = `${year}-${month}-${date} ${hours}:${minutes}`;
    console.log(formattedDate);

//  DD-MM-YYYY HH:mm

    const formattedDate2 = `${date}-${month}-${year} ${hours}:${minutes}`;
    console.log(formattedDate2);

// DD/MM/YYYY HH:mm

    const formattedDate3 = `${date}/${month}/${year} ${hours}:${minutes}`;
    console.log(formattedDate3);
