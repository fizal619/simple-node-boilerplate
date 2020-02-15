const fs = require("fs");
const path = require("path");
const js = fs.readFileSync(path.resolve(__dirname, '../../public/js/utils.js'), "utf8");
eval(js);

test("generateDate() function should format GTM date to MM/DD/YYYY", () => {
  let date = new Date();
  let formatedDate = formatDate(date);
  expect(formatedDate).toHaveLength(10);
});
