import "./globals.css";
export const metadata = {
  title: "Chitramela - Film Festival",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classname}>
        {children}
      </body>
    </html>
  );
}