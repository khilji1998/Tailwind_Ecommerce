import { useContext } from "react";
import { GlobalContext } from "../../../../context/globalState";

 const CheckOutCard = () => {
    const { cartData, setCartData, open , quantity } = useContext(GlobalContext);
  return (
    <>
    <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-4 pt-8">
          <p class="text-xl font-medium">Order Summary</p>
          <p class="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6 min-h-[auto] max-h-[300px] overflow-auto ">
            {cartData
              .reduce((acc, item) => {
                if (!acc.find((existingItem) => existingItem.id === item.id)) {
                  acc.push(item);
                }
                return acc;
              }, [])
              .map((item) => (
                <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                  <img
                    class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                    src={item.image}
                    alt=""
                  />
                  <div class="flex w-full flex-col px-4 py-4">
                    <span class="font-semibold">{item?.title}</span>
                    <span class="float-right text-gray-400">42EU - 8.5US</span>
                    <p class="text-lg font-bold">${item?.price}</p>
                  </div>
                </div>
              ))}
          </div>
          <p className="w-full font-bold text-2xl text-black mt-3 rounded-lg border px-2 py-2 sm:px-6">
              Total:{" "}
              <span className="text-black float-right">
                {cartData
                  .reduce(
                    (total, item) => total + item.price * quantity[item.id],
                    0
                  )
                  .toFixed(2)}
                $
              </span>
            </p>
          <p class="mt-8 text-lg font-medium">Shipping Methods</p>
          <form class="mt-5  gap-6">
            <div class="relative">
              <input
                class="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
              />
              <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_1"
              >
                <img
                  class="w-14 object-contain"
                  src="/images/naorrAeygcJzX0SyNI4Y0.png"
                  alt=""
                />
                <div class="ml-5">
                  <span class="mt-2 font-semibold">Fedex Delivery</span>
                  <p class="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
            <div class="relative">
              <input
                class="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
                checked
              />
              <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_2"
              >
                <img
                  class="w-14 object-contain"
                  src="/images/oG8xsl3xsOkwkMsrLGKM4.png"
                  alt=""
                />
                <div class="ml-5">
                  <span class="mt-2 font-semibold">Fedex Delivery</span>
                  <p class="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>
    </>
  )
}
export default CheckOutCard