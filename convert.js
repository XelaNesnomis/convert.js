const [node, file, inches, unit] = process.argv;

if (unit === '-mm') {
  console.log(`${inches} inches is ${inches * 25.4} millimeters.`);
} else if (unit === '-cm') {
  console.log(`${inches} inches is ${inches * 2.54} centimeters.`);
} else if (unit === '-m') {
  console.log(`${inches} inches is ${inches * 0.0254} meters.`);
} else {
  console.log(`Invalid input. Please use -mm, -cm, or -m.`);
}