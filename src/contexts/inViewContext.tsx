import { createContext, useState, useEffect, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

export const InViewContext = createContext<any>({});

export const InViewProvider = ({ children }: { children: ReactNode }) => {
  const [sectionInView, setSectionInView] = useState<string | null>(null);

  const { ref: beginRef, inView: beginInView } = useInView({ threshold: 0.3 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.3 });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.3,
  });
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (aboutInView) {
      setSectionInView("about");
    } else if (skillsInView) {
      setSectionInView("skills");
    } else if (projectsInView) {
      setSectionInView("projects");
    } else if (beginInView) {
      setSectionInView("begin");
    }
  }, [aboutInView, skillsInView, projectsInView, beginInView]);

  return (
    <InViewContext.Provider
      value={{
        sectionInView,
        setSectionInView,
        aboutRef,
        skillsRef,
        projectsRef,
        beginRef,
      }}
    >
      {children}
    </InViewContext.Provider>
  );
};
