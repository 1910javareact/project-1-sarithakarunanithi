import { IState } from "../../reducers"
import { connect } from "react-redux"
import { reimbursementID } from "../../action-mappers/reimbuser-action-mappers"
import { RembursementByUserComponent } from "./RembursementByUserComponent"

const mapStateToProps = (state:IState) => {
    return {
        reimbursement:state.reimbuser.reimbursement
    }
}
const mapDispatchToProps ={
    reimbursementID
}

export default connect(mapStateToProps,mapDispatchToProps)(RembursementByUserComponent)
