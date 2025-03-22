data = {
  "recipes": [
    {
      "id": 1,
      "name": "Spaghetti Carbonara",
      "ingredients": [
        "200g spaghetti",
        "100g pancetta",
        "2 eggs",
        "50g grated Parmesan cheese",
        "1 clove garlic",
        "Salt and black pepper",
        "1 tbsp olive oil"
      ],
      "instructions": [
        "Cook spaghetti according to package instructions.",
        "Fry pancetta with garlic in olive oil until crispy.",
        "Whisk eggs and Parmesan cheese in a bowl.",
        "Drain pasta and mix with pancetta.",
        "Remove from heat and mix in the egg and cheese mixture.",
        "Season with salt and black pepper and serve."
      ],
      "image": "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-mediumSquareAt3X-v2.jpg"
    },
    {
      "id": 2,
      "name": "Chicken Biryani",
      "ingredients": [
        "2 cups basmati rice",
        "500g chicken, cut into pieces",
        "1 onion, sliced",
        "2 tomatoes, chopped",
        "1 cup yogurt",
        "1 tsp turmeric",
        "1 tsp garam masala",
        "1 tbsp ginger-garlic paste",
        "Salt to taste",
        "Coriander and mint leaves for garnish"
      ],
      "instructions": [
        "Soak basmati rice for 30 minutes.",
        "Cook chicken with onions, tomatoes, and spices until tender.",
        "Boil rice until 70% cooked, then layer with chicken in a pot.",
        "Cook on low heat for 20 minutes.",
        "Garnish with coriander and mint leaves before serving."
      ],
      "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg"
    },
    {
      "id": 3,
      "name": "Pancakes",
      "ingredients": [
        "1 cup flour",
        "1 egg",
        "1 cup milk",
        "1 tbsp sugar",
        "1 tsp baking powder",
        "1 tbsp butter",
        "Maple syrup for serving"
      ],
      "instructions": [
        "Mix flour, sugar, and baking powder in a bowl.",
        "Add egg and milk, then whisk into a smooth batter.",
        "Heat a pan and melt butter.",
        "Pour batter into the pan and cook until bubbles form.",
        "Flip and cook until golden brown.",
        "Serve with maple syrup."
      ],
      "image": "https://40204166.fs1.hubspotusercontent-na1.net/hub/40204166/hubfs/New%20Recipe%20images/Sunday%20Pancakes%20Recipe%20NZ%20Chelsea%20Sugar.jpg?width=755&height=500&name=Sunday%20Pancakes%20Recipe%20NZ%20Chelsea%20Sugar.jpg"
    },
    {
      "id": 4,
      "name": "Vegetable Stir Fry",
      "ingredients": [
        "1 cup broccoli",
        "1 bell pepper, sliced",
        "1 carrot, sliced",
        "2 tbsp soy sauce",
        "1 tbsp olive oil",
        "1 clove garlic, minced",
        "1 tsp ginger, grated"
      ],
      "instructions": [
        "Heat oil in a pan and sauté garlic and ginger.",
        "Add vegetables and stir fry for 5 minutes.",
        "Add soy sauce and stir well.",
        "Cook for another 2 minutes and serve."
      ],
      "image": "https://images.immediate.co.uk/production/volatile/sites/30/2008/01/Vegetable-stir-fry-b669c05.jpg"
    },
    {
      "id": 5,
      "name": "Chocolate Brownies",
      "ingredients": [
        "1 cup flour",
        "1/2 cup cocoa powder",
        "1 cup sugar",
        "1/2 cup butter, melted",
        "2 eggs",
        "1 tsp vanilla extract"
      ],
      "instructions": [
        "Preheat oven to 180°C.",
        "Mix flour, cocoa powder, and sugar in a bowl.",
        "Add melted butter, eggs, and vanilla extract and mix well.",
        "Pour batter into a baking tray and bake for 25 minutes.",
        "Cool before slicing and serving."
      ],
      "image": "https://40204166.fs1.hubspotusercontent-na1.net/hub/40204166/hubfs/Best%20Chocolate%20Brownie%20Recipe%20NZ%20Chelsea%20Sugar.jpg?width=755&height=500&name=Best%20Chocolate%20Brownie%20Recipe%20NZ%20Chelsea%20Sugar.jpg"
    },
    {
      "id": 6,
      "name": "Caesar Salad",
      "ingredients": [
        "1 head romaine lettuce",
        "1/2 cup croutons",
        "1/4 cup grated Parmesan cheese",
        "1/3 cup Caesar dressing",
        "1 grilled chicken breast, sliced"
      ],
      "instructions": [
        "Chop romaine lettuce and place in a bowl.",
        "Add croutons, Parmesan cheese, and sliced chicken.",
        "Drizzle with Caesar dressing and toss well.",
        "Serve chilled."
      ],
      "image": "https://itsavegworldafterall.com/wp-content/uploads/2023/04/Avocado-Caesar-Salad-FI.jpg"
    },
    {
      "id": 7,
      "name": "Mango Smoothie",
      "ingredients": [
        "1 ripe mango, chopped",
        "1/2 cup yogurt",
        "1/2 cup milk",
        "1 tbsp honey",
        "Ice cubes"
      ],
      "instructions": [
        "Blend all ingredients until smooth.",
        "Pour into a glass and serve immediately."
      ],
      "image": "https://cdn.loveandlemons.com/wp-content/uploads/2023/05/mango-smoothie.jpg"
    }
  ]
};
document.addEventListener("DOMContentLoaded", () => {
  let parent = document.getElementsByClassName('recipes')[0];

  if (parent) { 
      const format = data.recipes.map((rec) => {
          return `<div class="recipe">
          <img src="${rec.image}" alt="">
      <h3>${rec.name}</h3>
      <p>Ingredients <br> ${rec.ingredients}</p>
      <p id="instruction">Instructions <br>${rec.instructions}</p>
    </div>`;
      }).join('');

      parent.innerHTML = format; 
  }
});
