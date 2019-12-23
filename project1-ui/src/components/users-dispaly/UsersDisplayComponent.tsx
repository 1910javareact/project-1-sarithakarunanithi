import React from 'react'
import { Table } from 'reactstrap'
import { RouteComponentProps, Redirect } from 'react-router'
import { User } from '../../models/users'
import { getAllUsers } from '../../remote/user'
import { UsersDisplayRowComponent } from './users-display-row/UsersDisplayRowComponent'

interface IUsersDisplayProps extends RouteComponentProps {
    user: User
}

interface IUsersDisplayState {
    allUsers: User[]
}

export class UsersDisplayComponent extends React.Component<any, IUsersDisplayState>{
    //is in charge of holding all the users
    //it thens creates a userdisplayrow component for each of those users
    //and renders them inside a table
    constructor(props: any) {
        super(props)
        this.state = {
            allUsers: []
        }
    }

    async componentDidMount() {
        try {
            let u = await getAllUsers()
            if (u.status === 200) {
                this.setState({
                    ...this.state,
                    allUsers: u.body
                })
            }
        } catch (e) {
            console.log(e);

        }
    }

    render() {
        let rows = this.state.allUsers.map((e) => {
            return <UsersDisplayRowComponent user={e} key={'user ' + e.userId} />
        })
        return (
            this.props.user.userId !== undefined ?

                <div className="idinput">
                    <h4>Users Information</h4>
                    <Table bordered color='danger' dark>
                        <thead>
                            <tr>
                                <td>User ID</td>
                                <td>Firstname</td>
                                <td>Lastname</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table>
                </div>
                :
                //history object is from react router
                //it keeps track of everywhere you have been
                //you can use push to go to a new location or pop to go backwards one
                //this.props.history.push('/login')

                // when this component is rendered, it takes you back to the path
                <Redirect to='/login' />
        )
    }
}