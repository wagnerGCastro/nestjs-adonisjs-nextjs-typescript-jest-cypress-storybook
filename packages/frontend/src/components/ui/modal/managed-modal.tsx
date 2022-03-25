import Modal from "@components/ui/modal/modal";
import { useModalAction } from "./modal.context";

const ManagedModal = () => {
  const { closeModal } = useModalAction();

  return (
    <Modal open={false} onClose={closeModal}>
      <h1>Modal Shared</h1>
    </Modal>
  );
};

export default ManagedModal;
