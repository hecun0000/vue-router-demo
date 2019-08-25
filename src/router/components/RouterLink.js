export default {
  name: 'RouterLink',
  props: {
    tag: {
      type: String,
      default: 'a'
    },
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick () {
      this.$router.push(this.to)
    }
  },
  render: function (h) {
    let obj = {}
    console.log(this, 'this.$route.mode')
    if (this.tag === 'a' && this.$router.mode === 'hash') {
      obj.attrs = {
        href: '#' + this.to
      }
    } else {
      obj.on = {
        click: this.handleClick
      }
    }
    return h(
      this.tag,
      obj,
      this.$slots.default
    )
  }
}
