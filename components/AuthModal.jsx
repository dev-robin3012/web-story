import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useContext, useRef } from "react";
import { ModalContext } from "../layout";
import Button from "./Button";

const AuthModal = () => {
  const { openModal, setOpenModal } = useContext(ModalContext);
  const form = useRef(null);

  const handleSubmit = () => {
    const name = form.current.name.value;
    const email = form.current.email.value;

    localStorage.setItem("web_story:user", JSON.stringify({ name, email }));
    setOpenModal(false);
  };

  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-5">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-0 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-0 scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg p-4 shadow-xl transform transition-all">
                <div>
                  <div className="mt-3 space-y-5">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      Log in to continue
                    </Dialog.Title>
                    <form className="space-y-3" ref={form}>
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="w-full px-3 py-1.5 border outline-blue-600 rounded-md"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="w-full px-3 py-1.5 border outline-blue-600 rounded-md"
                      />
                      <div className="space-x-3">
                        <Button type="button" variant="cancel" onClick={() => setOpenModal(false)}>
                          Cancel
                        </Button>
                        <Button type="button" onClick={handleSubmit}>
                          Submit
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AuthModal;
