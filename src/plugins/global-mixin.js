import _ from 'lodash'
export default {
  methods: {
    showBottomCanvas(name) {
      switch (name) {
        case 'shareOffcanvas':
          this.$store.dispatch('openBottomCanvasAction', { name: 'shareOffcanvas', value: true })
          break

        default:
          break
      }
    },
    showPopup(name) {
      switch (name) {
        case 'signIn':
          this.$store.dispatch('openModalAction', { name: 'signInPopup', value: true })
          break
        case 'signUp':
          this.$store.dispatch('openModalAction', { name: 'signUpPopup', value: true })
          break
        default:
          break
      }
    },
    hidePopup(name) {
      switch (name) {
        case 'signIn':
          this.$store.dispatch('openModalAction', { name: 'signInPopup', value: false })
          break
        case 'signUp':
          this.$store.dispatch('openModalAction', { name: 'signUpPopup', value: false })
          break
        default:
          break
      }
    },
    // Sweet Alert
    deleteSwal({ title = 'Are you sure?', message = 'You want to delete this item', deleteSwal = { type: 'success', title: 'Deleted!', message: 'Your item has been deleted.' } }, callback) {
      return this.$swal({
        title: title,
        text: message,
        icon: 'error',
        showCancelButton: true,
        backdrop: `rgba(60,60,60,0.8)`,
        confirmButtonText: 'Yes, delete it!',
        confirmButtonColor: '#c03221'
      }).then((result) => {
        if (result.isConfirmed) {
          if (_.isFunction(callback)) {
            callback
          }
          this.$swal(deleteSwal.title, deleteSwal.message, deleteSwal.type)
        }
      })
    },
    successSwal({ title = 'Added!', message = 'Your item has been Added to the ${property or page}.' }, callback) {
      return this.$swal({
        title: title,
        text: message,
        icon: 'success',
        showCancelButton: false,
        backdrop: `rgba(60,60,60,0.8)`,
        confirmButtonText: 'OK',
        confirmButtonColor: '#c03221'
      }).then((result) => {
        if (result.isConfirmed) {
          if (_.isFunction(callback)) {
            callback
          }
        }
      })
    }
  }
}
