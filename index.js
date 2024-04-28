const COMPLETED = 'Completed';
const IN_PROGRESS = 'In Progress';
const PLANNED = 'Planned';

const STATUS_CLASS = {
    [COMPLETED]: 'done',
    [IN_PROGRESS]: 'in-prog',
    [PLANNED]: 'planned',
}

const map = [
    {
        title: "Academic Dashboard",
        description: "The Academic Dashboard is a dashboard for students to see their current grades, upcoming assignments class progression and other details all on one page.",
        status: IN_PROGRESS,
    },
    {
        title: "Event Heatmap & Calendar",
        description: "The Event Heatmap is a tool for C&S Execs to figure out the best timings to host events for students.",
        status: PLANNED,
    },
    {
        title: "Achievement System",
        description: "The Achivements System, is the creation of an achievements system to encourage students to get the the most out of their university experience. (Academics, Discord, Social)",
        status: PLANNED,
    },
    {
        title: "Community Discord",
        description: "The Academic Oasis Community Discord is the central hub for students at Ontaro Tech.",
        status: COMPLETED,
    },
    {
        title: "C&S Budget Template",
        description: "A template budget sheet for Clubs and Societies to use to help them plan their events and activities.", 
        status: COMPLETED,
    }
]

function addItems() {
    const container = document.getElementById('card-container');

    map.forEach(item => {
        const card = `
        <div class="card">
            <div class="title-row">
                <h3 class="title">${item.title}</h2>
                <div class="status ${STATUS_CLASS[item.status]}">${item.status}</div>
            </div>
            <p>${item.description}</p>
        </div>
        `

        container.innerHTML += card;
    })
}

addItems();