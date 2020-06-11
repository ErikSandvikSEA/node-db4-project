
exports.up = function(knex) {
  return knex.schema
     .createTable('ingredients', tbl => {
          tbl.increments();
          tbl.string('ingredient_name').notNullable().index()
          tbl.integer('ingredient_quantity').notNullable();
     })
     .createTable('steps', tbl => {
          tbl.increments();
          tbl.string('step_text').notNullable().index();
     })
     .createTable('recipes', tbl => {
          tbl.increments()
          tbl.string('recipe_name').notNullable().index();
     })
     .createTable('instructions', tbl => {
          tbl.increments();
          tbl
               .integer("recipe_id")
               .unsigned()
               .references('recipes.id')
               .onDelete('RESTRICT')
               .onUpdate('CASCADE');
          tbl
               .integer('step_number')
               .unsigned()
               .references('steps.id')
               .onDelete('RESTRICT')
               .onUpdate('CASCADE');
     })
     .createTable('recipe_shopping_list', tbl => {
          tbl.increments()
          tbl
               .integer("recipe_id")
               .unsigned()
               .references('recipes.id')
               .onDelete('RESTRICT')
               .onUpdate('CASCADE');
          tbl
               .integer('ingredient_id')
               .unsigned()
               .references('ingredients.id')
               .onDelete('RESTRICT')
               .onUpdate('CASCADE');
     })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('recipe_shopping_list')
  .dropTableIfExists('instructions')
  .dropTableIfExists('recipes')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('steps')
};
