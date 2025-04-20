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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function AppSidebar({ onMenuClick }) {
  return (
    <SidebarProvider>
      <Sidebar className="top-20" style={{ backgroundColor: "white" }}>
        <SidebarContent style={{ backgroundColor: "white" }}>
          <SidebarMenu>
            <Collapsible defaultOpen>
              <SidebarMenuItem className="px-4">
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>Manage My Account</SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuButton onClick={() => onMenuClick("profile")}>
                        My Profile
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuButton onClick={() => onMenuClick("store")}>
                        My Store
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuButton onClick={() => onMenuClick("address")}>
                        Settings
                      </SidebarMenuButton>
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
