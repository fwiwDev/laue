import Chart from '../mixins/chart'
import {getCoordinates} from '../utils/point'
import line from 'd3-shape/src/line'
import cardinal from 'd3-shape/src/curve/cardinal'
import {int} from '../utils/math'
import {isFn} from '../utils/core'

export default {
  name: 'LaLine',

  mixins: [Chart],

  props: {
    color: String,

    curve: [Boolean, Function],

    dot: Boolean,

    width: {
      type: Number,
      default: 1
    }
  },

  render(h) {
    const {curve} = this
    const dotSlot = this.$scopedSlots.default
    const points = getCoordinates(this.values, this.canvas)
    const l = line()

    if (curve) {
      l.curve(isFn(curve) ? curve : cardinal)
    }

    return h('g', [
      h('path', {
        attrs: {
          stroke: this.color,
          fill: 'none',
          'stroke-width': this.width,
          d: l(points)
        }
      }),
      this.dot &&
        h(
          'g',
          points.map(p =>
            h('circle', {
              attrs: {
                cx: p[0],
                cy: p[1],
                r: int(this.width) + 1,
                stroke: '#fff',
                fill: this.color
              }
            })
          )
        ),
      dotSlot &&
        h(
          'g',
          points.map((p, i) =>
            dotSlot({
              x: p[0],
              y: p[1],
              value: this.values[i],
              index: i
            })
          )
        )
    ])
  }
}