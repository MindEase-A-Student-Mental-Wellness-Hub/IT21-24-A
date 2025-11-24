function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.add('hidden'));

    // Show selected page
    document.getElementById(pageId).classList.remove('hidden');

    // Load saved thought when opening the page
    loadThought();
}

// Load thought from localStorage
function loadThought() {
    const saved = localStorage.getItem("userThought");
    if (saved) {
        document.getElementById("thoughtInput").value = saved;
    }
}

// Save thought to localStorage
function saveThought() {
    const text = document.getElementById("thoughtInput").value;
    localStorage.setItem("userThought", text);
    alert("Your thoughts has been saved!");
}
