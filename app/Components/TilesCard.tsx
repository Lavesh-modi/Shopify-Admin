import { Layout, MediaCard, VideoThumbnail } from '@shopify/polaris'

function TilesCard() {


    const cardData = [
        {
            id :"1",
          title: "Add Announcement bar ",
          description: "Make a bold statement and keep your customers informed with Announcement Bar, the ultimate app for creating attention-grabbing announcements on your store.",
          thumbnailUrl: "https://via.placeholder.com/150",
        },
        {
            id :"2",
          title: "Amazon Buy Button",
          description: "Make a bold statement and keep your customers informed with Announcement Bar, the ultimate app for creating attention-grabbing announcements on your store.",
          thumbnailUrl: "https://via.placeholder.com/150", 
        },
        {
            id :"3",
          title: "Sticky Add To Cart",
          description: "Make a bold statement and keep your customers informed with Announcement Bar, the ultimate app for creating attention-grabbing announcements on your store.",
          thumbnailUrl: "https://via.placeholder.com/150",
        },
      ];
  return (
    <div>
        <div style={{padding:"10px"}}>
        <h1 style={{fontWeight:"bold",fontSize:"23px"}}>Libautech Apps</h1>
        </div>
        
        
        <div>
      <Layout>
        <div
          style={{
            display: "flex",
            width: "100%",
            overflowX: "scroll",
            scrollBehavior: "smooth",
            justifyContent:"space-evenly"
          }}
        >
          {cardData.map((data) => (
            <div key={data.id} style={{ flexBasis: "25%", padding: "10px" }}>
              <MediaCard
                portrait
                title={data.title}
                primaryAction={{
                  content: "Grab deal",
                  onAction: () => {},
                }}
                secondaryAction={{
                    content: "Learn more",
                  onAction: () => {},
                }}
                size="medium"
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
    </div>
        
        
        
        </div>
  )
}

export default TilesCard