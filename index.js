const freelancersOption = [
    { name: "Carol", price: 70, occupation: "programmer" },
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const freelancers = [
    {
        name: "Alice",
        occupation: "writer",
        price: 30,
    },
    {
        name: "Bob",
        occupation: "teacher",
        price: 50,
    }
];

//`setInterval` will call `addFreelancer` function every 5000 milliseconds (5 seconds)
//setInterval function is created by JS
const addFreelancerIntervalId = setInterval(addFreelancer,5000);

// We call this function once to render the initial state
render();

function render() {
    const tbody = document.querySelector("tbody");
    const freelancersShow = freelancers.map((freelancer) => {
        const element = document.createElement("tr");
        //element.classList.add("freelancer");
        element.innerHTML = `
            <td>${freelancer.name}</td>
            <td>${freelancer.occupation}</td>
            <td>$${freelancer.price}</td>`
        return element;
    });
    tbody.replaceChildren(...freelancersShow);
    averagePrice();
};

function addFreelancer() {
    //const randomIndex = Math.floor(Math.random() * freelancersOption.length);
    const randomFreelancer = freelancersOption[0];
    freelancers.push(randomFreelancer);
    freelancersOption.shift(randomFreelancer);
    render();
}

//Create a function for average price
function averagePrice() {
    const counter = document.querySelector("span");
    const calculatePrice = freelancers.reduce(
        (accumulator, currentValue) => (accumulator + currentValue.price), 0);
    const calculatePriceAverage = calculatePrice / freelancers.length;
    counter.textContent = String(calculatePriceAverage.toFixed(2));
}


