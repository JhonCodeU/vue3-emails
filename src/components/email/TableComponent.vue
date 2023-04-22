
<template>
  <div>
    <table class="min-w-full divide-y divide-gray-200">
      <!-- Encabezado de la tabla omitido por brevedad -->
      <tbody class="bg-white divide-y divide-gray-200">
        <tr
          v-for="({ _source: email }, index) in displayedEmails"
          :key="index"
          @click="selectedEmail(email)"
        >
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{ email.Subject }}</div>
            <div class="text-sm text-gray-500">{{ email.Date }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{ email['X-Origin'] }}</div>
            <div class="text-sm text-gray-500">{{ email.From }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{ email['X-To'] }}</div>
            <div class="text-sm text-gray-500">{{ email.To }}</div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-center mt-4">
      <button
        class="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
        :disabled="currentPage === 1"
        @click="currentPage--"
      >
        Previous
      </button>

      <div class="flex items-center text-gray-700">Page {{ currentPage }} of {{ totalPages }}</div>

      <button
        class="px-4 py-2 bg-blue-500 text-white rounded-lg ml-2"
        :disabled="currentPage === totalPages"
        @click="currentPage++"
      >
        Next
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TableComponent',
  props: {
    emails: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 10
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.emails.length / this.pageSize)
    },
    displayedEmails() {
      const start = (this.currentPage - 1) * this.pageSize
      const end = start + this.pageSize
      return this.emails.slice(start, end)
    }
  },
  methods: {
    selectedEmail(email) {
      this.$emit('selectedEmail', email)
    }
  }
}
</script>