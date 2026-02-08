import { Dot, Landmark, Lock, PlusCircle } from "lucide-react"
import { Button } from "./ui/button"

const BankAccount = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4 w-full flex-wrap border rounded-xl sm:max-w-74">
        <div className="p-2 bg-orange-200 border rounded-lg">
          <Landmark className="text-orange-500" />
        </div>
        <div className="px-4">
          <div className="font-semibold">Axis Bank</div>
          <div className="flex items-center justify-center">
            <div className="flex">
              {Array.from({ length: 4 }).map(() => (
                <Dot size={10} strokeWidth={10} fill="#000" />
              ))}
            </div>
            <div className="text-xs">1234</div>
          </div>
        </div>
        <div className="ml-auto flex flex-col">
          <div className="font-semibold text-black">$12,34,000.00</div>
          <div className="ml-auto text-sm text-green-600 font-semibold">
            Verified
          </div>
        </div>
      </div>
    </>
  )
}

export const BankAccounts = () => {
  return (
    <>
      <p className="text-xl font-semibold">
        <p>Linked Bank Accounts</p>
      </p>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-10 py-4 items-center justify-start">
        <BankAccount />
        <BankAccount />
        <BankAccount />
        <BankAccount />
        <div className="p-4 w-full flex-wrap border rounded-xl sm:max-w-74 flex items-center justify-center bg-slate-50">
          <Button variant={"ghost"}>
            <span>
              <PlusCircle />
            </span>
            Add new Account{" "}
          </Button>
        </div>
      </div>
      <div className="w-full p-6 bg-gray-50 border border-gray-200 rounded-lg mt-6">
        <div className="flex items-center justify-center flex-col gap-2">
          <div className="text-2xl">
            <Lock />
          </div>
          <div className="font-semibold text-gray-700">ENCRYPTED & SECURE</div>
          <div className="text-xs text-gray-600 text-center">
            We use 256-bit encryption to keep your data safe and never store
            your login credentials.
          </div>
        </div>
      </div>
      <div className="w-full p-2 mb-20 sm:hidden">
        <Button className="w-full font-semibold bg-blue-500">
          <PlusCircle />
          Add New Account
        </Button>
      </div>
    </>
  )
}
