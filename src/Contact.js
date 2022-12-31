import Modal from "./components/Modal";

const Contact = ({toggleActive, active}) => {
  return (
    <Modal
      heading="Contact Me"
      toggleActive={toggleActive}
      active={active}
    >
      <div className="contact">
        <h1>Contact Me</h1>
        <ul style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
        }}>
          <li><span>Email: </span>ryan.bell62101@gmail.com</li>
          <li><span>Phone: </span>469-678-6995</li>
        </ul>
      </div>
    </Modal>
  )
}

export default Contact;