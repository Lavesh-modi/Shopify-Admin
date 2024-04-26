import { Card, Layout, Page } from "@shopify/polaris";
import React from "react";
import BannerExample from "~/Components/Banner";
import CardDefault from "~/Components/CardsData";
import MediaCardExample from "~/Components/MediaCards";
import Navbar from "~/Components/Navbar";
import OfferCard from "~/Components/Offer";
import ProgressBarExample from "~/Components/Progress";
import TilesCard from "~/Components/TilesCard";
import VideoThumbnailExample from "~/Components/Video";

function Dashboard() {
  return (
    <div>
      <Page fullWidth>
        <Layout>
          <Layout.Section>
            <div style={{ padding: "20px" }}>
              <Navbar></Navbar>
            </div>

            <div style={{ padding: "20px" }}>
              <ProgressBarExample></ProgressBarExample>
            </div>
            <div style={{ padding: "20px" }}>
              <BannerExample></BannerExample>
            </div>
            <div>
              <CardDefault></CardDefault>
            </div>
            <div style={{ padding: "20px" }}>
              <VideoThumbnailExample></VideoThumbnailExample>
            </div>
            <div style={{ padding: "20px" }}>
              {" "}
              <Card>
                <MediaCardExample></MediaCardExample>
              </Card>{" "}
            </div>
            <div style={{ padding: "20px" }}>
              <OfferCard></OfferCard>
            </div>
            <div style={{padding:"20px"}}>
              <TilesCard></TilesCard>
            </div>
          </Layout.Section>
        </Layout>
      </Page>
    </div>
  );
}

export default Dashboard;
