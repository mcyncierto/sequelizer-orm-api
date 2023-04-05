const BaseRepository = require("./BaseRepository");

class PostRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }

  async getPostsWithComments() {
    return await this.model.findAll({
      include: "comments",
    });
  }
}

module.exports = PostRepository;
