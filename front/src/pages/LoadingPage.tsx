import { m } from "framer-motion";
import Logo from "../components/Logo";
import ProgressBar from "../components/ProgressBar";

const Loading = () => {
  return (
    <>
      <ProgressBar />
      <div className="fixed z-50 flex h-full w-full items-center justify-center bg-dark-secondaryBg">
        <m.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeatDelay: 1,
            repeat: Infinity,
          }}
        >
          <Logo height={10} />
        </m.div>
        <m.div
          className="absolute h-[300px] w-[300px] border-[3px] border-red-400"
          animate={{
            scale: [1.2, 1, 1, 1.2, 1.2],
            rotate: [270, 0, 0, 270, 270],
            opacity: [0.25, 1, 1, 1, 0.25],
            borderRadius: ["25%", "25%", "50%", "50%", "25%"],
          }}
          transition={{ ease: "linear", duration: 3.2, repeat: Infinity }}
        />
        <m.div
          className="absolute h-[320px] w-[320px] border-[3px] border-red-500"
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 270, 270, 0, 0],
            opacity: [1, 0.25, 0.25, 0.25, 1],
            borderRadius: ["25%", "25%", "50%", "50%", "25%"],
          }}
          transition={{
            ease: "linear",
            duration: 3.2,
            repeat: Infinity,
          }}
        />
      </div>
    </>
  );
};

export default Loading;
