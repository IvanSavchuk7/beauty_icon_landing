// SECTION FOR TOGGLE BUTTON LOGIC

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".for-item");

    // Show only the first item initially
    items.forEach((item, index) => {
        if (index === 0) {
            item.classList.add("active");
            const img = item.querySelector(".toggle-btn img");
            if (img) img.src = "assets/images/open-button.svg";
        } else {
            item.classList.remove("active");
        }
    });

    items.forEach(item => {
        const button = item.querySelector(".toggle-btn");

        button.addEventListener("click", () => {
            // Close all items
            items.forEach(i => {
                i.classList.remove("active");
                const img = i.querySelector(".toggle-btn img");
                if (img) img.src = "assets/images/close-button.svg";
            });

            // Open clicked item
            item.classList.add("active");
            const img = item.querySelector(".toggle-btn img");
            if (img) img.src = "assets/images/open-button.svg";
        });
    });
});