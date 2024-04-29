// import { Badge, Layout, MediaCard, VideoThumbnail } from "@shopify/polaris";

// function TilesCard() {
//   const cardData = [
//     {
//       id: "1",
//       title: "Add Announcement bar ",
//       description:
//         "Make a bold statement and keep your customers informed with Announcement Bar, the ultimate app for creating attention-grabbing announcements on your store.",
//       thumbnailUrl: "https://via.placeholder.com/150",
//     },
//     {
//       id: "2",
//       title: "Amazon Buy Button",
//       description:
//         "Make a bold statement and keep your customers informed with Announcement Bar, the ultimate app for creating attention-grabbing announcements on your store.",
//       thumbnailUrl: "https://via.placeholder.com/150",
//     },
//     {
//       id: "3",
//       title: "Sticky Add To Cart",
//       description:
//         "Make a bold statement and keep your customers informed with Announcement Bar, the ultimate app for creating attention-grabbing announcements on your store.",
//       thumbnailUrl: "https://via.placeholder.com/150",
//     },
//   ];
//   return (
//     <div>
//       <div style={{ padding: "10px" }}>
//         <h1 style={{ fontWeight: "bold", fontSize: "23px" }}>Libautech Apps</h1>
//       </div>

//       <div>
//         <div
//           style={{
//             display: "flex",
//             width: "100%",
//             overflowX: "scroll",
//             scrollBehavior: "smooth",
//             justifyContent: "space-evenly",
//           }}
//         >
//           {cardData.map((data) => (
//             <div key={data.id} style={{ flexBasis: "25%", padding: "10px" }}>
//               <MediaCard
//                 portrait
//                 title={
//                   <>
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         background: "red",
//                         width: "70px",
//                         color: "white",
//                         borderRadius: "18px",
//                       }}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"
//                         style={{ marginRight: "2px" }}
//                       >
//                         <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                         <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
//                         <path d="M12 8v4" />
//                         <path d="M12 16h.01" />
//                       </svg>
//                       <span
//                         style={{ marginLeft: "2px", backgroundColor: "red" }}
//                       >
//                         SALE
//                       </span>
//                     </div>
//                   </>
//                 }
//                 primaryAction={{
//                   content: "Grab deal",
//                   onAction: () => {},
//                 }}
//                 secondaryAction={{
//                   content: "Learn more",
//                   onAction: () => {},
//                 }}
//                 size="medium"
//                 description={data.description}
//                 popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
//               >
//                 <img
//                   alt=""
//                   width="100%"
//                   height="100%"
//                   src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
//                   :style="{ objectFit: 'cover', objectPosition: 'center' }"
//                 />
//               </MediaCard>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TilesCard;

import { MediaCard } from "@shopify/polaris";
// import "./tiles.css"

function TilesCard() {
  const cardData = [
    {
      id: "1",
      title: "Add Announcement bar",
      description:
        "Make a bold statement and keep your customers informed with Announcement Bar, the ultimate app for creating attention-grabbing announcements on your store.",
      thumbnailUrl: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      title: "Amazon Buy Button",
      description:
        "Make a bold statement and keep your customers informed with Announcement Bar, the ultimate app for creating attention-grabbing announcements on your store.",
      thumbnailUrl: "https://via.placeholder.com/150",
    },
    {
      id: "3",
      title: "Sticky Add To Cart",
      description:
        "Make a bold statement and keep your customers informed with Announcement Bar, the ultimate app for creating attention-grabbing announcements on your store.",
      thumbnailUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div>
      <div style={{ padding: "10px" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "23px" }}>Libautech Apps</h1>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            width: "100%",
            overflowX: "scroll",
            scrollBehavior: "smooth",
            justifyContent: "space-evenly",
          }}
        >
          {cardData.map((data) => (
            <div key={data.id} style={{ flexBasis: "25%", padding: "10px" }}>
              <div className="custom-media-card">
                <MediaCard
                  portrait
                  // children={<div className="aa"></div>}
                  title={
                    <>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          background: "red",
                          width: "70px",
                          color: "white",
                          borderRadius: "18px",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"
                          style={{ marginRight: "2px" }}
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                          <path d="M12 8v4" />
                          <path d="M12 16h.01" />
                        </svg>
                        <span
                          style={{ marginLeft: "2px", backgroundColor: "red" }}
                        >
                          SALE
                        </span>
                      </div>
                    </>
                  }
                  primaryAction={{
                    content: "Grab deal",
                    onAction: () => {},
                     destructive: true,
                  }}
                  secondaryAction={{
                    content: "Learn more",
                    onAction: () => {},
                  }}
                  size="medium"
                  description={data.description}
                  popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
                >
                  <img
                    alt=""
                    width="100%"
                    height="100%"
                    src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </MediaCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TilesCard;
