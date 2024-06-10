import React, { useContext } from "react";
import { GlobalContext } from "../../../../context/globalState";
import { IoCloseSharp } from "react-icons/io5";

const OrderDetail = () => {
  const {
    toggleModal,
    isBillModalOpen,
    cartData,
    billFormData,
    calculateTotalPrice,
  } = useContext(GlobalContext);
  if (!isBillModalOpen) return null;
  const currentDate = new Date().toLocaleDateString();
  return (
    <>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 relative w-[500px]">
          <button
            onClick={toggleModal}
            className="absolute top-2 right-2 text-2xl"
          >
            <IoCloseSharp />
          </button>
          <div class="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8 ">
            <h1 class="font-bold text-2xl my-4 text-center text-blue-600">
              FashVibe
            </h1>
            <hr class="mb-2" />
            <div class="flex justify-between mb-6">
              <h1 class="text-lg font-bold">Invoice</h1>
              <div class="text-gray-700">
                <div>Date: {currentDate}</div>
                <div>Invoice #: INV12345</div>
              </div>
            </div>
            <div class="mb-8">
              <h2 class="text-lg font-bold mb-4">Bill To:</h2>
              <div class="text-gray-700 mb-2">John Doe</div>
              <div class="text-gray-700 mb-2">{billFormData[0]?.billingdetails.address},</div>
              <div class="text-gray-700 mb-2">{billFormData[0]?.billingdetails.zip}</div>
              <div class="text-gray-700">{billFormData[0]?.email}</div>
            </div>
            <table class="w-full mb-8">
              <thead>
                <tr>
                  <th class="text-left font-bold text-gray-700">Description</th>
                  <th class="text-right font-bold text-gray-700">Amount</th>
                </tr>
              </thead>
              <tbody>
                {cartData?.map((item, index) => (
                  <tr key={index}>
                    <td className="text-left text-gray-700">{item.title}</td>
                    <td className="text-right text-gray-700">
                      ${item.price.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td class="text-left font-bold text-gray-700">Total</td>
                  <td class="text-right font-bold text-gray-700">
                    ${calculateTotalPrice()}
                  </td>
                </tr>
              </tfoot>
            </table>
            <div class="text-gray-700 mb-2">Thank you for your business!</div>
            <div class="text-gray-700 text-sm">
              Please remit payment within 30 days.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
