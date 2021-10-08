describe("match test", () => {
  const obj = {
    date: new Date(),
    id: Math.floor(Math.random() * 100),
    name: "juno",
  };
  test("type match test", () => {
    expect(obj).toMatchInlineSnapshot(
      {
        date: expect.any(Date),
        id: expect.any(Number),
      },
      `
      Object {
        "date": Any<Date>,
        "id": Any<Number>,
        "name": "juno",
      }
    `
    );
  });
});
