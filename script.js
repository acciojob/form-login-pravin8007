function getFormvalue() {
            // Get the values of first name and last name input fields
            const firstName = document.getElementsByName("fname")[0].value;
            const lastName = document.getElementsByName("lname")[0].value;

            // Display the values in an alert
            alert(firstName + " " + lastName);
        }