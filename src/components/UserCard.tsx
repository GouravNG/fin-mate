import { Nfc } from "lucide-react"

export const UserCardList = () => {
  return (
    <div className="flex overflow-x-auto gap-8 py-4 snap-x snap-mandatory">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  )
}

export const UserCard = () => {
  return (
    <div className="flex flex-col border shadow-sm p-4 rounded-lg my-2 w-82 h-48 bg-linear-to-r from-amber-500 to-pink-500 shrink-0 snap-start">
      <div className="flex items-center justify-between">
        <div className="font-light text-xl">Untitled.</div>
        <div>
          <Nfc />
        </div>
      </div>
      <div className="text-4xl font-i-serif ">Recent Transactions.</div>
      <div className="flex mt-auto font-sans">
        <div className="">
          <p>4111 1111 1111 1111</p>
          <p className="uppercase">Gourav N Gunaga</p>
        </div>
        <div className="flex ml-auto">
          <p className="mt-auto">02/30</p>
        </div>
        <div className="ml-auto mt-auto">
          <span>
            <img
              src="https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/mono-outline/visa.svg"
              alt="Visa"
              width={50}
              height={10}
            />
          </span>
        </div>
      </div>
    </div>
  )
}
