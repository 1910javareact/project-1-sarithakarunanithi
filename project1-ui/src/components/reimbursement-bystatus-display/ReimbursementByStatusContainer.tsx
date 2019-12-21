import { connect } from "react-redux"
import { IState } from "../../reducers"
import { ReimbursementByStatusComponent } from "./ReimbursementByStatusComponent"
import { reimbursementID } from "../../action-mappers/reimbursement-action-mappers"
const mapStateToProps = (state:IState) => {
    return {
        reimbursement:state.reimb.reimbursement
    }
}

const mapDispatchToProps ={
    reimbursementID
}

export default connect(mapStateToProps,mapDispatchToProps)(ReimbursementByStatusComponent)