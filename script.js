/* ------------------------------
   DROPDOWN MENU FUNCTIONALITY
--------------------------------*/
function toggleDropdown(id) {
    document.querySelectorAll('.dropdown-content').forEach(menu => {
        if (menu.id !== id) {
            menu.style.display = 'none';
        }
    });

    const menu = document.getElementById(id);
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Close dropdown if clicked outside
document.addEventListener("click", function(e) {
    if (!e.target.closest(".dropdown")) {
        document.querySelectorAll('.dropdown-content').forEach(menu => {
            menu.style.display = 'none';
        });
    }
});


/* ------------------------------
   BOOKING FORM VALIDATION
--------------------------------*/
function validateBooking(event, formId = "bookingForm") {
    event.preventDefault();
    
    const form = document.getElementById(formId);
    const fullname = form.querySelector("#fullname").value.trim();
    const email = form.querySelector("#email").value.trim();
    const eventType = form.querySelector("#eventType").value;
    const date = form.querySelector("#date").value;
    const bookingMessage = form.querySelector("#bookingMessage");

    const emailRegex = /\S+@\S+\.\S+/;

    if (!fullname || !email || !eventType || !date) {
        bookingMessage.style.color = "red";
        bookingMessage.innerText = "Please fill in all required fields!";
        return;
    }

    if (!emailRegex.test(email)) {
        bookingMessage.style.color = "red";
        bookingMessage.innerText = "Please enter a valid email!";
        return;
    }

    bookingMessage.style.color = "green";
    bookingMessage.innerText = `Thank you, ${fullname}! Your booking for ${eventType} on ${date} has been submitted.`;

    form.reset();
}


/* ------------------------------
   INTERACTIVE EVENT PACKAGE BOXES
--------------------------------*/
function interactiveBoxes(selector = ".bday-box") {
    document.addEventListener("DOMContentLoaded", function() {
        const boxes = document.querySelectorAll(selector);

        boxes.forEach(box => {
            // Hover effect
            box.addEventListener("mouseenter", () => {
                box.style.transform = "scale(1.05)";
                box.style.transition = "transform 0.3s";
                box.style.cursor = "pointer";
            });
            box.addEventListener("mouseleave", () => {
                box.style.transform = "scale(1)";
            });

            // Click effect
            box.addEventListener("click", () => {
                boxes.forEach(b => b.style.borderColor = "#ccc"); // reset others
                box.style.borderColor = "#cc3366";
                box.style.boxShadow = "0 0 15px rgba(204, 51, 102, 0.7)";
                alert(`You selected: ${box.querySelector("h3").innerText}`);
            });
        });
    });
}
interactiveBoxes();
