import { compose } from 'recompose'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Dashboard from '../../components/Dashboard'

export default compose(
  DragDropContext(HTML5Backend)
)(Dashboard)
