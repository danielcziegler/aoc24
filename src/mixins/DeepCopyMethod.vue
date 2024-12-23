<script>
export default {
    methods: {
        deepCopy(input) {
            return JSON.parse(JSON.stringify(input))
        }
    }
}
</script>
