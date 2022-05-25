import { settingChoices as DefaultSetting } from './state'
import { updateBodyClass, updateHtmlAttr, updateTitle, updateColor, updateStorage, updateDomValueBySetting, getStorage } from '../../utilities/setting'
import _ from 'lodash'

const Choices = {
  SchemeChoice: DefaultSetting.theme_scheme.choices,
  ColorChoice: DefaultSetting.theme_color.choices
}

const createSettingObj = (state) => {
  return {
    setting: _.cloneDeep(state.setting)
  }
}
const storageKey = 'huisetting'
const storage = 'sessionStorage'
export default {
  setSetting: (state) => {
    const json = getStorage(storageKey)
    if (json !== null && json !== 'none') {
      state.setting = json.setting
    }
    updateDomValueBySetting(_.cloneDeep(state.setting), Choices)
    updateStorage(storage, storageKey, createSettingObj(state))
  },
  app_name: (state, payload) => {
    if (typeof payload !== typeof undefined) {
      state.setting.app_name = payload
    }
    updateTitle(state.setting.app_name)
    updateStorage(storage, storageKey, createSettingObj(state))
  },
  theme_scheme_direction: (state, payload) => {
    if (typeof payload !== typeof undefined) {
      state.setting.theme_scheme_direction = payload
    }
    updateHtmlAttr({ prop: 'dir', value: state.setting.theme_scheme_direction })
    updateStorage(storage, storageKey, createSettingObj(state))
  },
  theme_scheme: (state, payload) => {
    if (typeof payload !== typeof undefined) {
      state.setting.theme_scheme = payload
    }
    updateBodyClass(Choices.SchemeChoice, state.setting.theme_scheme)
    updateStorage(storage, storageKey, createSettingObj(state))
  },
  theme_color: (state, payload) => {
    if (typeof payload !== typeof undefined) {
      state.setting.theme_color = payload
    }
    updateColor(state.setting.theme_color, Choices.ColorChoice)
    updateStorage(storage, storageKey, createSettingObj(state))
  },
  header_navbar: (state, payload) => {
    state.setting.header_navbar = payload
    updateStorage(storage, storageKey, createSettingObj(state))
  },
  sidebar_color: (state, payload) => {
    state.setting.sidebar_color = payload
    updateStorage(storage, storageKey, createSettingObj(state))
  },
  sidebar_type: (state, payload) => {
    state.setting.sidebar_type = payload
    updateStorage(storage, storageKey, createSettingObj(state))
  },
  sidebar_menu_style: (state, payload) => {
    state.setting.sidebar_menu_style = payload
    updateStorage(storage, storageKey, createSettingObj(state))
  }
}
