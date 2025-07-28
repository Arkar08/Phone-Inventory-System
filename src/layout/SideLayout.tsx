import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { menuItems } from "@/utils/dummy";

const SideLayout = () => {
  const route = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (route.pathname.startsWith("/reports")) {
      setIsOpen(true);
    }
  }, [route.pathname]);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <div key={item.title}>
                  {item.children ? (
                    <Collapsible
                      open={isOpen}
                      onOpenChange={setIsOpen}
                      className="group/collapsible"
                    >
                      <SidebarGroup>
                        <SidebarGroupLabel asChild>
                          <CollapsibleTrigger className="text-white">
                            <p style={{ fontSize: 14 }}>{item.title}</p>
                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                          </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                          <SidebarMenuItem>
                            <SidebarMenuButton
                              asChild
                              isActive={
                                route.pathname === "/reports" ? true : false
                              }
                            >
                              <a
                                href="/reports"
                                className="my-1 py-[24px] text-white"
                              >
                                Stock Reports
                              </a>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton
                              asChild
                              isActive={
                                route.pathname === "/reports/sell"
                                  ? true
                                  : false
                              }
                            >
                              <a
                                href="/reports/sell"
                                className="my-1 py-[24px] text-white"
                              >
                                Sell Reports
                              </a>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton
                              asChild
                              isActive={
                                route.pathname === "/reports/purchase"
                                  ? true
                                  : false
                              }
                            >
                              <a
                                href="/reports/purchase"
                                className="my-1 py-[24px] text-white"
                              >
                                Purchase Reports
                              </a>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        </CollapsibleContent>
                      </SidebarGroup>
                    </Collapsible>
                  ) : (
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={route.pathname === item.route ? true : false}
                      >
                        <a
                          href={item.route}
                          className="my-1 py-[24px] text-white"
                        >
                          {item.title}
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )}
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SideLayout;
