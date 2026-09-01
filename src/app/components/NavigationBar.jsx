import { Button } from "@base-ui/react";
import { Input } from "@base-ui/react";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
export function NavigationBar() {
  return (
    <div className="flex items-center justify-between px-20 py-[11.5px] border-b">
      <div className="w-23 h-5">
        <img src="Light mode logo.png" alt="Movie Z Logo" />
      </div>
      <div></div>
    </div>
  );
}
