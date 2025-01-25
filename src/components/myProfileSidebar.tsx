"use client"

import { SidebarProvider } from "@/components/ui/sidebar";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useRouter } from "next/navigation";

// const items = [
//   {
//     title: "Home",
//     url: "#",
//     icon: Home,
//   },
//   {
//     title: "Inbox",
//     url: "#",
//     icon: Inbox,
//   },
//   {
//     title: "Calendar",
//     url: "#",
//     icon: Calendar,
//   },
//   {
//     title: "Search",
//     url: "#",
//     icon: Search,
//   },
//   {
//     title: "Settings",
//     url: "#",
//     icon: Settings,
//   },
// ];



export default function AppSidebar() {

    const router = useRouter();

    const handleNavigateToFullPRofileDetails = () => {
        router.push('/profile/profileDetails')
    }
  return (
 
      <SidebarProvider>
        <Sidebar className="top-20" style={{backgroundColor: "white"}}>
          <SidebarContent style={{backgroundColor: "white"}}>
            <SidebarMenu>
              {/* {items.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton>
                    <item.icon className="mr-2" />
                    {item.title}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))} */}
              <Collapsible defaultOpen>
                <SidebarMenuItem className="px-4">
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>Manage My Account</SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton onClick={handleNavigateToFullPRofileDetails}>My Profile</SidebarMenuButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton>Sub Item 2</SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>

  );
}
