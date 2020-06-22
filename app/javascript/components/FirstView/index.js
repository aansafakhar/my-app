import React from "react"
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const RESPONSE = gql`
{
  response{
    text
  }
}
`

class FirstView extends React.Component {
  render() {
    return (
      <Query query={RESPONSE}>
        {({ loading, error, data }) => {
          if (loading) return "Loading "
          if (error) return `Error! ${error.message}`;
          console.log(data)
          return (
            <h1> {data.response.text} </h1>
          )
        }
        }
      </Query>
    )
  }
}
export default FirstView
