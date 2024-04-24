import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  Layout,
  Page,
  ResourceList,
  LegacyCard,
  // Thumbnail,
  Text,
  List,
  Card,
  // DataTable,
} from "@shopify/polaris";
import { authenticate } from "~/shopify.server";

export const loader: LoaderFunction = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);

  try {
    const response = await admin.rest.resources.InventoryLevel.all({
      session: session,
      location_ids: "67743776828",
    });

    if (response) {
      console.log('hit')
      // console.log(response,"response of the inventory")

      const data = response.data;
      debugger;

      // console.log(data, 'data from the response ')

      // console.log(JSON.stringify(data[0]), 'inventory')

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
  console.log(data.inventory, 'data');
  // const row = data.inventory
 

  return (
    <div>
      <Page fullWidth>
        <Layout>
          <Layout.Section variant="oneThird">
            <LegacyCard title="Florida" actions={[{ content: "Manage" }]}>
              <LegacyCard.Section>
                <Text tone="subdued" as="span">
                  455 units available
                </Text>
              </LegacyCard.Section>
              <LegacyCard.Section title="Items">
                <ResourceList
                  resourceName={{ singular: "product", plural: "products" }}
                  // items={[
                  //   {
                  //     id: "341",
                  //     url: "#",
                  //     name: "Black & orange scarf",
                  //     sku: "9234194023",
                  //     quantity: "254",
                  //     media: (
                  //       <Thumbnail
                  //         source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                  //         alt="Black orange scarf"
                  //       />
                  //     ),
                  //   },
                  //   {
                  //     id: "256",
                  //     url: "#",
                  //     name: "Tucan scarf",
                  //     sku: "9234194010",
                  //     quantity: "201",
                  //     media: (
                  //       <Thumbnail
                  //         source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                  //         alt="Tucan scarf"
                  //       />
                  //     ),
                  //   },
                  // ]}
                  items={data.inventory}
                  renderItem={(item) => {
                    const { id, url, name, sku, media,  } = item;

                    return (
                      <ResourceList.Item
                        id={id}
                        url={url}
                        media={media}
                        accessibilityLabel={`View details for ${name}`}
                      >
                        <Text variant="bodyMd" fontWeight="bold" as="h3">
                          {name}
                        </Text>
                        <div>SKU: {sku}</div>
                        <div>{id} available</div>
                      </ResourceList.Item>
                    );
                  }}
                />
              </LegacyCard.Section>
            </LegacyCard>


            <Card>
                <List type="bullet" gap="loose">
                    {
                        data.inventory.map((data: any) => {
                            // const {node: collection } = edge;
                            return (
                                <List.Item key={data.inventory_item_id}>
                              <h1 >Id:-{data.inventory_item_id}</h1>
                              <h2>Location:-{data.location_id
}</h2>
                                    {/* <h2>{collection.title}</h2> */}
                                    {/* <h2>{collection.handle}</h2> */}
                                    {/* <h2>{collection.description}</h2> */}
                                </List.Item>
                            )
                        })
                    }

                </List>
                {/* <h2>defjvhewrf</h2> */}
            </Card>
          </Layout.Section>

          {/* <DataTable
      columnContentTypes={[
        "text", // location_id
        "text", // Price (replace with actual logic)
        "text", // available
        // "text", // Net quantity (uncomment if needed)
        // "text", // Net sales (uncomment if needed)
      ]}
      headings={[
        "location_id",
        "Price",
        "available",
        // "Net quantity", (uncomment if needed)
        // "Net sales", (uncomment if needed)
      ]}
      rows={firstFiveItems}
    /> */}
        </Layout>
      </Page>

    </div>
  );
};

export default Inventory;
