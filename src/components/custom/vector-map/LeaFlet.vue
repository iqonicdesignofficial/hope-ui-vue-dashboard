<template>
  <div :id="id" :style="'height: ' + height + 'px;'">
    <slot></slot>
  </div>
</template>
<script>
import L from 'leaflet'
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 500
    },
    options: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.mapoption()
  },
  methods: {
    mapoption() {
      const map = L.map(this.id).setView([37.8, -96], 4)
      const statesData = {
        type: 'FeatureCollection',
        features: this.options
      }

      const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      const tileLayer = L.tileLayer(tileUrl, { attribution })

      function getColor(d) {
        return d > 1000 ? '#172d69' : d > 500 ? '#1c367d' : d > 200 ? '#203f92' : d > 100 ? '#2548a7' : d > 50 ? '#2950bc' : d > 20 ? '#2e59d1' : d > 10 ? '#d5def6' : '#c0cdf1'
      }
      function style(feature) {
        return {
          fillColor: getColor(feature.properties.density),
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
        }
      }

      L.geoJson(statesData, { style: style }).addTo(map)

      tileLayer.addTo(map)
      const cloudy = L.icon({
        iconUrl: require('@/assets/images/vectormap/cloudy.png'),
        iconSize: [70, 70], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
      })

      const day = L.icon({
        iconUrl: require('@/assets/images/vectormap/day.png'),
        iconSize: [70, 70], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
      })

      const rainy = L.icon({
        iconUrl: require('@/assets/images/vectormap/rainy-1.png'),
        iconSize: [70, 70], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
      })

      const snowy = L.icon({
        iconUrl: require('@/assets/images/vectormap/snowy-6.png'),
        iconSize: [70, 70], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
      })

      const cloudy22 = L.icon({
        iconUrl: require('@/assets/images/vectormap/cloudy-day-1.png'),
        iconSize: [70, 70], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
      })

      const thunder = L.icon({
        iconUrl: require('@/assets/images/vectormap/thunder.png'),
        iconSize: [70, 70], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
      })

      L.marker([37.8, -96], { icon: cloudy }).addTo(map).bindPopup('Cloudy Day')
      L.marker([31, -110.6], { icon: day }).addTo(map).bindPopup('Sunny Day')
      L.marker([32.4, -88.1], { icon: rainy }).addTo(map).bindPopup('Heavy Rain')
      L.marker([44.9, -92.9], { icon: snowy }).addTo(map).bindPopup('Snowy')
      L.marker([32.5, -99.1], { icon: cloudy22 }).addTo(map).bindPopup('Cloudy Sunny Day')
      L.marker([43.9, -111.8], { icon: thunder }).addTo(map).bindPopup('Thunder Strom')
    }
  }
}
</script>
<style>
@import '@/assets/vendor/leaflet/leaflet.css';
</style>
