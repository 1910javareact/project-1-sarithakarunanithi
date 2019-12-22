import { state, IState } from "../../reducers";
import { UseridComponent } from "./UseridComponent";
import { userID } from "../../action-mappers/userid-action-mappers"
import { connect } from "react-redux";

const mapStateToProps = (state:IState) => {
    return{
        user:state.uid.user
    }
}

const mapDispatchToProps = {
    userID
}

export default connect(mapStateToProps, mapDispatchToProps)(UseridComponent)
