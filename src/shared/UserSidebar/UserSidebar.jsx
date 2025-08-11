import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FileText,
  Lock,
  MessageSquare,
  CreditCard,
  LogOut,
  List,
  Pin,
  Mail,
  User // replaced Font Awesome with Lucide User icon
} from "lucide-react";

export default function UserSidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-gray-50 p-4">
      {/* Quick Actions */}
      <Section
        title="Quick Actions"
        isActive={isSectionActive(location.pathname, [
          "/userdashboard/list-plate",
          "/userdashboard/get-plate-valued"
        ])}
      >
        <SidebarButton
          to="/userdashboard/list-plate"
          icon={<FileText size={18} />}
          text="List a Plate for Sale"
        />
        <SidebarButton
          to="/userdashboard/get-plate-valued"
          icon={<FileText size={18} />}
          text="Get Plate Valued"
        />
      </Section>

      {/* Account Management */}
      <Section
        title="Account Management"
        isActive={isSectionActive(location.pathname, [
          "/userdashboard/profile",
          "/userdashboard/account-security",
          "/userdashboard/communications"
        ])}
      >
        <SidebarButton
          to="/userdashboard/profile"
          icon={<User size={18} />} // Changed here
          text="My Profile"
        />
        <SidebarButton
          to="/userdashboard/account-security"
          icon={<Lock size={18} />}
          text="Account Security"
        />
        <SidebarButton
          to="/userdashboard/communications"
          icon={<MessageSquare size={18} />}
          text="Communications"
        />
      </Section>

      {/* Marketplace Tools */}
      <Section
        title="Marketplace Tools"
        isActive={isSectionActive(location.pathname, [
          "/userdashboard/my-adverts",
          "/userdashboard/saved-adverts",
          "/userdashboard/message-centre"
        ])}
      >
        <SidebarButton
          to="/userdashboard/my-adverts"
          icon={<List size={18} />}
          text="My Adverts"
        />
        <SidebarButton
          to="/userdashboard/saved-adverts"
          icon={<Pin size={18} />}
          text="Saved Adverts"
        />
        <SidebarButton
          to="/userdashboard/message-centre"
          icon={<Mail size={18} />}
          text="Message Centre"
        />
      </Section>

      {/* Billing */}
      <Section
        title="Billing"
        isActive={isSectionActive(location.pathname, [
          "/userdashboard/secure-payments"
        ])}
      >
        <SidebarButton
          to="/userdashboard/secure-payments"
          icon={<CreditCard size={18} />}
          text="Secure Payments"
        />
      </Section>

      {/* Exit */}
      <Section
        title="Exit"
        isActive={isSectionActive(location.pathname, [
          "/userdashboard/logout"
        ])}
      >
        <SidebarButton
          to="/userdashboard/logout"
          icon={<LogOut size={18} />}
          text="Logout"
        />
      </Section>
    </div>
  );
}

function Section({ title, children, isActive }) {
  return (
    <div className="mb-6">
      <h3
        className={`flex items-center gap-2 font-semibold mb-2 ${
          isActive ? "text-blue-600" : "text-black" 
        }`}
      >
        🔵 {title}:
      </h3>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function SidebarButton({ to, icon, text }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded-md bg-white transition
        ${
          isActive
            ? "!bg-[#00823A] text-white shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)]"
            : "shadow-[inset_0_-4px_6px_rgba(0,0,0,0.05)] hover:bg-green-100 hover:text-black"
        }`
      }
    >
      {icon}
      <span>{text}</span>
    </NavLink>
  );
}

function isSectionActive(pathname, routes) {
  return routes.some((route) => pathname.startsWith(route));
}
