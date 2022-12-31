import Modal from "./components/Modal";

const Projects = ({toggleActive, active}) => {
  return (
    <Modal
      heading="Projects"
      toggleActive={toggleActive}
      active={active}
    >
      <h1>This is the projects page</h1>
    </Modal>
  )
}

export default Projects;