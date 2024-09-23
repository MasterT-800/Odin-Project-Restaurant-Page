//Create about page content
export const about = () => {
    const content = document.querySelector('#content');

    //Create and append about div
    const about = document.createElement('div');
    about.innerText = 'This project goal was to create a tab navigation website that utilizes modules and webpack to bundle files';
    content.appendChild(about);
}