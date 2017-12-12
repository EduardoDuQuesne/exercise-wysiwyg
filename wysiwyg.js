let peopleArray = [
    {
        title: "The Boss",
        name: "Ronald McDonald",
        bio: "Ronald McDonald was a clown used as the primary mascot of the McDnald's fast-food restaurant chain. In television commercials, he in inhabitted a fantasy world called McDonaldland and has adventures with his friends",
        image: "/img/ronald.jpg",
        lifespan: {
        birth: 1963,
        death: 2054
        }
    },
    {
        title: "The Mayor",
        name: "Mayor McCheese",
        bio: "Mayor McCheese was an enormous cheeseburger who has a burger for a head, and sports a top hat, a diplomat's sash, and a pair of pince-nez spectacles. He is portrayed as a giggly, bumbling, and somewhat incompetent mayor who was based on H.R. Pufnstuf.",
        image: "/img/mayor-mccheese.jpg",
        lifespan: {
        birth: 1971,
        death: 2008
        }
    },
    {
        title: "The Thief",
        name: "Hamburgler",
        bio: "Hamburgler was one of the first villains in McDonaldland. He is dressed in a black-and-white hooped shirt and pants, a red cape, a wide-brimmed hat, and red gloves. His primary object of theft was hamburgers, hence his name. The character, started out as a villain, only he was old, had a long nose, gray hair, and was called the Lone Jogger in some 1970s commercials, sporting a shirt that said 'Lone Jogger..'",
        image: "/img/hamburgler.jpg",
        lifespan: {
        birth: 1971,
        death: 2011
        }
    },
    {
        title: "The Chief",
        name: "Officer Big Mac",
        bio: "As McDonaldland's Chief of Police, Officer Big Mac wears an old-fashioned constable's uniform. Officer Big Mac is the main representative of law and order in McDonaldland, it is his responsibility to prevent the Hamburglar from stealing hamburgers and to prevent Captain Crook from stealing Filet-O-Fish sandwiches.",
        image: "/img/Officer_Big_Mac.jpg",
        lifespan: {
        birth: 1973,
        death: 1994
        }
    },
    {
        title: "The Pirate",
        name: "Captain Crook",
        bio: "As part of the nautical theme of the character, Captain Crook used ships and waterways as means to escape being captured. In the 1970s, he was a major character with an unseen mouth and a rubber mask. In the 1980s, he was a supporting background character renamed 'The Captain' where he had an almost Muppet-like look and was often seen with a parrot.",
        image: "/img/captain.jpg",
        lifespan: {
        birth: 1747,
        death: 1797
        }
    },
    {
        title: "The Purple",
        name: "Grimace",
        bio: "Grimace is a large, purple character originally known as the 'Evil Grimace'. In Grimace's first years, he had two pairs of arms with which to steal milkshakes and pops. 'Evil' was soon dropped from Grimace's moniker, and Grimace was reintroduced in 1972 as one of the good guys. In 1974, Grimace was redesigned, going from two pairs of arms to the single pair he has today.",
        image: "/img/Grimace.jpg",
        lifespan: {
        birth: 1971,
        death: 2048
        }
    },
]

//Create indivual articles for cards
let counter = 0;
let cardContainer = document.getElementById("card-container");


//Create Cards, put in content, and print to dom
for (let i = 0; i < peopleArray.length; i++) {
    counter += 1;
    let peopleCard = document.createElement("article");
    peopleCard.setAttribute("id", `person-${counter}`);
    console.log(`person-${counter}`);
    peopleCard.setAttribute("class", "people-card");
//puts the card into the container
    cardContainer.appendChild(peopleCard);
//add header to card
    let header = document.createElement("header");
    peopleCard.appendChild(header);
//add section for bio and image
    let section = document.createElement("section");
    cardContainer.appendChild(section);
//add footer for life span
    let footer = document.createElement("footer");
    cardContainer.appendChild(footer);    
//create headers for name and title
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let name = document.createTextNode(`${peopleArray[i].name}`);
    let title = document.createTextNode(`${peopleArray[i].title}`);
    h2.appendChild(name);
    h3.appendChild(title);
    header.appendChild(h2);
    header.appendChild(h3);
//add image and bio to section
    section.innerHTML = `<img src="${peopleArray[i].image}">`;
    let bioElement = document.createElement("p");
    let bioContent = document.createTextNode(`${peopleArray[i].bio}`);
    bioElement.appendChild(bioContent);
    section.appendChild(bioElement);
    peopleCard.appendChild(section);
//add lifespan to footer
    let footerElement = document.createElement("p");
    let footerContent = document.createTextNode(`${peopleArray[i].lifespan.birth} - ${peopleArray[i].lifespan.death}`);
    footer.appendChild(footerContent);   
    peopleCard.appendChild(footer); 
}


let articles = document.getElementsByClassName("people-card");
let textInput = document.getElementById("text-input");
let currentCard;

//AddEventListeners and toggle border
for (let i = 0; i < articles.length; i++) {
    articles[i].addEventListener("click", () => {
        textInput.value = "";
        event.target.classList.toggle("dotted-border");
        textInput.focus();
        currentCard = event.currentTarget;
        })
    }

//ChangeBio to input text
textInput.addEventListener("keyup", () => {
    currentCard.childNodes[1].childNodes[1].innerHTML = textInput.value;
    if (event.keyCode === 13) {
        textInput.value = "";
    }
})        


       











