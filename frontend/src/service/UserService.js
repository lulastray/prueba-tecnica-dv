const BASE_URL = process.env.VUE_APP_API_URL;

const UserService = {
  async findAll() {
    return await fetch(`${BASE_URL}/`, {
      method: "GET",
    });
  },

  async findOne(id) {
    return (
      await fetch(`${BASE_URL}/${id}`),
      {
        method: "GET",
      }
    );
  },
};

export default UserService;
