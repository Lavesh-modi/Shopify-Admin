import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Card, Layout, List, Page } from "@shopify/polaris";
import { apiVersion, authenticate } from "~/shopify.server";


export const query =`
{
    collections(first: 10){
        edges{
            node{
                id
                handle
                title
                description
            }
        }
        pageInfo {
            hasNextPage
        }
    }
}
`

// console.log(apiVersion,"apiversion")
// console.log(authenticate,"authenticate")
export const loader: LoaderFunction = async ({ request }) => {
    const { session } = await authenticate.admin(request)
    const {shop, accessToken } = session;

    // console.log(accessToken,"accessToken")
    // console.log(shop,"shops")
    try{

        const response = await fetch(`https://${shop}/admin/api/${apiVersion}/graphql.json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/graphql",
                "X-Shopify-Access-Token": accessToken!
            },
            body: query

        });

        if(response.ok){
            const data = await response.json()

            const {
                data: {
                    collections: { edges }  
                }
            } = data;
            return edges
        }

        return null

    } catch(err){
        console.log(err)
    }

}


const Collections = () => {
    const collections: any = useLoaderData()
    // console.log(collections, 'collections')

  return (
  <Page>
    <Layout>
        <Layout.Section>
            <Card><h1>hello world</h1></Card>
        </Layout.Section>
        <Layout.Section>
            <Card>
                <List type="bullet" gap="loose">
                    {
                        collections.map((edge: any) => {
                            const {node: collection } = edge;
                            return (
                                <List.Item key={collection.id}>
                              {/* <h1 >Id:-{collection.id}</h1> */}
                                    <h2>{collection.title}</h2>
                                    {/* <h2>{collection.handle}</h2> */}
                                    <h2>{collection.description}</h2>
                                </List.Item>
                            )
                        })
                    }

                </List>
                {/* <h2>defjvhewrf</h2> */}
            </Card>

        </Layout.Section>
    </Layout>
</Page>
  );
};

export default Collections;