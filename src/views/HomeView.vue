<template>
  <div class="grid grid-cols-1 gap-4">
    <div>
      <div class="flex justify-between mb-4">
        <TitleComponent />
        <div class="flex">
          <input
            v-model="search"
            type="text"
            class="rounded-l-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Search emails..."
          />
          <button @click="searchValue" class="bg-gray-200 hover:bg-gray-300 rounded-r-lg px-4 py-2">
            Search
          </button>
        </div>
      </div>
    </div>
    <div>
      <InboxGmail :search="search" />
    </div>
    Total emails: {{ totalEmailsCount }}
  </div>
</template>
<script>
import TitleComponent from '@/components/TitleComponent.vue'
import InboxGmail from '../components/email/InboxGmail.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'HomeView',
  components: {
    TitleComponent,
    InboxGmail
  },
  data() {
    return {
      search: ''
    }
  },
  computed: {
    ...mapGetters(['totalEmails']),
    totalEmailsCount() {
      return this.totalEmails
    }
  }
}
</script>