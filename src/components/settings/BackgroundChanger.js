import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const BackgroundChanger = () => {
  const [showModal, setShowModal] = useState(false);

  const setDesktopBackground = image => {
    const desktop = document.querySelector("#desktop")
    desktop.style.cssText = `
      background-image: url(${image});
      background-repeat: no-repeat;
      background-position: center;
    `
  }

  const clickHandler = () => {
    try {
      setShowModal(true);
      // document.querySelector("#file").click()
    }catch(e) {
      console.error("Error activating background edition")
      console.error(e)
    }
  }

  const fileChangeHandler = (fileList) => {
    try {
      const file = fileList[0]
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => setDesktopBackground(fileReader.result)
    }catch(e) {
      console.error("Error on file change handler")
      console.error(e)
    }
  }

  const colorChangeHandler = (e) => {
    try {
      console.log({ e })
    }catch(e) {
      console.error("Error on color change handler")
      console.error(e)
    }
  }

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <button title="Editar plano de fundo" className="my-2 default-chip" onClick={() => clickHandler()}>
        <FontAwesomeIcon icon={faImage} className="default-button-icon" />
        Editar plano de fundo
      </button>
      <input
        className="invisible h-0"
        type="file"
        name="input-file"
        id="file"
        onChange={(e) => fileChangeHandler(e.target.files)}
        accept="image/*"
      />
      <input
        className="invisible h-0"
        type="color"
        name="input-color"
        id="color"
        onChange={(e) => colorChangeHandler(e)}
      />
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold"> Personalização </h3>
                </div>
                <div className="relative flex-auto w-100">
                  <div className="w-100 flex items-center justify-between p-3 cursor-pointer default-hover-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
                      <path fill="none" d="M0 0h24v24H0z"/>
                      <path d="M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                    </svg>
                    <div className="ml-3">
                      <h3 className="font-semibold"> Cores  </h3>
                      <p className="text-gray-500"> Selecione uma cor sólida como plano de fundo </p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 ml-4">
                      <path fill="none" d="M0 0h24v24H0z"/>
                      <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
                    </svg>
                  </div>
                  <div className="flex items-center p-3 mb-3 justify-between cursor-pointer default-hover-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                    <div className="ml-3">
                      <h3 className="font-semibold"> Imagens  </h3>
                      <p className="text-gray-500"> Selecione uma imagem como plano de fundo </p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 ml-4">
                      <path fill="none" d="M0 0h24v24H0z"/>
                      <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 md-shadow font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
};

export default BackgroundChanger;
