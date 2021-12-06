const wastes = [
    ["yellowBucket", "bouteillePlastique"],
    ["yellowBucket", "boitedeconserve"],
    ["blueBucket", "journal"],
    ["blueBucket", "carton"],
    ["greenBucket", "potdeconfiture"],
    ["greenBucket", "sticker-bouteille-vin-rouge"],
    ["greenBucket", "verre"],
    ["brownBucket", "reste"],
    ["brownBucket", "couchecullote"],
    ["brownBucket", "potdeyaourt"]
];

let score = 0;

const buckets = document.querySelectorAll(".bucket");

// asign dropping functions to all buckets

for (const bucket of buckets) {
    bucket.addEventListener('dragover', dragOver);

    bucket.addEventListener('dragenter', dragEnter);

    bucket.addEventListener('dragleave', dragLeave);

    bucket.addEventListener('drop', dragDrop);
}

// define function to display a new waste and remove the actual one from the array
function newWaste () {
    const random = Math.floor(Math.random() * wastes.length);
    const newWaste = document.createElement("img");
    newWaste.src = "img/" + wastes[random][1] + ".jpg";
    newWaste.classList.add("waste");
    newWaste.alt = wastes[random][1];
    newWaste.id = wastes[random][0]
    wastes.splice(random, 1)
    document.getElementById("wasteContainer").appendChild(newWaste);
}

newWaste();

let waste = document.querySelector(".waste");

// define function to drag the waste

function dragStart() {
    waste = document.querySelector(".waste");
}

function dragEnd() {
    this.classList = 'waste';
}

// asign dragging function to the waste

waste.addEventListener('dragstart', dragStart);
waste.addEventListener('dragend', dragEnd);


// define functions to drop the waste on the buckets

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList += 'hovered';
}

function dragLeave() {
    this.classList = 'bucket';
}


function dragDrop(e) {
    e.preventDefault()
    this.classList = 'bucket';
    waste = document.querySelector("img")
    if (waste.id === this.id) {
        score++
    }
    waste.remove()
    if (wastes.length === 0) {
        localStorage.setItem("score", score)
        document.location = "page3.html";
    }
    newWaste()
}