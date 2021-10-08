import * as React from "react";
import { create } from "react-test-renderer";

function Button() {
  return <button>Nothing to do for now changeddd</button>;
}

describe("Button component", () => {
  test("matches the snapshot", () => {
    const button = create(<Button />);
    expect(button.toJSON()).toMatchInlineSnapshot(`
      <button>
        Nothing to do for now changeddd
      </button>
    `);
  });
});
