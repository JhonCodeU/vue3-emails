<template>
  <div class="flex justify-center space-x-2">
    <button
      :disabled="currentPage === 1"
      class="px-3 py-1 text-gray-600 rounded-md border border-gray-300 hover:bg-gray-100"
      @click="paginate(currentPage - 1)"
    >
      Previous
    </button>

    <template v-for="pageNumber in visiblePages" :key="pageNumber">
      <button
        class="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100"
        :class="{ 'text-white bg-blue-600': currentPage === pageNumber }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </button>
    </template>

    <button
      :disabled="currentPage === totalPages"
      class="px-3 py-1 text-gray-600 rounded-md border border-gray-300 hover:bg-gray-100"
      @click="paginate(currentPage + 1)"
    >
      Next
    </button>
  </div>
</template>


<script>
export default {
  name: 'PaginationComponent',
  props: {
    value: {
      type: Number,
      required: true
    },
    totalVisible: {
      type: Number,
      default: 5
    },
    totalItems: {
      type: Number,
      required: true
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.totalVisible)
    },
    currentPage: {
      get() {
        return this.value
      },
      set(newPage) {
        this.$emit('input', newPage)
      }
    },
    visiblePages() {
      const half = Math.floor(this.totalVisible / 2)
      let start = Math.max(this.currentPage - half, 1)
      let end = start + this.totalVisible - 1

      if (end > this.totalPages) {
        end = this.totalPages
        start = Math.max(end - this.totalVisible + 1, 1)
      }

      return Array(end - start + 1)
        .fill()
        .map((_, i) => start + i)
    }
  },
  methods: {
    paginate(pageNumber) {
      if (pageNumber < 1 || pageNumber > this.totalPages) {
        return
      }

      this.currentPage = pageNumber
    }
  }
}
</script>
