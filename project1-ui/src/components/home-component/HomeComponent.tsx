import React from 'react'
import { userLogin } from '../../remote/user'


export class Home extends React.Component<any, any>{
    //constructor
    constructor(props: any) {
        super(props)
        this.state = {
            user: {}
        }
    }

    //componentDidMount() - will get all details from API
    async componentDidMount() {
        let user = await userLogin('sarithak', 'password')
        this.setState({      // better place to have
            ...this.state,
            user
        })
    }

    render() {
        console.log(this.state.user);
        return (
            // <div></div> -- replace with 
            // fragment <> </> -->React treat this as a html tag
            <>

            </>
        )
    }
}
