import Money from "../../../app/components/Money/index.client";
import { getDocuments } from "../../../app/fucntions/firbase";

export default function MoneyPage({ transactions }) {
  return (
    <>
      <Money transactions={transactions} />
    </>
  );
}
export async function getServerSideProps() {
  try {
    const transactions = await getDocuments("transactions");
    return {
      props: {
        transactions,
      },
    };
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return {
      props: {
        transactions: [], // Return empty array in case of error
      },
    };
  }
}
