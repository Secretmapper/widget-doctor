import { connect } from 'react-redux'
import { isIn } from '../../utils'

import widgetReducer, { processWidget } from './widget'

const VALID_WIDGETS = ['UsersActivity']
const initialState = {
  ui: {
    widgetPickerOpen: false
  },
  widgets: {}
}

const isWidgetInState = (state, widgetKey) => widgetKey in state

export default function (state = initialState, action) {
  switch (action.type) {
    case 'DASHBOARD_OPEN_WIDGET_PICKER':
      return {
        ...state,
        ui: {
          ...state.ui,
          widgetPickerOpen: true
        }
      }
    case 'DASHBOARD_CLOSE_WIDGET_PICKER':
      return {
        ...state,
        ui: {
          ...state.ui,
          widgetPickerOpen: false
        }
      }
    case 'DASHBOARD_ADD_WIDGET':
      const widgetInState = isWidgetInState(state.widgets, action.payload.widget)
      const widgetIsValid = isIn(VALID_WIDGETS, action.payload.widget)
      if (!widgetInState && widgetIsValid) {
        return {
          ...state,
          widgets: {
            ...state.widgets,
            [action.payload.widget]: widgetReducer(undefined, action)
          }
        }
      } else {
        return state
      }
    case 'DASHBOARD_DELETE_WIDGET':
      if (isWidgetInState(state.widgets, action.payload.widget)) {
        const { widget } = action.payload
        // omit widget key
        const { [widget]: _, ...widgets } = state.widgets

        return {
          ...state,
          widgets: widgets
        }
      } else {
        return state
      }
    case 'DASHBOARD_EDIT_SETTINGS_WIDGET':
      const { widget } = action.payload
      return {
        ...state,
        widgets: {
          ...state.widgets,
          [action.payload.widget]: widgetReducer(state.widgets[widget], action)
        }
      }
    default:
      return state
  }
}

export const Actions = {
  openWidget: _ => ({
    type: 'DASHBOARD_OPEN_WIDGET_PICKER'
  }),
  closeWidget: _ => ({
    type: 'DASHBOARD_CLOSE_WIDGET_PICKER'
  }),
  addWidget: key => ({
    type: 'DASHBOARD_ADD_WIDGET',
    payload: { widget: key }
  }),
  editWidget: (key, field, value) => ({
    type: 'DASHBOARD_EDIT_SETTINGS_WIDGET',
    payload: { widget: key, field, value }
  }),
  deleteWidget: key => ({
    type: 'DASHBOARD_DELETE_WIDGET',
    payload: { widget: key }
  })
}

// process every widget
const defaultSelector = ({ dashboard }) => ({
  dashboard: {
    ...dashboard,
    widgets: (
      Object
        .keys(dashboard.widgets)
        .reduce((acc, k) => ({
          ...acc, [k]: processWidget(dashboard.widgets[k])
        }), {})
    )
  }
})

export const connectDashboard = (selector = defaultSelector) => connect(
  selector,
  Actions
)
