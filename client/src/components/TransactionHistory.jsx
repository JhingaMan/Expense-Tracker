import React, { useEffect } from "react";
import { useGlobalContext } from "../utils/GlobalContext";

const TransactionHistory = () => {
  const { all_transactions, loadTransactionData } = useGlobalContext();

  useEffect(() => {
    loadTransactionData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="bg-[#0F172A] text-white h-full w-full rounded-3xl flex flex-col">
      <header className="p-10 pb-6 text-5xl font-normal border-b-1 border-[#7C7C7C]">
        Transaction History
      </header>
      <div className="p-4 md:p-6 flex justify-center">
        <div className="w-full overflow-auto">
          <div className="max-h-[calc(100vh-200px)] min-h-[300px] overflow-y-auto">
            <div className="min-w-full overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700 table-fixed md:table-auto">
                <thead className="sticky top-0 bg-[#0F172A] z-10">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider w-32 md:w-auto">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider w-40 md:w-auto">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider w-28 md:w-auto">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider w-24 md:w-auto">
                      Type
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider w-28 md:w-auto">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {all_transactions && all_transactions.length > 0 ? (
                    all_transactions.map((transaction) => (
                      <tr key={transaction._id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {formatDate(transaction.date)}
                        </td>
                        <td className="px-6 py-4 text-sm truncate max-w-xs">
                          {transaction.description}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {transaction.category}
                        </td>
                        <td className="px-6 py-4 text-sm capitalize">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              transaction.type === "expense"
                                ? "bg-red-900/30 text-red-400"
                                : "bg-green-900/30 text-green-400"
                            }`}
                          >
                            {transaction.type}
                          </span>
                        </td>
                        <td
                          className={`px-6 py-4 text-sm text-right ${
                            transaction.type === "expense"
                              ? "text-red-400"
                              : "text-green-400"
                          }`}
                        >
                          {formatCurrency(transaction.amount)}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="5"
                        className="px-6 py-4 text-center text-sm text-gray-400"
                      >
                        No transactions found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
