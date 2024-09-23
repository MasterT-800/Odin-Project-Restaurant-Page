//Loads home page content
export const home = () => {
    const content = document.querySelector('#content');
    //Create page header
    const head = document.createElement('h2');
    head.innerText = 'Odin Meals';
    content.appendChild(head);

    //Create page top content
    const blurb = document.createElement('div');
    blurb.textContent = 'Odin Meals is a new hip restaurant in downtown Java';
    content.appendChild(blurb);

    //Create hours content
    const hours = document.createElement('ul');
    hours.innerText = 'Hours';
    content.appendChild(hours);
    //Array of days
    const days = [];
    days.push('Sunday: 8AM - 8PM', 'Monday: 6AM - 6PM', 'Tuesday: 6AM - 6PM', 'Wedensday: 6AM - 6PM', 'Thursday: 6AM - 10PM', 'Friday: 6Am - 10PM', 'Saturday: 8AM - 10PM');
    //Create list items for days
    for(let i = 0; i < days.length; i++){
        const day = document.createElement('li');
        day.innerText = days[i];
        hours.appendChild(day);
    }

    //Create location content
    const location = document.createElement('div');
    location.innerText = 'Located at 1001, Script Rd, Central Odin, 1234';
    content.appendChild(location);
}