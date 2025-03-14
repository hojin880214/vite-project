import CounterButton from "./CounterButton";

function Controller() {
  return (
    <>
      <CounterButton adjustment={"-1"} />
      <CounterButton adjustment={"-10"} />
      <CounterButton adjustment={"+1"} />
      <CounterButton adjustment={"+10"} />
    </>
  );
}

export default Controller;
