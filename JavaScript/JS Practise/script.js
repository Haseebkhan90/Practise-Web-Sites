// Show dumpster card after search
function showDumpster() {
    const address = document.getElementById("address").value;
    const rental = document.getElementById("rentalType").value;
    const project = document.getElementById("projectType").value;

    if (!address || !rental || !project) {
        alert("Please fill all fields.");
        return;
    }

    document.getElementById("outAddress").textContent = address;
    document.getElementById("outRental").textContent = document.getElementById("rentalType").options[document.getElementById("rentalType").selectedIndex].text;
    document.getElementById("outProject").textContent = document.getElementById("projectType").options[document.getElementById("projectType").selectedIndex].text;

    document.getElementById("dumpsterCard").style.display = "block";
}

// Show order summary after adding to cart
function showOrderSummary() {
    document.getElementById("initial-form").style.display = "none";
    document.getElementById("order-summary").style.display = "grid";

    // Set the address from the initial form
    const initialAddress = document.getElementById("address").value;
    if (initialAddress) {
        document.getElementById("sidebar-address").textContent = initialAddress;
    }

    // Set minimum delivery date to tomorrow
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];
    document.getElementById("delivery-date").min = minDate;
}

// Select delivery time option
function selectDeliveryOption(element, time) {
    // Remove selected class from all options
    document.querySelectorAll('.delivery-option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // Add selected class to clicked option
    element.classList.add('selected');

    // Update sidebar display
    const timeText = element.querySelector('strong').textContent + ' ' + element.querySelector('p').textContent;
    document.getElementById("sidebar-delivery-time").textContent = timeText;
}

document.addEventListener('DOMContentLoaded', function () {
    // Edit address functionality
    document.getElementById("sidebar-edit-address").addEventListener('click', function () {
        const currentAddress = document.getElementById("sidebar-address").textContent;
        const newAddress = prompt('Edit your delivery address:', currentAddress);
        if (newAddress && newAddress.trim() !== '') {
            document.getElementById("sidebar-address").textContent = newAddress.trim();
        }
    });

    // Delivery date change handler
    document.getElementById("delivery-date").addEventListener('change', function () {
        if (this.value) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const date = new Date(this.value);
            const formattedDate = date.toLocaleDateString('en-US', options);
            document.getElementById("sidebar-delivery-date").textContent = formattedDate;
        }
    });

    // Form validation
    const formFields = ['first-name', 'last-name', 'email', 'phone', 'placement', 'delivery-date'];
    const continueButton = document.getElementById("continue-button");

    continueButton.addEventListener('click', function (e) {
        let isValid = true;

        // Check required fields
        formFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!field.value.trim()) {
                field.style.borderColor = 'red';
                isValid = false;
            } else {
                field.style.borderColor = '#ddd';
            }
        });

        // Check permit checkbox
        if (!document.getElementById("permit-check").checked) {
            document.getElementById("permit-check").parentElement.style.color = 'red';
            isValid = false;
        } else {
            document.getElementById("permit-check").parentElement.style.color = '';
        }

        // Validate email format
        const email = document.getElementById("email").value;
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById("email").style.borderColor = 'red';
            isValid = false;
        }

        // Validate phone format
        const phone = document.getElementById("phone").value;
        if (phone && !/^\(\d{3}\) \d{3}-\d{4}$/.test(phone)) {
            document.getElementById("phone").style.borderColor = 'red';
            isValid = false;
        }

        // Check if delivery time is selected
        if (!document.querySelector('.delivery-option.selected')) {
            alert('Please select a delivery time option.');
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault();
            alert('Please fill out all required fields correctly.');
        } else {
            // In a real app, this would submit the form
            alert('Order submitted successfully! Redirecting to payment...');
            // window.location.href = '/payment';
        }
    });

    // Phone number formatting
    document.getElementById("phone").addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            value = '(' + value.substring(0, 3) + ') ' + value.substring(3, 6) + '-' + value.substring(6, 10);
        }
        e.target.value = value;
    });

    // Simulate map interaction
    const map = document.getElementById("dumpster-map");
    map.addEventListener('click', function () {
        alert('In a real implementation, this would allow you to select a drop location on the map.');
    });

    // Sync checkboxes
    document.getElementById("lock-rate").addEventListener('change', function () {
        document.getElementById("sidebar-lock-rate").checked = this.checked;
    });

    document.getElementById("sidebar-lock-rate").addEventListener('change', function () {
        document.getElementById("lock-rate").checked = this.checked;
    });
});
