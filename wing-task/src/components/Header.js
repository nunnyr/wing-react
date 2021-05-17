import PropTypes from 'prop-types'
import Button from './Button'

//passing props to this component
//but we can destructure and pass in the title

const Header = ({title}) => {

    const onClick = () => {
        console.log('hi Mateo')
    }


    return (
        <header className='header'>
            <h1 style={{color: 'blue'}}>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,

}

//CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black '
// }
export default Header
