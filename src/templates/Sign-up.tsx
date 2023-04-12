import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { X } from "react-feather";
import AuthAPI from "@/api/auth";
import Login from "./Login";

export default function SignUp(props) {
  const { isOpen, closeModal } = props;

  async function getInfo(event) {
    event.preventDefault(); // prevent the default form submission

    const fullname = document.getElementById("fullnameID").value;
    const email = document.getElementById("emailID").value;
    const password = document.getElementById("passwordID").value;

    try {
      const res = await AuthAPI.signUp(fullname, email, password);
      closeModal(false);
    } catch (error) {
      // Handle the error here
      console.error(error);
      alert("Failed to sign up. Please try again.");
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
                <Dialog.Panel className="w-full h-screen transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <X
                    onClick={closeModal}
                    className="absolute top-6 right-6 cursor-pointer"
                  />
                  <div>
                    <div>
                      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                      </h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                      <input type="hidden" name="remember" value="true" />
                      <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                          <label className="sr-only">Full name</label>
                          <input
                            id="fullnameID"
                            name="fullname"
                            type="text"
                            autocomplete="fullname"
                            required
                            className="pl-2 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Full name"
                          />
                        </div>
                        <div>
                          <label className="sr-only">Email address</label>
                          <input
                            id="emailID"
                            name="email"
                            type="text"
                            autocomplete="email"
                            required
                            className="pl-2 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Email address"
                          />
                        </div>
                        <div>
                          <label className="sr-only">Password</label>
                          <input
                            id="passwordID"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required
                            className="pl-2 relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Password"
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          onClick={getInfo}
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
                          Sign Up!
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
