import { IState } from "../../reducers"
import { connect } from "react-redux"
//import { RembursementByUserDisplayComponent } from "./ReimbursementByUserComponent"
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







// import { state, IState } from "../../reducers";
// import { connect } from "react-redux";
// import { ReimbursementByUserComponent } from "./ReimbursementByUserComponent";
// import { reimbursementID } from "../../action-mappers/reimbuser-action-mappers"

// const mapStateToProps = (state: IState) => {
//     return{
//         reimbursement: state.reimbuser.reimbursement
//     }
// }

// const mapDispatchToProps = {
//     reimbursementID
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ReimbursementByUserComponent)