import "./styles.css";
import SectionCard from "./components/section";

const ProjectWinddow = (props) => {
  return (
    <>
      <main className={`${props.sidebarOn ? "sidebar-on" : ""}`}>
        <h1>Project Title</h1>
        <div>
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
        </div>
      </main>
    </>
  );
};
export default ProjectWinddow;
