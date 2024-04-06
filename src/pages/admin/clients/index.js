import Clients from "../../../app/components/Clients/index.client";
import { getDocuments } from "../../../app/fucntions/firbase";
export default function ClientsPage({ clients }) {
  return (
    <>
      <Clients clients={clients} />
    </>
  );
}
export async function getServerSideProps() {
  try {
    const clients = await getDocuments("clients");
    return {
      props: {
        clients,
      },
    };
  } catch (error) {
    console.error("Error fetching clients:", error);
    return {
      props: {
        clients: [], // Return empty array in case of error
      },
    };
  }
}
