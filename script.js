function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.add('hidden'));

    // Show selected page
    document.getElementById(pageId).classList.remove('hidden'); 

    // Load thought from localStorage
function loadThought() {
    const saved = localStorage.getItem("userThought");
    if (saved) {
        document.getElementById("thoughtInput").value = saved;
    }
    document.querySelectorAll('.mood').forEach(mood => {
    mood.addEventListener('click', () => {
        document.getElementById('selectedMood').textContent =
            "You selected: " + mood.textContent;
    });
});
}

// Save thought to localStorage
function saveThought() {
    const text = document.getElementById("thoughtInput").value;
    localStorage.setItem("userThought", text);
    alert("Your thought has been saved!");
}


    // Load saved thought when opening the page
    loadThought();
}
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
