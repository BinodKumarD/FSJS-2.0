/*------Task1: Adding Elements------*/

/*--------i. Adding Button in NavBar------*/

// Generating reference to the navCenter Div
let navCenterDiv = document.querySelector(".nav-center div:nth-child(3)");

// Creating anchor tag
let aNav = document.createElement("a");
aNav.href = "index.html";
aNav.className = "btn";
aNav.innerText = "Pro Subscription";

// appending anchor tag to navCenter Div
navCenterDiv.append(aNav);



/*--------ii. Adding one more item types in recipe section------*/

// Generating reference for the recipe section div
let tagsContainerDiv = document.querySelector(".tags-container div");

// creating anchor tag
let aReciepe = document.createElement("a");
aReciepe.href = "#";
aReciepe.innerText = "Chinese (7)";

// appending anchor tag to recipe section div
tagsContainerDiv.append(aReciepe);


/*--------iii. Adding one more recipe card recipe gallery------*/

// Generating refernce for the recipe-gallery
let recipeGallery = document.querySelector(".recipe-gallery");

// creating div class card
let card = document.createElement("div");
card.className = "card";

// creating anchor tag for recipe card
let aRecipeCard = document.createElement("a");
aRecipeCard.href = "#"
aRecipeCard.className = "recipe-text";

// creating image 
let imgRecipe = document.createElement("img");
imgRecipe.src = "./img/recipe-2.jpeg";
imgRecipe.className = "recipe-img";

// creating h5
let h5 = document.createElement("h5");
h5.className = "recipe-name";
h5.innerText = "Sahi Paneer";

// creaing para
let p = document.createElement("p");
p.className = "recipe-disp";
p.innerText = "Prep : 25min | Cook : 45min"; 

aRecipeCard.append(imgRecipe);
aRecipeCard.append(h5);
aRecipeCard.append(p);
card.append(aRecipeCard);
recipeGallery.append(card);