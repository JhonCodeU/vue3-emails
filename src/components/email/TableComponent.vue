
<template>
  <div class="bg-gray-100 mb-6">
    <ul>
      <li
        v-for="({ _source: email }, index) in displayedEmails"
        :key="index"
        @click="selectedEmail(email)"
        class="flex items-center border-y hover:bg-gray-200 px-2"
      >
        <input type="checkbox" class="focus:ring-0 border-2 border-gray-400" />
        <div
          x-data="{ messageHover: false }"
          @mouseover="messageHover = true"
          @mouseleave="messageHover = false"
          class="w-full flex items-center justify-between p-1 my-1 cursor-pointer"
        >
          <div class="flex items-center">
            <div class="flex items-center mr-4 ml-1 space-x-1">
              <button title="Not starred">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-gray-500 hover:text-gray-900 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
              </button>
              <button title="Click to mark this email as important">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-gray-500 hover:text-gray-900 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  ></path>
                </svg>
              </button>
            </div>
            <span class="w-56 pr-2 truncate">{{ email['X-Origin'] }}</span>
            <span class="w-64 truncate">{{
              email.Subject != '' ? email.Subject : 'No Subject'
            }}</span>
            <span class="mx-1">-</span>
            <span class="w-96 text-gray-600 text-sm truncate">{{ email.Body }}</span>
          </div>
          <div class="w-32 flex items-center justify-end">
            <div x-show="messageHover" class="flex items-center space-x-2" style="display: none">
              <button title="Archive">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-gray-500 hover:text-gray-900 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                  ></path>
                </svg>
              </button>
              <button title="Delete">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-gray-500 hover:text-gray-900 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  ></path>
                </svg>
              </button>
              <button title="Mark As Unread">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-gray-500 hover:text-gray-900 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </button>
              <button title="Snooze">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-gray-500 hover:text-gray-900 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </button>
            </div>
            <span x-show="!messageHover" class="text-sm text-gray-500"> 3:05 PM </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'TableComponent',
  props: {
    displayedEmails: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectedEmail(email) {
      this.$emit('selectedEmail', email)
    },
    next() {
      this.$emit('next')
    }
  }
}
</script>