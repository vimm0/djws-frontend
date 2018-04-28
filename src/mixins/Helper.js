export default {
  name: 'Helper',
  data () {
    return {
      colorCache: {}
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    capitalizeTags: function (data) {
      return data.replace(/\b\w/g, l => l.toUpperCase())
    },
    truncate: function (text, stop, clamp) {
      return text.split(' ').slice(0, stop).join(' ') + (stop < text.length ? clamp || ' ...' : '')
    },
    jsDate: function (date) {
      return new Date(date).toDateString() // DD MM YY
    }
  },
  methods: {
    pluralTag: function (data) {
      return data > 1
    },
    getListContent: function (data) {
      return this.$options.filters.truncate(data, 5, ' ...')
    },
    getSideBarConent: function (data) {
      return this.$options.filters.truncate(data, 5, ' ...')
    },
    getCommentContent: function (data) {
      return this.$options.filters.truncate(data, 5, ' ...')
    },
    randomColor (id) {
      const r = () => Math.floor(256 * Math.random())
      // let oneColor = ''
      // let anotherColor = ''
      // const possible = 'ABCDEF0123456789'
      //
      // for (let i = 0; i < 6; i++) {
      //   oneColor += possible.charAt(Math.floor(Math.random() * possible.length).toString(16))
      //   anotherColor += possible.charAt(Math.floor(Math.random() * possible.length).toString(16))
      // }
      // console.log('#' + oneColor)
      // console.log('#' + anotherColor)
      // return this.colorCache[id] || (this.colorCache[id] = `radial-gradient(circle, ${'#' + oneColor} 0%, ${'#' + anotherColor} 100%)`)
      return this.colorCache[id] || (this.colorCache[id] = `rgb(${r()}, ${r()}, ${r()})`)
    }
  },
  mounted () {
    // this.getRandomColors()
  }
}
