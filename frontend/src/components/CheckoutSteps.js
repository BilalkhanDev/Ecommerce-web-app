import React from "react";

export default function CheckoutSteps(props) {
  return (
    <>
      <ol id="progress-bar" className="mt-3">
        <li
          className={
            props.step1 && props.step2
              ? "step-done"
              : props.step1
              ? "step-active"
              : "step-todo"
          }
        >
          Sign In
        </li>
        <li
          className={
            props.step2 && props.step3
              ? "step-done"
              : props.step2
              ? "step-active"
              : "step-todo"
          }
        >
          Address
        </li>
        <li
          className={
            props.step3 && props.step4
              ? "step-done"
              : props.step3
              ? "step-active"
              : "step-todo"
          }
        >
          Payment
        </li>
        <li className={props.step4 ? "step-active" : "step-todo"}>
          Place Order
        </li>
      </ol>
    </>
  );
}
