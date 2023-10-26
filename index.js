// const freelancersOption = [
//     { name: "Dr. Slice", price: 25, occupation: "gardener" },
//     { name: "Dr. Pressure", price: 51, occupation: "programmer" },
//     { name: "Prof. Possibility", price: 43, occupation: "teacher" },
//     { name: "Prof. Prism", price: 81, occupation: "teacher" },
//     { name: "Dr. Impulse", price: 43, occupation: "teacher" },
//     { name: "Prof. Spark", price: 76, occupation: "programmer" },
//     { name: "Dr. Wire", price: 47, occupation: "teacher" },
//     { name: "Prof. Goose", price: 72, occupation: "driver" },
// ];

const names = ["Dr. Slice","Dr. Pressure","Prof. Possibility","prof. Prism","Dr. Impulse", "Prof. Spark", "Dr. Wire", "Prof. Goose"];
const prices = [25, 51, 43, 81, 43, 76, 47, 72];
const occupations = ["gardener", "programmer", "teacher", "teacher", "teacher", "programmer", "teacher", "driver"];

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

//`setInterval` will call `addFreelancer` function every 3000 milliseconds (3 second)
//setInterval function is created by JS
const addFreelancerIntervalId = setInterval(addFreelancer,3000);

// We call this function once to render the initial state
render();

function render() {
    //const freelancersDemo = document.querySelector("td");
    const freelancersShow = freelancers.map((freelancer) => {
        const element = document.createElement("tr");
        element.classList.add("freelancer")
        element.innerHTML = `
            <td>Name: ${freelancer.name}</td>
            <td>Occupation: ${freelancer.occupation}</td>
            <td>Starting Price: ${freelancer.price}</td>`
        return element;
    });
    tbody.replaceChildren(...freelancersShow);
    averagePrice();
};

function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
    freelancers.push({ name, occupation, price });
    render();
}

//Create a function for average price
function averagePrice() {
    const averagePrice = document.querySelector("h1 span");
    const calculatePrice = (freelancers.reduce(
        (accumulator, freelancers) => (accumulator + freelancer.price), 0));
    const calculatePriceAverage = calculatePrice / freelancers.length;
    averagePrice.textContent = "$" + calculatePriceAverage;
}


