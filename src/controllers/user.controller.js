import axios from "../config/axios";
import { v4 as uuid } from "uuid";

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
  createUser: async (user) => {
    // Lógica para crear un usuario
    try {
      delete user._id;
      const payload = {
        _id: uuid(),
        ...user
      }
      const { data } = await axios.post('/user', payload)
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  updateUser: async ({ _id, name, role }) => {
    // Lógica para actualizar un usuario
    try {
      const payload = { _id, name, role }
      const { data } = await axios.put(`/user`, payload)
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