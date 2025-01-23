import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const AuthenticationLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <title>Authentication</title>
      </head>
      <body>
        <main >
          <div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
};

export default AuthenticationLayout;
