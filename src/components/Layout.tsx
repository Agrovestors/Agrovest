// /components/Layout.tsx
import React, { ReactNode } from "react"; // Import ReactNode for type definition
import Navbar from "./Navbar"; // Adjust the path if necessary
import Footer from "./Footer"; // Adjust the path if necessary

// Define the type for the props
interface LayoutProps {
  children: ReactNode; // Define children as ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />     {/* Always show the navbar */}
      <main className="flex-grow">{children}</main>  {/* Main content */}
      <Footer />     {/* Always show the footer */}
    </div>
  );
};

export default Layout;
