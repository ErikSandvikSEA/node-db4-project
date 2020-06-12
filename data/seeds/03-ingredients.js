
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    {
      //id: 1
      ingredient_name: 'Cheerios',
      ingredient_quantity: 2
    },
    {
      // id: 2
      ingredient_name: 'Milk',
      ingredient_quantity: 3
    },
    {
      ingredient_name: 'Coffee Grounds',
      ingredient_quantity: 3
    },
    {
      ingredient_name: 'Hot Water',
      ingredient_quantity: 1
    }
  ])
};
