function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.add('hidden'));

// Function to switch pages
function showPage(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => page.classList.add("hidden"));

    document.getElementById(pageId).classList.remove("hidden");
}

// Function for the "okay" button
function okay() {
    const userThought = document.getElementById("thoughtInput").value;

    if (userThought.trim() === "") {
        alert("Please write something first.");
        return;
    }

    alert("Your message has been saved:\n\n" + userThought);

    // Optional: Clear input after saving
    document.getElementById("thoughtInput").value = "";
}
}