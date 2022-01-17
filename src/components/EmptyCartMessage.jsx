import { Typography } from "@material-ui/core"
import { Link } from "react-router-dom"

const EmptyCartMessage = () => {
    return (
       
            <Typography variant="subtitle1">
    You have no items in your shopping cart,
    <Link to="/">start adding some</Link>!
  </Typography>
    )
}

export default EmptyCartMessage
