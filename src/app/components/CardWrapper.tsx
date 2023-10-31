"use client"; 
import {
  createRef,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react"; 
import Card from "./Card";

  const CardWrapper = forwardRef((props: any, passedRef: any) => {
  const { colors = [], currentIndex = 0, loading } = props;
  const ref: any = useRef([]);
  const currentRef = useRef(0);
  ref.current = new Array(colors.length * 2)
    .fill(null)
    .map((element, i) => ref.current[i] ?? createRef());

  useImperativeHandle(passedRef, () => ({
    doClick() {
      currentRef.current = currentIndex;
      ref.current[currentRef.current].current?.scrollIntoView({
        behavior: "smooth",
      });
    },
  }));

  let currentDIv = ref.current[currentRef.current].current;

  // currentDIv ? (currentDIv.style.backgroundColor = "pink") : "";

  const sds = useRef(null);
  let currentDD: any = sds.current;
  useEffect(() => {
    currentDD && loading ? (currentDD.className = "bay-card-wrapper") : "";
  }, [currentDD,loading]);

  return (
    <div ref={sds} className={`${loading && "bay-card-wrapper"}`}>
      {colors.map((color: any, index: string | number) => {
        return (
          <Card
            key={index}
            ref={ref.current[index]}
            color={color}
            index={index}
          />
        );
      })}
      {colors.map((color: any, index: any) => {
        return (
          <Card
            key={index}
            ref={ref.current[index + colors.length]}
            color={color}
            index={index}
          />
        );
      })}
    </div>
  );
});

CardWrapper.displayName = 'CardWrapper';

export default CardWrapper;