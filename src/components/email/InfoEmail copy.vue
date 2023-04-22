<template>
  <div v-if="selectedEmail">
    <h2 class="text-2xl font-bold mb-4">{{ selectedEmail.Subject }}</h2>
    <div class="flex items-center mb-4">
      <div class="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-4">
        {{ selectedEmail.From.charAt(0).toUpperCase() }}
      </div>
      <div>
        <div class="text-gray-900 font-bold">{{ selectedEmail.From }}</div>
        <div class="text-gray-500">{{ selectedEmail['X-Origin'] }}</div>
      </div>
    </div>
    <div class="border-t border-gray-200 py-4">
      <div class="text-sm font-bold text-gray-500 mb-2">To</div>
      <div class="text-gray-900">{{ selectedEmail['X-To'] }}</div>
      <div class="text-gray-500">{{ selectedEmail.To }}</div>
    </div>
    <div class="border-t border-gray-200 py-4">
      <div class="text-sm font-bold text-gray-500 mb-2">Message</div>
      <div class="mt-2 text-gray-900 leading-7">{{ selectedEmail.Body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoEmail',
  props: {
    selectedEmail: {
      type: Object,
      required: true
    }
  }
}
</script>
