import React from "react";
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const HeaderComponent = () => {
  const user = useUser();
  return (
    <React.Fragment>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      <div className="header-component h-[120px] w-full">
        <div className="container-w flex h-full flex-row items-center justify-between">
          <h1 className="text-lg">
            {user?.isSignedIn ? "Hello, User" : "T3 Application"}
          </h1>
          {user?.isSignedIn ? (
            <SignOutButton>
              <button className="btn btn-md rounded-3xl bg-white px-12 py-2 font-semibold text-[#2e026d]">
                Sign Out
              </button>
            </SignOutButton>
          ) : (
            <SignInButton mode="modal">
              <button className="btn btn-md rounded-3xl bg-white px-12 py-2 font-semibold text-[#2e026d]">
                Sign in
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderComponent;
