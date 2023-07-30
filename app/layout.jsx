import "@styles/global.css";

//import components
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "ShareMoments",
  description: "Create your own funny moments post and share it to everyone",
  keywords: "ShareMoments",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <link rel="icon" href="/assets/images/logo.png" sizes="any" />
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
