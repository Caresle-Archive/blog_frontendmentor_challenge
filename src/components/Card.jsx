import PropTypes from 'prop-types'

const Card = ({ children }) => {
    return (
        <main className="
            font-cs-font w-10/12 mx-auto max-w-96
            border border-cs-black rounded-xl p-2
            bg-white my-16 shadow-card-normal hover:shadow-card-hover
            transition-all hover:scale-105
        "
        >
            <div className="w-11/12 mx-auto">
                { children }
            </div>
        </main>
    )
}

Card.propTypes = {
    children: PropTypes.node,
}

export default Card

