import "@styles/global.css";
import { Children } from "react";

export const metadata = {
  title: "Promptu",
  description: "Discover & share the most useful AI prompts",
};

const RootLayout = () => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
          <main className="app">{Children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
