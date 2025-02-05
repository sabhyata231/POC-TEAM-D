document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("customerForm");
    let savedDetails = document.getElementById("savedDetails");

    let savedName = document.getElementById("savedName");
    let savedEmail = document.getElementById("savedEmail");
    let savedCustomerID = document.getElementById("savedCustomerID");
    let savedPhone = document.getElementById("savedPhone");
    let savedAddress = document.getElementById("savedAddress");
    let savedPincode = document.getElementById("savedPincode");
    let savedProductDetails = document.getElementById("savedProductDetails");

    // Load saved data from localStorage
    function loadSavedData() {
        let customerData = JSON.parse(localStorage.getItem("customerData"));
        if (customerData) {
            savedName.textContent = customerData.Name;
            savedEmail.textContent = customerData.Email;
            savedCustomerID.textContent = customerData.CustomerID;
            savedPhone.textContent = customerData.Phone;
            savedAddress.textContent = customerData.Address;
            savedPincode.textContent = customerData.Pincode;
            savedProductDetails.textContent = customerData.ProductDetails;
            savedDetails.classList.remove("hidden"); // Show saved data section
        } else {
            console.log('User  data not found in local storage');
        }
    }

    // Save form data to localStorage
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let customer = {
            Name: document.getElementById("Name").value,
            Email: document.getElementById("Email").value,
            CustomerID: document.getElementById("CustomerID").value,
            Phone: document.getElementById("Phone").value,
            Address: document.getElementById("Address").value,
            Pincode: document.getElementById("Pincode").value,
            ProductDetails: document.getElementById("ProductDetails").value,
        };

        localStorage.setItem("customerData", JSON.stringify(customer)); // Save to localStorage

        alert("Customer details saved!");

        loadSavedData(); // Display saved data
    });

    loadSavedData(); // Display data on page load if available
});
    