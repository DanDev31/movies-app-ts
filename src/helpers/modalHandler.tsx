import { useState } from "react"

export const ModalHandler = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const toggleModal = ():void => {
        setIsModalOpen(!isModalOpen)
    }

  return {
    isModalOpen,
    setIsModalOpen,
    toggleModal
  }
}
