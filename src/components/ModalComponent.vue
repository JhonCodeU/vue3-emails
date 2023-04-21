<template>
  <div
    class="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex items-center justify-center"
  >
    <div class="bg-white rounded-lg overflow-hidden w-96">
      <div class="bg-gray-100 text-gray-800 font-bold px-4 py-3">
        {{ title }}
        <button
          @click="$emit('close')"
          class="float-right text-gray-700 hover:text-gray-900 focus:text-gray-900 transition duration-150 ease-in-out"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20">
            <path
              d="M14.348 5.652a.5.5 0 00-.707 0L10 9.293 6.356 5.65a.5.5 0 10-.707.707L9.293 10l-3.646 3.646a.5.5 0 00.708.708L10 10.707l3.646 3.647a.5.5 0 00.708-.708L10.707 10l3.647-3.646a.5.5 0 000-.707z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="p-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
