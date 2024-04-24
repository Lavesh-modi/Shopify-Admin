import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Card, Layout, Page } from "@shopify/polaris";
import { authenticate } from "~/shopify.server";

export const loader: LoaderFunction = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);

  try {
    const response = await admin.rest.resources.GiftCard.all({
      session: session,
      status: "enabled",
    });
    debugger;
    console.log(response.data, "response");
    console.log(response, "response");
    if (response) {
      const data = response.data;
debugger
      return json({ gift_cards: data });
    } else {
      return null;
    }
  } catch (err) {
    console.log(err, "error");
    return null; // Also return null in case of errors
  }
};
const GiftCard = () => {
  const data: any = useLoaderData();
  console.log("hello");
  console.log(data, "data");

  return (
    <div>
      <Page>
        <Layout>
          <Card>
            <h2>Gift Card Page</h2>
          </Card>
        </Layout>
      </Page>
    </div>
  );
};

export default GiftCard;
