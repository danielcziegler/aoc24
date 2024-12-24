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
        if (this.isReportSafe(report)) {
          safeReports++
        }
      }
      return safeReports
    },
    numberOfSafeReportsAllowingSingleRemovedItemToCheckForSuccess: function () {
      let safeReports = 0
      for (const report of this.processedInput) {
        const isSafe = this.isReportSafe(report)
        if (isSafe === null) {
          safeReports++
          continue
        }

        let anyPass = false
        for (const variation of this.returnArrayInEveryIterationRemovingSingleItem(report)) {
          if (anyPass) {
            continue
          }
          if (this.isReportSafe(variation)) {
            anyPass = true
            break
          }
        }
        if (anyPass) {
          safeReports++
        }
      }
      return safeReports
    }
  },
  methods: {
    returnArrayInEveryIterationRemovingSingleItem(inputArr) {
      const output = []
      let index = 0
      while (index <= inputArr.length) {
        const temp = []
        let workingIndex = 0
        while (workingIndex <= inputArr.length) {
          if (workingIndex != index) {
            const tempValue = inputArr[workingIndex]
            if (tempValue !== undefined) {
              temp.push(tempValue)
            }
          }
          workingIndex++
        }
        if (temp.length < inputArr.length) {
          output.push(temp)
        }
        index++
      }
      return output
    },
    isReportSafe(report) {
      let isAscending = null
      let previousLevel = null
      let index = -1

      for (let currentLevel of report) {
        index++
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
  <h2>Part 2 - Total number of Safe Reports with Problem Dampner: {{
    numberOfSafeReportsAllowingSingleRemovedItemToCheckForSuccess }}</h2>
</template>
