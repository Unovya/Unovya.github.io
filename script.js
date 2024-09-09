const title = document.querySelector("#title");
const button = document.querySelector("#aboutMeButton");
const indexSubTitle = document.querySelector('#indexSubTitle');


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
        if (!entry.isIntersecting) {
            entry.target.classList.remove("visible");
        }
    })
});

observer.observe(title)
observer.observe(button)
observer.observe(indexSubTitle)



