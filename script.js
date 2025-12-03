function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.add("hidden");
    });
    document.getElementById(pageId).classList.remove("hidden");
}


//Mood Selection

let moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || {};

document.querySelectorAll(".mood").forEach(mood => {
    mood.addEventListener("click", function () {
        const selected = this.getAttribute("data-mood");
        document.getElementById("selectedMood").textContent = "Mood: " + selected;

//Save mood count
        moodHistory[selected] = (moodHistory[selected] || 0) + 1;
        localStorage.setItem("moodHistory", JSON.stringify(moodHistory));

        alert("Mood saved!");
    });
});


//Save Thoughts

function saveThought() {
    const text = document.getElementById("thoughtText").value;

    if (text.trim() === "") {
        alert("Please write something first.");
        return;
    }

    localStorage.setItem("thoughts", text);
    alert("Thought saved!");
}


//Chart 

function generateChart() {
    const chart = document.getElementById("chart");
    chart.innerHTML = ""; // Clear previous

    const moods = Object.keys(moodHistory);

    if (moods.length === 0) {
        chart.innerHTML = "<p>No mood data yet.</p>";
        return;
    }

    moods.forEach(mood => {
        const bar = document.createElement("div");
        bar.className = "bar";

        const count = moodHistory[mood];

        bar.innerHTML = `
            <span class="label">${mood}</span>
            <div class="bar-fill" style="width:${count * 20}px"></div>
            <span class="count">${count}</span>
        `;

        chart.appendChild(bar);
    });
}

document.getElementById("summaryPage").addEventListener("click", generateChart);


//Chart 

function generateChart() {
    const chart = document.getElementById("chart");
    chart.innerHTML = ""; // Clear previous chart content

    const moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || {};

    const moods = Object.keys(moodHistory);

    if (moods.length === 0) {
        chart.innerHTML = "<p>No mood data yet.</p>";
        return;
    }

    moods.forEach(mood => {
        const bar = document.createElement("div");
        bar.className = "bar";

        const count = moodHistory[mood];

        bar.innerHTML = `
            <span class="label">${mood}</span>
            <div class="bar-fill" style="width:${count * 35}px"></div>
            <span class="count">${count}</span>
        `;

        chart.appendChild(bar);
    });
}

// Generate chart when Summary Page is opened
document.getElementById("summaryPage").addEventListener("click", generateChart);

