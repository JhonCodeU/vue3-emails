<template>
  <div class="grid grid-cols-2 gap-4">
    <div class="col-span-2">
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
    </div>
    <div>
      <TableComponent :emails="emails" @selectedEmail="selectedEmail = $event" />
    </div>
    <div>
      <InfoEmail :selectedEmail="selectedEmail" />
    </div>
    Total emails: {{ totalEmailsCount }}
  </div>
</template>
<script>
import TitleComponent from '@/components/TitleComponent.vue'
import EmailController from '../controllers/email.controller'
import TableComponent from '../components/email/TableComponent.vue'
import InfoEmail from '../components/email/InfoEmail.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'HomeView',
  components: {
    TitleComponent,
    TableComponent,
    InfoEmail
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
  }
}
</script>