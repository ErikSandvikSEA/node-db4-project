
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    {
      //id: 1
      recipe_name: 'Cup of Coffee'
    },
    {
      //id: 2
      recipe_name: 'Bowl of Cereal'
    }
  ])
};
