<script>
import inputTextRaw from '@/inputs/1.txt?raw'
import DeepCopyMethod from '@/mixins/DeepCopyMethod.vue';

export default {
  mixins: [DeepCopyMethod],
  data() {
    return {}
  },
  computed: {
    processedInputs: function () {
      const list1 = []
      const list2 = []
      for (const line of inputTextRaw.split('\n')) {
        const parts = line.split('   ')
        list1.push(parseInt(parts[0]))
        list2.push(parseInt(parts[1]))
      }
      return [list1, list2]
    },
    sortedList1: function () {
      return this.processedInputs[0].sort()
    },
    sortedList2: function () {
      return this.processedInputs[1].sort()
    },
    distances: function () {
      const output = []
      let index = 0
      while (index < this.sortedList1.length) {
        const distances = [this.sortedList1[index], this.sortedList2[index]]
        distances.sort()
        output.push(distances[1] - distances[0])
        index++
      }
      return output
    },
    totalDistance: function () {
      let output = 0
      for (const distance of this.distances) {
        output = output + distance
      }
      return output
    },
    similarityScore: function () {
      const scores = []
      for (const item of this.sortedList1) {
        scores.push(item * this.deepCopy(this.sortedList2).filter(i => i === item).length)
      }
      return scores.reduce((partialSum, a) => partialSum + a, 0)
    }
  }
};
</script>

<template>
  <h1>Day 1</h1>
  <h2>Part 1 - Total Distance: {{ totalDistance }}</h2>
  <h2>Part 2 - Similarity Score: {{ similarityScore }}</h2>
</template>
