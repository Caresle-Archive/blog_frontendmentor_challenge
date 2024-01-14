import PropTypes from 'prop-types'

const Title = ({ children }) => {
    return (
        <h1 className='font-extrabold text-xl hover:text-cs-primary-color hover:cursor-pointer'>
            { children }
        </h1>
    )
}

Title.propTypes = {
    children: PropTypes.node,
}

export default Title