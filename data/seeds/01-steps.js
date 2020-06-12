
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').insert([
    {
      //id: 1
      step_text: 'Get hot water, coffee grounds, and filter',
      recipe_id: 1
    },
    {
      // id: 2
      step_text: 'Pour hot water through grounds in filter',
      recipe_id: 1
    },
    {
      //id: 3
      step_text: 'Get bowl, milk, cereal, & spoon',
      recipe_id: 2
    },
    {
      //id: 4
      step_text: 'Pour in cereal, then milk, then enjoy',
      recipe_id: 2
    }
  ]);
};
