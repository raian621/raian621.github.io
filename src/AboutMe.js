import Modal from "./components/Modal";

const AboutMe = ({toggleActive, active}) => {
  return (
    <Modal 
      heading="About Me"
      toggleActive={toggleActive}
      active={active}
    >
      <div 
        className="aboutme"
      >
        <div style={{
          textAlign: "left"
        }}>
          <p>
            Sit officia commodo nisi anim sint. Cupidatat dolor aliquip ipsum 
            ea anim ea et. Incididunt est enim elit eiusmod dolor nisi tempor 
            cupidatat mollit ex. Incididunt cupidatat mollit ex ad cillum sint 
            veniam est reprehenderit dolore velit reprehenderit amet. Ullamco 
            laboris sunt occaecat qui qui aute consequat dolore.
          </p>
          <p>
            Laboris ad excepteur duis laboris duis dolore nostrud Lorem. Nisi 
            dolore elit cillum eu officia duis Lorem. Proident nisi elit Lorem
            amet quis enim laborum sit ad. Ea amet reprehenderit amet consequat
            est.
          </p>
          <p>
            Ullamco adipisicing sint et est id officia ipsum quis adipisicing 
            officia fugiat dolore. Adipisicing esse anim elit laborum 
            incididunt quis aliquip occaecat sint aliquip velit. Est occaecat 
            quis tempor non id mollit. Proident dolore do incididunt excepteur 
            quis id fugiat. Ad anim aliqua in aliquip anim do ea labore.
          </p>
          <p>
            Voluptate amet nostrud dolor aute incididunt id velit ipsum enim 
            minim. Magna fugiat eiusmod ullamco sunt ut anim occaecat nulla 
            aliqua culpa sunt. Minim Lorem dolor culpa commodo est exercitation 
            velit fugiat ea. Ea sint et amet cupidatat pariatur. Nisi do et 
            Lorem sunt proident.
          </p>
          <p>
            Aliquip sint dolore culpa pariatur excepteur ut anim culpa in irure
            velit ad. Minim qui ea et tempor dolore dolore officia aute nisi 
            cupidatat dolor qui ea sit. Elit duis culpa est do quis do cillum
            dolore proident dolor ex. Duis commodo dolore ad est in excepteur 
            laborum esse exercitation. Est officia incididunt consectetur eiusmod 
            exercitation occaecat excepteur ex Lorem enim est consequat minim 
            ullamco.
          </p>
        </div>
      </div>
    </Modal>
  )
}

export default AboutMe;