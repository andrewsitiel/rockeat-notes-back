const knex = require("../database/knex/index");

class TagsController {
  async index (request, response) {
    const user_id = request.user.id;

    const userTags = await knex("tags").where({user_id}).groupBy("name").orderBy("name");

    return response.status(200).json(userTags);
  };
};

module.exports = TagsController;