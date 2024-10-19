
    document.querySelector("form").addEventListener("submit", function(e) {
        const inputs = document.querySelectorAll("input[required], textarea[required]");
        let valid = true;

        inputs.forEach(input => {
            if (!input.value) {
                valid = false;
                input.style.borderColor = "red";
            } else {
                input.style.borderColor = "#ccc";
            }
        });

        if (!valid) {
            e.preventDefault();
            alert("Please fill in all required fields.");
        }
    });
