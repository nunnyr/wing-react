import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Week of Action MTR',
        day: 'May 16th at 9:00am',
        reminder: false

    },
    {
        id: 2,
        text: 'Birthday 🥳',
        day: 'May 18th, all day',
        reminder: false
    },
    {
        id: 3,
        text: 'Reminder to ft Nunny 🌸',
        day: 'tbd',
        reminder: false
    },
    {
        id: 4,
        text: 'Plan Arrebato event',
        day: 'June/July',
        reminder: false
    },
    {
        id: 5,
        text: 'Zoom with Familia 🇨🇴',
        day: 'May 22nd, 8:00pm',
        reminder: false
    },
    {
        id: 6,
        text: 'Boulder/camping',
        day: 'Rain dependent 🌧',
        reminder: false
    },
    {
        id: 7,
        text: 'Cuddle with Breezy',
        day: 'Always',
        reminder: false
    },
])

//Delete task

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : "No tasks 🔥"}
      

      
    </div>
  );
}



export default App;
