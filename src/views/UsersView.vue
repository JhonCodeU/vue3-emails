<template>
  <div class="container mx-auto py-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold mb-4">Tabla de Usuarios</h2>
      <button
        @click="showModal = true"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Crear usuario
      </button>
    </div>
    <div class="w-full overflow-x-auto">
      <table class="min-w-full text-center text-sm font-light">
        <thead
          class="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800"
        >
          <tr class="text-gray-600">
            <th class="px-4 py-3">#</th>
            <th class="px-4 py-3">Nombre</th>
            <th class="px-4 py-3">Rol</th>
            <th class="px-4 py-3">Creado</th>
            <th class="px-4 py-3">Actualizado</th>
            <th class="px-4 py-3">Acciones</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="(user, index) in users" :key="user._id">
            <td class="px-4 py-3">{{ index + 1 }}</td>
            <td class="px-4 py-3">{{ user.name }}</td>
            <td class="px-4 py-3">{{ user.role }}</td>
            <td class="px-4 py-3">{{ formatDate(user.created_at) }}</td>
            <td class="px-4 py-3">{{ formatDate(user.updated_at) }}</td>
            <td class="px-4 py-3">
              <button
                class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                @click="editUser(user)"
              >
                Editar
              </button>
              <button
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2"
                @click="deleteUser(user._id)"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Modal v-if="showModal" @close="showModal = false" :title="titleModal">
      <form @submit.prevent="submit" class="w-full max-w-sm">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Nombre </label>
        <input
          v-model="user.name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Nombre"
        />
        <div v-if="!isEdit">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Contraseña
          </label>
          <input
            v-model="user.password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="role"> Rol </label>
        <select
          v-model="user.role"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="role"
        >
          <option value="admin">Administrador</option>
          <option value="user">Usuario</option>
        </select>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          type="submit"
        >
          {{ isEdit ? 'Editar' : 'Crear' }}
        </button>
      </form>
    </Modal>
  </div>
</template>

<script>
import Modal from '../components/ModalComponent.vue'
import userController from '../controllers/user.controller'

export default {
  name: 'UsersView',
  components: {
    Modal
  },
  data() {
    return {
      titleModal: 'Crear usuario',
      showModal: false,
      isEdit: false,
      user: {
        _id: '',
        name: '',
        password: '',
        role: ''
      },
      users: [
        {
          _id: 'iroman',
          name: 'Iroman 2',
          role: 'admin',
          created_at: '2023-04-20T16:17:05.795036627-05:00',
          updated_at: '2023-04-20T16:21:48.031786165-05:00'
        },
        {
          _id: 'spiderman',
          name: 'Spiderman',
          role: 'user',
          created_at: '2023-04-20T16:17:05.795036627-05:00',
          updated_at: '2023-04-20T16:21:48.031786165-05:00'
        }
      ]
    }
  },
  async created() {
    this.users = await userController.getUsers()
  },
  methods: {
    async editUser(user) {
      this.showModal = true
      this.isEdit = true
      this.titleModal = `Editar usuario ${this.user.name}`
      this.user = { ...user }
    },
    createUser() {
      this.isEdit = false
    },
    async deleteUser(id) {
      const resp = await userController.deleteUser(id)
      console.log(resp)
      this.users = await userController.getUsers()
    },
    async submit() {
      if (this.titleModal === 'Crear usuario') {
        await userController.createUser(this.user)
      } else {
        await userController.updateUser(this.user)
      }
      this.showModal = false
      this.users = await userController.getUsers()
    },
    formatDate(date) {
      // Función para formatear la fecha y hora en formato legible
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      }
      return new Date(date).toLocaleDateString('es-MX', options)
    }
  }
}
</script>
