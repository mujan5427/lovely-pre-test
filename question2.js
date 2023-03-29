const recipes = [
  ["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
  ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
  ["Quesadilla", "Chicken", "Cheese", "Sauce"],
  ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]
];

const solution = (recipes) => {
  const ingredients = {};
  const rich = {};
  let result = [];
  
  recipes.forEach(item => {
    const dishes = item[0];
    const recipe = item.slice(1);

    recipe.forEach(ingredientName => {
      if (!ingredients.hasOwnProperty(ingredientName)) {
        ingredients[ingredientName]= [dishes];
      } else {
        ingredients[ingredientName]= [...ingredients[ingredientName], dishes].sort();
      }
    })
  })

  Object.keys(ingredients).forEach(ingredientName => {
    if (ingredients[ingredientName].length > 1) {
      rich[ingredientName] = ingredients[ingredientName];
    }
  })

  const sorted = Object.entries(rich).sort();

  result = sorted.map(item => {
    const ingredient = item[0];
    const dishes = item[1];

    return [ingredient, ...dishes];
  })

  return result;
}

console.log(solution(recipes));