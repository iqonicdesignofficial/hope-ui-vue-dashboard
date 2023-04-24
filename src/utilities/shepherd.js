// useShepherd function to create tour
import Shepherd from 'shepherd.js'

export const useShepherd = (steps, conditionToStart, callback = () => {}) => {
  const tour = new Shepherd.Tour({
    defaultStepOptions: {
      cancelIcon: {
        enabled: true
      },
      classes: 'class-1 class-2',
      scrollTo: { behavior: 'smooth', block: 'center' },
      when: {
        cancel: function () {
          window.sessionStorage.setItem('tour', 'true')
        }
      }
    }
  })
  tour.addSteps(steps)

  if (conditionToStart) {
    tour.start()
    callback()
  }

  return tour
}
