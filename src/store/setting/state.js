// Initial Setting State
export const initialState = {
  saveLocal: 'sessionStorage',
  storeKey: 'huisetting',
  setting: {
    app_name: {
      value: 'Hope UI'
    },
    theme_scheme_direction: {
      value: 'ltr'
    },
    theme_scheme: {
      value: 'light'
    },
    theme_style_appearance: {
      value: ['theme-default']
    },
     theme_color: {
      colors: {
        "--{{prefix}}primary": "#3a57e8",
        "--{{prefix}}info": "#08B1BA"
      },
      value: "theme-color-default"
    },
    theme_font_size: {
      value: 'theme-fs-sm'
    },
    // page_layout: {
    //   value: 'container'
    // },
    sidebar_color: {
      value: 'sidebar-white'
    },
    sidebar_type: {
      value: []
    },
    sidebar_menu_style: {
      value: 'sidebar-default navs-rounded-all'
    },
    header_navbar: {
      value: 'default'
    },
    header_banner: {
      value: 'default'
    }
  }
}

// Default Setting State
export const defaultState = {
  saveLocal: 'sessionStorage',
  storeKey: 'huisetting',
  setting: {
    app_name: {
      target: '[data-setting="app_name"]',
      choices: [],
      type: 'text',
      value: 'Hope UI'
    },
    theme_scheme_direction: {
      target: 'html',
      choices: ['ltr', 'rtl'],
      type: 'layout_design',
      value: 'ltr'
    },
    theme_scheme: {
      target: 'body',
      choices: ['light', 'dark', 'auto'],
      type: 'layout_design',
      value: 'light'
    },
      theme_color: {
      target: "body",
      choices: [
        "theme-color-blue",
        "theme-color-gray",
        "theme-color-red",
        "theme-color-yellow",
        "theme-color-pink",
        "theme-color-default",
      ],
      type: "default",
      colors: {
        "--{{prefix}}primary": "#3a57e8",
        "--{{prefix}}info": "#08B1BA",
      },
      value: "theme-color-default",
    },
    theme_font_size: {
      target: 'html',
      choices: ['theme-fs-sm', 'theme-fs-md', 'theme-fs-lg'],
      type: 'layout_design',
      value: 'theme-fs-sm'
    },
    // page_layout: {
    //   target: '#page_layout',
    //   choices: ['container', 'container-fluid'],
    //   type: 'layout_design',
    //   value: 'container-fluid'
    // },
    sidebar_color: {
      target: '[data-toggle="main-sidebar"]',
      choices: ['sidebar-white', 'sidebar-dark', 'sidebar-color'],
      type: 'layout_design',
      value: 'sidebar-white'
    },
    sidebar_type: {
      target: '[data-toggle="main-sidebar"]',
      choices: ['sidebar-hover', 'sidebar-mini', 'sidebar-soft'],
      type: 'layout_design',
      value: []
    },
    sidebar_menu_style: {
      target: '[data-toggle="main-sidebar"]',
      choices: ['sidebar-default navs-rounded', 'sidebar-default navs-rounded-all', 'sidebar-default navs-pill', 'sidebar-default navs-pill-all'],
      type: 'layout_design',
      value: 'sidebar-default navs-rounded-all'
    },
    header_navbar: {
      target: '.iq-navbar',
      choices: ['default', 'fixed', 'navs-sticky', 'nav-glass', 'navs-transparent', 'boxed', 'hidden'],
      type: 'layout_design',
      value: 'default'
    },
    header_banner: {
      target: '.iq-banner',
      choices: ['default', 'navs-bg-color', 'hide'],
      type: 'layout_design',
      value: 'default'
    }
  }
}
