export const GET_PUBLICATION = `
  query Publication {
    publication(host: "blog.wapborhan.com") {
      isTeam
      title
      posts(first: 50) {
        edges {
          node {
            title
            brief
            url
            publishedAt
            coverImage{
              url
              attribution
            }
              
            
            author {
              name
              profilePicture
              socialMediaLinks {
                facebook
                twitter
                github
                instagram
                website
              }
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;