// Getters
export default {
  saveLocal: (state) => state.saveLocal,
  app_name: (state) => state.setting.app_name.value,
  theme_scheme: (state) => state.setting.theme_scheme.value,
  theme_scheme_direction: (state) => state.setting.theme_scheme_direction.value,
  theme_style_appearance: (state) => state.setting.theme_style_appearance.value,
  theme_color: (state) => state.setting.theme_color,
  theme_transition: (state) => state.setting.theme_transition.value,
  theme_font_size: (state) => state.setting.theme_font_size.value,
  // page_layout: (state) => state.setting.page_layout.value,
  header_navbar: (state) => state.setting.header_navbar.value,
  // header_banner: (state) => state.setting.header_banner.value,
  sidebar_color: (state) => state.setting.sidebar_color.value,
  sidebar_type: (state) => state.setting.sidebar_type.value,
  sidebar_show: (state) => state.setting.sidebar_show.value,
  navbar_show: (state) => state.setting.navbar_show.value,
  sidebar_menu_style: (state) => state.setting.sidebar_menu_style.value,
  card_style: (state) => state.setting.card_style.value,
  // footer_style: (state) => state.setting.footer_style.value,
  body_font_family: (state) => state.setting.body_font_family.value,
  heading_font_family: (state) => state.setting.heading_font_family.value,
  settingObj: (state) => state
}
