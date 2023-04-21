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
          <button class="bg-gray-200 hover:bg-gray-300 rounded-r-lg px-4 py-2">
            Search
          </button>
        </div>
      </div>
      <table class="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Subject
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              From
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              To
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="(email, index) in emails" :key="index" @click="selectedEmail = email">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ email.subject }}</div>
              <div class="text-sm text-gray-500">{{ email.date }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ email.from }}</div>
              <div class="text-sm text-gray-500">{{ email.fromEmail }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ email.to }}</div>
              <div class="text-sm text-gray-500">{{ email.toEmail }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="selectedEmail">
      <h2 class="text-lg font-medium mb-4">{{ selectedEmail.subject }}</h2>
      <div class="flex items-center mb-4">
        <div class="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-4">
          {{ selectedEmail.from.charAt(0).toUpperCase() }}
        </div>
        <div>
          <div class="text-gray-900 font-medium">{{ selectedEmail.from }}</div>
          <div class="text-gray-500">{{ selectedEmail.fromEmail }}</div>
        </div>
      </div>
      <div class="border-t border-gray-200 py-4">
        <div class="text-sm font-medium text-gray-500">To</div>
       
    <div class="text-gray-900">{{ selectedEmail.to }}</div>
    <div class="text-gray-500">{{ selectedEmail.toEmail }}</div>
  </div>
  <div class="border-t border-gray-200 py-4">
    <div class="text-sm font-medium text-gray-500">Message</div>
    <div class="mt-2 text-gray-900">{{ selectedEmail.message }}</div>
  </div>
</div>
  </div>
</template>
<script>
import TitleComponent from "@/components/TitleComponent.vue";
export default {
  name: "HomeView",
  components: {
   TitleComponent 
  },
  data() {
    return {
      emails: [
        {
          subject: "Hello",
          from: "John Smith",
          fromEmail: "john@example.com",
          to: "Jane Doe",
          toEmail: "jane@example.com",
          date: "April 19, 2023",
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum tellus sed magna dictum, sed posuere lorem auctor. Proin non felis vitae odio iaculis interdum."
        },
        {
          subject: "Meeting tomorrow",
          from: "Alice Brown",
          fromEmail: "alice@example.com",
          to: "Bob Johnson",
          toEmail: "bob@example.com",
          date: "April 20, 2023",
          message: "Maecenas pharetra arcu in nisi venenatis, non varius quam tempor. Ut a augue non quam pharetra faucibus vel a orci."
        },
        {
          subject: "Vacation time",
          from: "Mary Green",
          fromEmail: "mary@example.com",
          to: "David Lee",
          toEmail: "david@example.com",
          date: "April 18, 2023",
          message: "Integer sed sagittis nisi, vel sodales sapien. Sed vel nulla tincidunt, tempus ex vitae, interdum tortor."
        }
      ],
      selectedEmail: null
    };
  }
};
</script>