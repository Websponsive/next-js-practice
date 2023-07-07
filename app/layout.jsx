import '@style/essential.css';

import Nav from "@components/Nav";
import Provider from '@components/Provider';

export const metadata = {
    title: "CarVista",
    description: "Rev up your car buying experience with CarVista, the ultimate online destination to find and purchase your dream ride effortlessly."
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Provider>
              <Nav />
              <main>
                {children}
              </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout