for (let i = 0; i < 100; i += 5) {
  console.log(i);

  if (i === 55) {
    console.log("ha, gotcha!");
    break;
  }

  console.log("This is loop", i);
}
