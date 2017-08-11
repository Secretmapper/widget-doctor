import usersActivityData from '../../../__fixtures__/data'
import { clamp } from '../../../utils'

// TODO: to make it extensible,
// make an initializer for all possible widgets
const initialState = {
  key: 'UsersActivity',
  ui: {
  },
  settings: {
    numberOfUsers: 5,
    activity: 'Highest'
  },
  data: usersActivityData
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'DASHBOARD_EDIT_SETTINGS_WIDGET':
      switch (state.key) {
        case 'UsersActivity':
          const { field, value } = action.payload

          const numberOfUsers = (
            field === 'numberOfUsers'
              ? clamp(1, 5, value)
              : state.settings.numberOfUsers
          )

          return {
            ...state,
            settings: {
              ...state.settings,
              [action.payload.field]: action.payload.value,
              numberOfUsers
            }
          }
        default:
          return state
      }
    default:
      return state
  }
}

/* TODO: Use something like reselect for performance */
export const processWidget = widget => ({
  ...widget,
  data: {
    ...widget.data,
    users:
      widget.data.users
        .slice()
        .sort((a, b) => (
          widget.settings.activity === 'Lowest'
            ? widget.data.daily[a.id] - widget.data.daily[b.id]
            : widget.data.daily[b.id] - widget.data.daily[a.id]
        ))
        .slice(0, widget.settings.numberOfUsers)
  }
})
