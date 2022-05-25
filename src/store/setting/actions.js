export default {
  setSetting: ({ commit }, payload) => commit('setSetting', payload),
  saveLocal: ({ commit }, payload) => commit('saveLocal', payload),
  app_name: ({ commit }, payload) => commit('app_name', payload),
  theme_scheme_direction: ({ commit }, payload) => commit('theme_scheme_direction', payload),
  theme_scheme: ({ commit }, payload) => commit('theme_scheme', payload),
  theme_color: ({ commit }, payload) => commit('theme_color', payload),
  header_navbar: ({ commit }, payload) => commit('header_navbar', payload),
  sidebar_color: ({ commit }, payload) => commit('sidebar_color', payload),
  sidebar_type: ({ commit }, payload) => commit('sidebar_type', payload),
  sidebar_menu_style: ({ commit }, payload) => commit('sidebar_menu_style', payload)
}
