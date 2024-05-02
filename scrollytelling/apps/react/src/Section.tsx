import { useInView, motion } from "framer-motion";
import React, { ReactElement, useCallback, useEffect, useRef } from "react";

interface ISection {
  onView?: (a: boolean) => void;
  onScrollTop?: (a: number) => void;
  children?: ReactElement;
  className?: string;
  margin?: string
}

const Section: React.FC<ISection> = ({
  onView,
  onScrollTop,
  children,
  className,
  margin
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { margin: "-300px" });
  const onInView = useCallback(() => {
    if (onView) onView(isInView);
  }, [isInView]);

  const onEventScrollTop = (e: any) => {
    if (onScrollTop) onScrollTop(e.target.offsetTop);
  };

  useEffect(() => {
    onInView();
  }, [onInView]);

  return (
    <section className={className} onClick={onEventScrollTop}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: margin ? margin : "-200px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grow flex flex-col justify-center items-end"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
