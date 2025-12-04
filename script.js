// PAGE NAVIGATION
function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
    document.getElementById(pageId).classList.remove("hidden");
}

// DATA STORAGE (OOP) 
class MoodEntry {
    constructor(subject, mood, thought, quote) {
        this.subject = subject;
        this.mood = mood;
        this.thought = thought;
        this.quote = quote;
        this.date = new Date().toLocaleString();
    }
}

let entries = [];


// MOOD SELECTION EVENT
let chosenMood = "";

document.querySelectorAll(".mood").forEach(mood => {
    mood.addEventListener("click", function () {
        document.querySelectorAll(".mood").forEach(m => m.classList.remove("selected"));
        this.classList.add("selected");
        chosenMood = this.getAttribute("data-mood");
        document.getElementById("selectedMood").innerText = "Mood Selected: " + chosenMood;
    });
});


// QUOTE 
function generateQuote(mood, thought) {

    const keywords = thought.toLowerCase();

    if (mood === "Sad")
        return "It's okay to feel sad. Brighter days are coming.";
    if (mood === "Happy")
        return "Hold onto this joy it's a gift worth keeping.";
    if (mood === "Angry")
        return "Take a deep breath. You are stronger than your anger.";
    if (mood === "Tired")
        return "Rest is not a weakness. You deserve to recharge.";
    if (mood === "Scared")
        return "Courage doesn't mean no fear just not letting fear win.";
    if (mood === "Sick")
        return "Your body is healing. Be gentle with yourself.";

    // Keyword-based addition
    if (keywords.includes("alone"))
        return "Even when you feel alone, you still matter in this world.";
    if (keywords.includes("stress"))
        return "You have survived 100% of your hardest days. You can do this.";
    if (keywords.includes("fail"))
        return "Failure is not the opposite of success—it's part of it.";

    return "Keep going. Every step you take is progress.";
}


// SAVE ENTRY 
function saveEntry() {

    const subject = document.getElementById("subjectSelect").value;
    const thought = document.getElementById("thoughtText").value;

    if (!chosenMood || !thought.trim()) {
        alert("Please select a mood and write your thoughts.");
        return;
    }

    const quote = generateQuote(chosenMood, thought);

    const newEntry = new MoodEntry(subject, chosenMood, thought, quote);
    entries.push(newEntry);

    updateSummaryTable();
    alert("Entry saved!");

    // Reset fields
    chosenMood = "";
    document.getElementById("thoughtText").value = "";
    document.getElementById("selectedMood").innerText = "";
    document.querySelectorAll(".mood").forEach(m => m.classList.remove("selected"));
}


// UPDATE SUMMARY TABLE 
function updateSummaryTable() {
    const table = document.getElementById("summaryTable");

    table.innerHTML = `
        <tr>
            <th>Subject</th>
            <th>Mood</th>
            <th>Thoughts</th>
            <th>Motivational Quote</th>
            <th>Date</th>
        </tr>
    `;

    entries.forEach(entry => {
        const row = `
            <tr>
                <td>${entry.subject}</td>
                <td>${entry.mood}</td>
                <td>${entry.thought}</td>
                <td>${entry.quote}</td>
                <td>${entry.date}</td>
            </tr>
        `;
        table.innerHTML += row;
    });
}
