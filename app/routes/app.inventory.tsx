import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  Layout,
  Page,
  ResourceList,
  LegacyCard,
  Text,
  List,
  Card,
} from "@shopify/polaris";
import { authenticate } from "~/shopify.server";

export const loader: LoaderFunction = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);

  try {
    const response = await admin.rest.resources.InventoryLevel.all({
      session: session,
      location_ids: "67743776828",
    });
debugger
    if (response) {
      const data = response.data;
      return json({
        inventory: data,
      });
    }

    return null;
  } catch (err) {
    console.log(err);
  }
};

const Inventory = () => {
  const data: any = useLoaderData();

  return (
    <div>
      <Page fullWidth>
        <Layout>
          <Layout.Section variant="oneHalf">
            <Card>
              <h1>Inventory</h1>
              <Card>
                <List type="bullet" gap="loose">
                  {data.inventory.map((data: any) => {
                    return (
                      <List.Item key={data.inventory_item_id}>
                        <h1>Id:-{data.inventory_item_id}</h1>
                        <h2>Location:-{data.location_id}</h2>
                      </List.Item>
                    );
                  })}
                </List>
              </Card>
              |
              <Card>
                <List type="bullet" gap="loose">
                  {data.inventory.map((data: any) => {
                    return (
                      <List.Item key={data.inventory_item_id}>
                        <h1>Id:-{data.inventory_item_id}</h1>
                        <h2>Location:-{data.location_id}</h2>
                      </List.Item>
                    );
                  })}
                </List>
              </Card>
            </Card>
          </Layout.Section>
          <Layout.Section variant="oneHalf">
            <LegacyCard title="Inventory" actions={[{ content: "Manage" }]}>
              <LegacyCard.Section>
                <Text tone="subdued" as="span">
                  26 units available
                </Text>
              </LegacyCard.Section>
              <LegacyCard.Section title="Products">
                <ResourceList
                  resourceName={{ singular: "product", plural: "products" }}
                  items={data.inventory}
                  renderItem={(item) => {
                    const {
                      id,
                      url,
                      name,
                      media,
                      available,
                      admin_graphql_api_id,
                      location_id,
                      inventory_item_id,
                    } = item;

                    return (
                      <ResourceList.Item
                        id={id}
                        url={url}
                        media={media}
                        accessibilityLabel={`View details for ${name}`}
                      >
                        <Text variant="bodyMd" fontWeight="bold" as="h2">
                          {name}
                        </Text>
                        <div>InventoryId:{inventory_item_id}</div>
                        <div>ID:-{admin_graphql_api_id}</div>
                        <div>SKU: {available}</div>

                        {/* <div>{id} available</div> */}
                        <div>Location:{location_id}</div>
                      </ResourceList.Item>
                    );
                  }}
                />
              </LegacyCard.Section>
            </LegacyCard>
          </Layout.Section>
        </Layout>
      </Page>
    </div>
  );
};

export default Inventory;
