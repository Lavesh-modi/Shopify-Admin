import React, { useState, useRef } from "react";
import { MediaCard, VideoThumbnail, Layout } from "@shopify/polaris";
import PaginationExample from "./PaginationButton";

function MediaCardExample() {
  // Demo data for 10 cards
  const demoData = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    title: `Card ${index + 1}`,
    description: `This is the description for card ${index + 1}`,
    thumbnailUrl:
      "https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850",
  }));

  // State to manage which cards are currently visible
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [visibleCards, setVisibleCards] = useState(4);
  const scrollRef = useRef(null);

  // Function to handle "Next" button click
  // const handleNextClick = () => {
  //   setVisibleCards((prevVisibleCards) =>
  //     Math.min(prevVisibleCards + 4, demoData.length),
  //   );
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollLeft += 500; // Adjust the scroll amount as per your requirement
  //   }
  // };

  // // Function to handle "Previous" button click
  // const handlePreviousClick = () => {
  //   setVisibleCards((prevVisibleCards) => Math.max(prevVisibleCards - 4, 4));
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollLeft -= 500; // Adjust the scroll amount as per your requirement
  //   }
  // };

  return (
    <div>
      <Layout>
        <div
          style={{
            display: "flex",
            width: "100%",
            overflowX: "scroll",
            scrollBehavior: "smooth",
          }}
          ref={scrollRef}
        >
          {demoData.slice(0, visibleCards).map((data) => (
            <div key={data.id} style={{ flexBasis: "25%", padding: "10px" }}>
              <MediaCard
                portrait
                title={data.title}
                primaryAction={{
                  content: "Learn more",
                  onAction: () => {},
                }}
                size="small"
                description={data.description}
                popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
              >
                <VideoThumbnail
                  videoLength={40}
                  thumbnailUrl={data.thumbnailUrl}
                  onClick={() => console.log("clicked")}
                />
              </MediaCard>
            </div>
          ))}
        </div>
      </Layout>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-between",
        }}
      >
        {/* <Button disabled={visibleCards <= 4} onClick={handlePreviousClick}>
          Previous
        </Button>
        <Button
          disabled={visibleCards >= demoData.length}
          onClick={handleNextClick}
        >
          Next
        </Button> */}
        <PaginationExample></PaginationExample>
      </div>
    </div>
  );
}

export default MediaCardExample;
