import {gql} from "@apollo/client";


export const QUERY_USER =gql`

query oneUser($email: String!){
    oneUser(email:$email){
        email
        username

    }
}

`