import EventList from "../pages/EventList/EventList"
import FilterEvents from "../pages/FilterEvents/FilterEvents"
import EventDetail from "../pages/EventDetails/EventDetails"
import EventForm from "../components/EventForm/EventForm"

export const routes = [
  {path:'/',element:<EventList/>},
  {path:'/find-events',element:<FilterEvents/>},
  {path:'/events/:id',element:<EventDetail/>},
  {path:'/create-event',element:<EventForm/>},
  {path:'/edit-event/:id',element:<EventForm/>}
]