export const getUserMessage = () => {
  var data = [
      [22, "It's bed time, Get some sleep. <span >&#128529;</span>"],
      [
        16,
        "Good evening <span>&#127769;</span>, Stay safe! <span>&#128153;</span>",
      ],
      [12, "Good afternoon, Wash your hands.<span>&#128080;</span>"],
      [5, "Good morning <span>&#127774;</span>, Great day! "],
      [0, "Working late? Try rest! <span>&#128580;</span>"],
    ],
    hr = new Date().getHours();
  for (var i = 0; i < data.length; i++) {
    if (hr >= data[i][0]) {
      return `${data[i][1]}`;
    }
  }
};
