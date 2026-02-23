import PropTypes from "prop-types"

export const FeedProps = {
    user: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ]),
}