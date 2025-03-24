import Link from "next/link";
import Card from "@/components/Card";

export default async function VenueCatalog({
  venuesJson,
}: {
  venuesJson: Promise<VenueJson>;
}) {

  const venuesJsonReady = await venuesJson;

  return (
    <div>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignContent: "space-around",
          justifyContent: "space-around",
        }}
      >
        {venuesJsonReady.data.map((VenueItem) => (
          <Link
            href={`/venue/${VenueItem.id}`}
            className="w-1/5"
            key={VenueItem.id}
          >
            <Card venueName={VenueItem.name} imgSrc={VenueItem.picture} />
          </Link>
        ))}
      </div>
    </div>
  );
}
