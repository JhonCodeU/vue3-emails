
<template>
  <div>
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Subject
          </th>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            From
          </th>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Date
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr
          v-for="({ _source: email }, index) in displayedEmails"
          :key="index"
          @click="selectedEmail(email)"
          class="cursor-pointer"
        >
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm font-medium text-gray-900">{{ email.Subject }}</div>
            <div class="text-sm text-gray-500">{{ email.From }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">{{ email.Date }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">{{ email.To }}</div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-between mt-4">
      <div class="flex items-center text-gray-700">Page {{ currentPage }} of {{ totalPages }}</div>
      <div>
        <button
          class="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          :disabled="currentPage === 1"
          @click="currentPage--"
        >
          Previous
        </button>
        <button
          class="ml-3 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          :disabled="currentPage === totalPages"
          @click="currentPage++"
        >
          Next
        </button>
      </div>
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