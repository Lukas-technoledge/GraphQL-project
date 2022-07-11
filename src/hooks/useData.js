import { useQuery, gql } from '@apollo/client'

const GET_DATA = gql`
query Launches {
    launches {
      launch_date_local
      mission_name
      mission_id
      rocket {
        rocket_name
        rocket {
          company
          name
          mass {
            kg
          }
        }
      }
      launch_site {
        site_name
      }
    }
  }
`


export const useData = () => {
    const { error, data, loading } = useQuery(GET_DATA);

    return{
        error, data, loading
    }
}