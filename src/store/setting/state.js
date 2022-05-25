// Initial Setting State
export const initialState = {
  setting: {
    app_name: 'Hope UI',
    theme_scheme: 'light',
    theme_scheme_direction: 'ltr',
    theme_color: 'theme-color-default',
    header_navbar: 'default',
    sidebar_color: 'sidebar-white',
    sidebar_type: [],
    sidebar_menu_style: 'navs-rounded-all'
  }
};

// Default settingChoices
export const settingChoices = {
  theme_scheme_direction: {
    choices: ["ltr", "rtl"]
  },
  theme_scheme: {
    choices: ["light", "dark", "auto"]
  },
  theme_color: {
    choices: [
      "theme-color-blue",
      "theme-color-gray",
      "theme-color-red",
      "theme-color-yellow",
      "theme-color-pink",
      "theme-color-default",
    ]
  },
  header_navbar: {
    choices: [
      "default",
      "navs-sticky",
      "nav-glass",
      "navs-transparent",
      "boxed",
    ]
  },
  sidebar_color: {
    choices: [
      "sidebar-white",
      "sidebar-dark",
      "sidebar-color",
      "sidebar-transparent",
    ]
  },
  sidebar_type: {
    choices: ["sidebar-hover", "sidebar-mini", "sidebar-boxed"],
    value: [],
  },
  sidebar_menu_style: {
    choices: [
      "navs-rounded",
      "navs-rounded-all",
      "navs-pill",
      "navs-pill-all"
    ],
    value: "left-bordered",
  }
}
