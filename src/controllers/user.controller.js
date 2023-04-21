import axios from "../config/axios";

const UserController = {

  getUsers: async () => {
    // Lógica para obtener los usuarios
    try {
      const { data } = await axios.get('/users')
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  deleteUser: async (id) => {
    // Lógica para eliminar un usuario
    try {
      const { data } = await axios.delete(`/user/${id}`)
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};

export default UserController;