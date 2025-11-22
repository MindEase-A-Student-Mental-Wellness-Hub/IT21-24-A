function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.add('hidden'));

    // Show selected page
    document.getElementById(pageId).classList.remove('hidden');
}
