import "@styles/global.css";

//import components
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "MyTravelBlog",
  description: "Create your own blog post and share it to everyone",
  keywords: "MyTravelBlog",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
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
