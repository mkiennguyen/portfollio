import { Roboto_Flex } from "next/font/google";
import StyledComponentsRegistry from "../lib/StyledComponentRegistry";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "../ui/global.css";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={robotoFlex.className}>
          {children}
          <SpeedInsights />
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
