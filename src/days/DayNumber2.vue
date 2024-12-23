<script>
import inputTextRaw from '@/inputs/2.txt?raw'

export default {
  mixins: [],
  data() {
    return {}
  },
  computed: {
    processedInput: function () {
      const reports = []
      for (const line of inputTextRaw.split('\n')) {
        reports.push(line.split(' '))
      }
      return reports
    },
    numberOfSafeReports: function () {
      let safeReports = 0
      for (const report of this.processedInput) {
        const isSafe = this.isReportSafe(report)
        console.log(report, isSafe)
        if (isSafe) {
          safeReports++
        }
      }
      return safeReports
    }
  },
  methods: {
    isReportSafe(report) {
      let isAscending = null
      let previousLevel = null

      for (let currentLevel of report) {
        currentLevel = parseInt(currentLevel)

        if (previousLevel === null) {
          previousLevel = parseInt(currentLevel)
          continue
        }

        if (currentLevel === previousLevel) {
          return false
        }

        if (isAscending === null) {
          isAscending = currentLevel > previousLevel
        }

        if (isAscending && currentLevel < previousLevel) {
          return false
        }
        if (!isAscending && currentLevel > previousLevel) {
          return false
        }

        let difference = currentLevel - previousLevel
        if (!isAscending) {
          difference = previousLevel - currentLevel
        }
        if (difference < 1 || difference > 3) {
          return false
        }

        previousLevel = parseInt(currentLevel)
      }

      return true
    }
  }
}
</script>

<template>
  <h1>Day 2</h1>
  <h2>Part 1 - Total number of Safe Reports: {{ numberOfSafeReports }}</h2>
  <h2>Part 2</h2>
</template>
