import { connect } from 'react-redux'
import { isIn, pluck, immutableSwap } from '../../utils'

import widgetReducer, { processWidget } from './widget'

const VALID_WIDGETS = ['UsersActivity']
const initialState = {
  ui: {
    widgetPickerOpen: false,
    widgetDragging: false
  },
  widgets: [null, null, null, null, null, null]
}

const isWidgetInState = (widgets, widgetKey) => isIn(pluck(widgets, 'key'), widgetKey)

export default function (state = initialState, action) {
  let widgetInState
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
      const widgetIsValid = isIn(VALID_WIDGETS, action.payload.widget)
      widgetInState = isWidgetInState(state.widgets, action.payload.widget)

      if (!widgetInState && widgetIsValid) {
        const index = state.widgets.indexOf(null)

        return {
          ...state,
          widgets: [
            ...state.widgets.slice(0, index),
            widgetReducer(undefined, action),
            ...state.widgets.slice(index + 1)
          ]
        }
      } else {
        return state
      }
    case 'DASHBOARD_START_DRAG_WIDGET':
      return { ...state, ui: { ...state.ui, widgetDragging: true } }
    case 'DASHBOARD_STOP_DRAG_WIDGET':
      return { ...state, ui: { ...state.ui, widgetDragging: false } }
    case 'DASHBOARD_MOVE_WIDGET':
      widgetInState = isWidgetInState(state.widgets, action.payload.widget)

      if (widgetInState && action.payload.index >= 0 && action.payload.index <= 6) {
        const oldIndex = pluck(state.widgets, 'key').indexOf(action.payload.widget)
        const { index } = action.payload

        return {
          ...state,
          widgets: immutableSwap(state.widgets, oldIndex, index)
        }
      } else {
        return state
      }
    case 'DASHBOARD_DELETE_WIDGET':
      if (isWidgetInState(state.widgets, action.payload.widget)) {
        const { widget } = action.payload
        const index = pluck(state.widgets, 'key').indexOf(widget)

        return {
          ...state,
          widgets: [
            ...state.widgets.slice(0, index),
            null,
            ...state.widgets.slice(index + 1)
          ]
        }
      } else {
        return state
      }
    case 'DASHBOARD_EDIT_SETTINGS_WIDGET':
      const { widget } = action.payload
      return {
        ...state,
        widgets: state.widgets.map(
          (item) => (item && item.key === widget) ? widgetReducer(item, action) : item
        )
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
  moveWidget: (key, index) => ({
    type: 'DASHBOARD_MOVE_WIDGET',
    payload: { widget: key, index }
  }),
  startDragWidget: (key, index) => ({
    type: 'DASHBOARD_START_DRAG_WIDGET'
  }),
  stopDragWidget: (key, index) => ({
    type: 'DASHBOARD_STOP_DRAG_WIDGET'
  }),
  deleteWidget: key => ({
    type: 'DASHBOARD_DELETE_WIDGET',
    payload: { widget: key }
  })
}

// pad widgets to always be at least 6
const defaultSelector = ({ dashboard }) => ({
  dashboard: {
    ...dashboard,
    // process every widget
    widgets: dashboard.widgets.map(i => i ? processWidget(i) : i)
  }
})

export const connectDashboard = (selector = defaultSelector) => connect(
  selector,
  Actions
)
