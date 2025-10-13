<template>
  <div class="dot-rating">
    <span
      v-for="n in maxDots"
      :key="n"
      class="dot"
      :class="{ filled: n <= currentValue, empty: n > currentValue }"
      @click="handleClick(n)"
      @keydown.enter="handleClick(n)"
      @keydown.space.prevent="handleClick(n)"
      tabindex="0"
      role="button"
    >
      {{ n <= currentValue ? '●' : '○' }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'DotRating',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    maxDots: {
      type: Number,
      default: 5,
    },
    minValue: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    currentValue() {
      return this.value || this.minValue;
    },
  },
  methods: {
    handleClick(dotValue) {
      // If clicking the current value, don't decrease below minValue
      if (dotValue === this.currentValue && this.currentValue > this.minValue) {
        this.$emit('input', dotValue - 1);
      } else if (dotValue !== this.currentValue) {
        this.$emit('input', dotValue);
      }
    },
  },
};
</script>

<style scoped>
.dot-rating {
  display: inline-flex;
  gap: 4px;
  cursor: pointer;
  user-select: none;
}

.dot {
  font-size: 24px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.dot.filled {
  color: #9c27b0;
}

.dot.empty {
  color: #ccc;
}

.dot:hover {
  transform: scale(1.2);
}
</style>
