import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { svgArrowDown } from "@/assets/icons/svgIcons";

const AccountDropdown = ({ selectedAccount, setSelectedAccount, accounts }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        onClick={(e) => {
          e.preventDefault();
        }}
        className="py-2.5 pl-3 pr-4 rounded-full bg-bg50 max-w-[220px] w-full outline-none"
      >
        <div className="flbx">
          {selectedAccount ? (
            <div className="fl gap-2">
              <img
                src={selectedAccount?.platform?.logo}
                className="h-6 w-6 rounded-full object-cover"
                alt={selectedAccount.accountId}
              />
              <span className="text-sm">{selectedAccount.accountId}</span>
            </div>
          ) : (
            <span className="text-black/50">Select Account</span>
          )}
          <span>{svgArrowDown}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {accounts?.map((account, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => setSelectedAccount(account)}
            className="fl gap-2"
          >
            <img
              src={account?.platform?.logo}
              className="h-6 w-6 rounded-full object-cover"
              alt={account.accountId}
            />
            <span className="text-sm">{account?.accountId}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropdown;
