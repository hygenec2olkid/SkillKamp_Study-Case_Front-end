import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { X } from "react-feather";

import AuthAPI from "@/api/auth";
import { useAuth } from "@/hooks/useAuth";

import SignUp from "./Sign-up";

export default function Login(props) {
  const { isOpen, closeModal } = props;
  const { login } = useAuth();

  const [isOpenSignup, setOpenSignup] = useState(false);

  function closeLogin() {
    setOpenSignup(false);
  }

  function openLogin() {
    setOpenSignup(true);
  }
  async function getInfo(event) {
    event.preventDefault(); // prevent the default form submission

    const email = document.getElementById("email-address").value;
    const password = document.getElementById("password").value;
    const res = await AuthAPI.signIn(email, password);
    try {
      const res = await AuthAPI.signIn(email, password);
      login({ name: res.detail.Name, authToken: res.detail.Token });
      closeModal(false);
    } catch (error) {
      // Handle the error here
      console.error(error);
      alert("Failed to sign in. Please try again.");
    }
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="h-screen w-full overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div>
                    <div>
                      <h2 className="tracking-tight mt-6 text-center text-3xl font-bold text-gray-900">
                        Sign in to your account
                      </h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                      <input type="hidden" name="remember" value="true" />
                      <div className="-space-y-px rounded-md shadow-sm">
                        <X
                          onClick={closeModal}
                          className="absolute right-6 top-6 cursor-pointer"
                        />
                        <div>
                          <label for="email-address" className="sr-only">
                            Email address
                          </label>
                          <input
                            id="email-address"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required
                            className="relative block w-full rounded-t-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Email address"
                          />
                        </div>
                        <div>
                          <label for="password" className="sr-only">
                            Password
                          </label>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required
                            className="relative block w-full rounded-b-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Password"
                          />
                        </div>
                      </div>

                      <div
                        onClick={openLogin}
                        className="flex items-center justify-between"
                      >
                        <div className="text-sm">
                          <a className="font-medium text-indigo-600 hover:text-indigo-500">
                            <SignUp
                              isOpen={isOpenSignup}
                              closeModal={closeLogin}
                            />
                            Sign up with email
                          </a>
                        </div>
                      </div>

                      <div>
                        <button
                          onClick={getInfo}
                          type="submit"
                          className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg
                              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
