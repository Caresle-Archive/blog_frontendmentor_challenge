import PropTypes from 'prop-types'

const SubTitle = ({ text }) => {
    return (
        <div className='text-cs-black font-semibold py-2'>{ text }</div>
    )
}

SubTitle.propTypes = {
    text: PropTypes.string,
}

export default SubTitle