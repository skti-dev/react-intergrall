import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const BackgroundChanger = () => {
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
      document.querySelector("#file").click()
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
    </div>
  );
};

export default BackgroundChanger;
