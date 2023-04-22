<template>
  <!-- component -->
  <div class="flex-1 px-2">
    <div class="mb-6">
      <h4 class="text-lg text-gray-800 font-bold pb-2 mb-4 border-b-2">
        {{ email.Subject }}
      </h4>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div class="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-4">
            {{ email['X-Origin'].charAt(0).toUpperCase() }}
          </div>
          <div class="flex flex-col ml-2">
            <span class="text-sm font-semibold">{{ email['X-Origin'] }}</span>
            <span class="text-xs text-gray-400">{{ email.From }}</span>
          </div>
        </div>
        <span class="text-sm text-gray-500">{{ email.Date }}</span>
      </div>
      <div class="py-6 pl-2 text-gray-700">
        <p>Hi John!</p>
        <p class="mt-4">
          {{ email.Body }}
        </p>
      </div>

      <div class="mt-8 flex items-center space-x-4">
        <button
          class="w-32 flex items-center justify-center space-x-2 py-1.5 text-gray-600 border border-gray-400 rounded-lg hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Reply</span>
        </button>
        <button
          class="w-32 flex items-center justify-center space-x-2 py-1.5 text-gray-600 border border-gray-400 rounded-lg hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            ></path>
          </svg>
          <span>Forward</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InfoEmail',
  props: {
    email: {
      type: Object,
      required: true
    }
  }
}
</script>
         
<style>
.cls-1,
.cls-2 {
  fill-rule: evenodd;
}
.cls-2 {
  fill: red;
}
.cls-3 {
  fill: #fff;
}
.st0 {
  fill: #41a5ee;
}
.st1 {
  fill: #2b7cd3;
}
.st2 {
  fill: #185abd;
}
.st3 {
  fill: #103f91;
}
.st4 {
  opacity: 0.1;
  enable-background: new;
}
.st5 {
  opacity: 0.2;
  enable-background: new;
}
.st6 {
  fill: url(#SVGID_1_);
}
.st7 {
  fill: #ffffff;
}
</style>