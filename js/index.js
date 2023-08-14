// console.log(recipes)

const recipeSection = document.getElementById("recipeSection")

function createCardDOM(recipe) {
    const card = document.createElement("div")
    card.classList.add("card")

    const cardImage = document.createElement("img")
    cardImage.src = `../assets/images/${recipe.image}`

    const recipeTime = document.createElement("span")
    recipeTime.textContent = `${recipe.time}min`
    recipeTime.classList.add("recipe-time")
    

    const cardBody = document.createElement("div")
    cardBody.classList.add("card-body")

    const recipeName = document.createElement("h3")
    recipeName.textContent = recipe.name
    recipeName.classList.add("recipe-name")

    const recipeDescriptionTitle = document.createElement("h4")
    recipeDescriptionTitle.textContent = `recette`

    const recipeDescription = document.createElement("p")
    recipeDescription.textContent = `${recipe.description.slice(0, 150)}...`


    const recipeFullDescription = document.createElement("p")
    recipeFullDescription.textContent = `${recipe.description}`
    recipeFullDescription.style.display = "none"


    const showMoreButton = document.createElement("button")
    showMoreButton.textContent = "+"

    const hideButton = document.createElement("button")
    hideButton.textContent = "-"

    const recipeIngredientsTitle = document.createElement("h4")
    recipeIngredientsTitle.textContent = `ingrédients`
    recipeIngredientsTitle.classList.add("ingredients-title")

    const recipeIngredientsList = document.createElement("ul")
    recipeIngredientsList.classList.add("ingredients-list")

    recipe.ingredients.forEach(ingredient => {

        const ingredientsContainer = document.createElement("li")
        ingredientsContainer.classList.add("ingredients-container")

        const ingredientName = document.createElement("p")
        ingredientName.innerText = ingredient.ingredient

        ingredientsContainer.append(ingredientName)

        if(ingredient.quantity) {
            const ingredientsQuantity = document.createElement("p")
            ingredientsQuantity.classList.add("ingredients-quantity")
            ingredientsQuantity.innerText = ingredient.quantity.toString()

            if (ingredient.unit) {
                ingredientsQuantity.innerText += `${ingredient.unit}`
            }
            ingredientsContainer.append(ingredientsQuantity)
        }
        recipeIngredientsList.append(ingredientsContainer)
    })
    

    const isFullDescriptionVisible = false;

    if(isFullDescriptionVisible) {
        recipeDescription.style.display = "none"
        recipeFullDescription.style.display = "inline"
        showMoreButton.style.display = "none"
        hideButton.style.display = "inline"

    } else {
        recipeDescription.style.display = "block"
        recipeFullDescription.style.display = "none"
        showMoreButton.style.display = "inline"
        hideButton.style.display = "none"
    }

    showMoreButton.addEventListener("click", function() {
        recipeDescription.style.display = "none"
        recipeFullDescription.style.display = "inline"
        showMoreButton.style.display = "none"
        hideButton.style.display = "inline"
    })

    hideButton.addEventListener("click", function() {
        recipeDescription.style.display = "block"
        recipeFullDescription.style.display = "none"
        showMoreButton.style.display = "inline"
        hideButton.style.display = "none"
    })

    // function descriptionVisibility(showFullDescription) {
    //     recipeDescription.style.display = showFullDescription ? "none" : "block"
    //     recipeFullDescription.style.display = showFullDescription ? "bock" : "none"
    //     showMoreButton.style.display = showFullDescription ? "none" : "inline"
    //     hideButton.style.display = showFullDescription ? "inline" : "none"
    // }

    // const isFullDescriptionVisible = false;
    // descriptionVisibility(isFullDescriptionVisible)

    // showMoreButton.addEventListener("click", function() {
    //     descriptionVisibility(true)
    // })

    // hideButton.addEventListener("click", function() {
    //     descriptionVisibility(false)
    // })

    // const descriptionLength = recipe.description.length;
    // manageDescriptionButtons(descriptionLength);

    card.appendChild(cardImage)
    card.appendChild(recipeTime)
    card.appendChild(cardBody)
    cardBody.appendChild(recipeName)
    cardBody.appendChild(recipeDescriptionTitle)
    cardBody.appendChild(recipeDescription)
    cardBody.appendChild(recipeFullDescription)
    recipeDescription.appendChild(showMoreButton)
    recipeFullDescription.appendChild(hideButton)
    cardBody.appendChild(recipeIngredientsTitle)
    cardBody.appendChild(recipeIngredientsList)

    recipeSection.appendChild(card)
}

function generateCards(recipes) {
    console.log(recipes)
    recipes.forEach(recipe => {
        createCardDOM(recipe)
    })
}

generateCards(recipes)

