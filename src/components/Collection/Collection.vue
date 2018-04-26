<template>
  <div>
    <slot name="results" :results="results">
    </slot>
  </div>
</template>
<script>
export default {
  props: ['endPoint'],
  data () {
    return {
      currentEndPoint: this.endPoint,
      results: []
    }
  },
  methods: {
    $_get (url) {
      global.axios.get(url).then(
        ({data}) => {
          this.currentEndPoint = url
          this.results = data
          console.log(this.results)
        }
      )
    }
  },
  created () {
    this.$_get(this.endPoint)
  }
}
</script>
