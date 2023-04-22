<template>
  <div class="grid grid-cols-2 gap-4">
    <div>
      <div class="flex justify-between mb-4">
        <TitleComponent />
        <div class="flex">
          <input
            type="text"
            class="rounded-l-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Search emails..."
          />
          <button class="bg-gray-200 hover:bg-gray-300 rounded-r-lg px-4 py-2">Search</button>
        </div>
      </div>
      <table class="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Subject
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              From
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              To
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr
            v-for="({ _source: email }, index) in emails"
            :key="index"
            @click="selectedEmail = email"
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
    </div>
    <div v-if="selectedEmail">
      <h2 class="text-lg font-medium mb-4">{{ selectedEmail.Subject }}</h2>
      <div class="flex items-center mb-4">
        <div class="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-4">
          {{ selectedEmail.From.charAt(0).toUpperCase() }}
        </div>
        <div>
          <div class="text-gray-900 font-medium">{{ selectedEmail.From }}</div>
          <div class="text-gray-500">{{ selectedEmail['X-Origin'] }}</div>
        </div>
      </div>
      <div class="border-t border-gray-200 py-4">
        <div class="text-sm font-medium text-gray-500">To</div>

        <div class="text-gray-900">{{ selectedEmail['X-To'] }}</div>
        <div class="text-gray-500">{{ selectedEmail.To }}</div>
      </div>
      <div class="border-t border-gray-200 py-4">
        <div class="text-sm font-medium text-gray-500">Message</div>
        <div class="mt-2 text-gray-900">{{ selectedEmail.Body }}</div>
      </div>
    </div>
    Total emails: {{ totalEmailsCount }}
  </div>
</template>
<script>
import TitleComponent from '@/components/TitleComponent.vue'
import EmailController from '../controllers/email.controller'
import { mapGetters } from 'vuex'
export default {
  name: 'HomeView',
  components: {
    TitleComponent
  },
  computed: {
    ...mapGetters(['totalEmails', 'allEmails']),
    totalEmailsCount() {
      return this.totalEmails
    }
  },
  data() {
    return {
      emails: [],
      selectedEmail: null
    }
  },
  async created() {
    await EmailController.getAllEmails()
    this.emails = this.allEmails
    console.log(this.emails)
  }
}
</script>