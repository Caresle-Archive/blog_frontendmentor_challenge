import PropTypes from 'prop-types'

const TagBloc = ({ text }) => {

    return (
        <div className='
            bg-cs-primary-color font-extrabold
            p-2 rounded-lg w-1/4 text-sm text-center
        '
        >{ text }</div>
    )
}

TagBloc.propTypes = {
    text: PropTypes.string,
}

export default TagBloc