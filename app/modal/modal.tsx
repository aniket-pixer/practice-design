import ModalSection from "@/components/modalsection";
import React, { useState } from "react";
import { AddTitle, ModalOuterDiv, OpenModalButton } from "./style";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalOuterDiv>
      <h1>Custom Modal Example</h1>
      <OpenModalButton onClick={openModal}>Open Modal</OpenModalButton>
      <ModalSection isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Title</h2>
        <AddTitle>This is a custom modal content.</AddTitle>
        <AddTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </AddTitle>
        <AddTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </AddTitle>
        <AddTitle>
          Magna exercitation reprehenderit magna aute tempor cupidatat consequat
          elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum
          quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do
          dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum
          eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad
          veniam.
        </AddTitle>
        <AddTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam. Magna exercitation reprehenderit
          magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit
          dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
          eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit
          incididunt nisi consectetur esse laborum eiusmod pariatur proident
          Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
        </AddTitle>
        <AddTitle>
          Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
          officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit
          incididunt nisi consectetur esse laborum eiusmod pariatur proident
          Lorem eiusmod et. Culpa deserunt nostrud ad veniam. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
          hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
          porttitor quam. Magna exercitation reprehenderit magna aute tempor
          cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt
          ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
          enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur
          esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
          deserunt nostrud ad veniam.
        </AddTitle>
        <AddTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </AddTitle>
        <AddTitle>
          Magna exercitation reprehenderit magna aute tempor cupidatat consequat
          elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum
          quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do
          dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum
          eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad
          veniam.
        </AddTitle>
        <AddTitle>
          Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
          officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit
          incididunt nisi consectetur esse laborum eiusmod pariatur proident
          Lorem eiusmod et. Culpa deserunt nostrud ad veniam. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
          hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
          porttitor quam. Magna exercitation reprehenderit magna aute tempor
          cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt
          ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
          enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur
          esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
          deserunt nostrud ad veniam.
        </AddTitle>
      </ModalSection>
    </ModalOuterDiv>
  );
};

export default Modal;
