class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return await this.model.create(data);
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async findAll() {
    return await this.model.findAll();
  }

  async update(id, data) {
    const model = await this.findById(id);
    return await model.update(data);
  }

  async delete(id) {
    const model = await this.findById(id);
    return await model.destroy();
  }
}

module.exports = BaseRepository;
