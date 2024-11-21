import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Newspaper,
  Tag,
  LogOut,
  ChevronDown,
  User,
} from "lucide-react";
import Footer from "../Footer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      path: "/admin",
    },
    {
      title: "Add Product",
      icon: <ShoppingCart className="h-5 w-5" />,
      path: "/admin/add-product",
    },
    {
      title: "Add Newsletter",
      icon: <Newspaper className="h-5 w-5" />,
      path: "/admin/add-newsletter",
    },
    {
      title: "Add Voucher",
      icon: <Tag className="h-5 w-5" />,
      path: "/admin/add-voucher",
    },
    {
      title: "Add Holiday Package",
      icon: <Tag className="h-5 w-5" />,
      path: "/admin/add-holiday-package",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-brown text-cream transition-all duration-300 ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <Link to="/" className="font-serif text-xl">
            LATH Admin
          </Link>
          <button onClick={() => setIsOpen(!isOpen)}>
            <ChevronDown
              className={`h-6 w-6 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <nav className="space-y-2 p-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 rounded-lg px-3 py-2 transition-colors ${
                  location.pathname === item.path
                    ? "bg-cream/20"
                    : "hover:bg-cream/10"
                }`}
              >
                {item.icon}
                {isOpen && <span>{item.title}</span>}
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-20"
        }`}
      >
        {/* Top Bar */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-end bg-white px-6 shadow">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Admin User</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/admin/profile">My Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>

        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;