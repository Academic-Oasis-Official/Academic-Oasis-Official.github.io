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
        title: "Website",
        description: "Create a website for the company",
        status: IN_PROGRESS,
    },
    {
        title: "Discord Server",
        description: "Create a discord server for the company",
        status: COMPLETED,
    },
    {
        title: "Profit",
        description: "Make money",
        status: PLANNED,
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