function collectFlags(events) {
  let flags = 0;

  for (let event of events) {
    if (event === "태극기") {
      flags++;
    } else if (event === "친일파") {
      flags = 0;
    } else if (event === "폭우") {
      if (flags > 0) flags--;
    } else if (event === "무궁화") {
      flags++;
    }

    if (flags >= 3) {
      console.log("광복!");
      return;
    }
  }

  console.log("실패");
}
collectFlags(["태극기", "태극기", "무궁화"]);
collectFlags(["태극기", "친일파", "태극기", "태극기", "태극기"]);
collectFlags(["태극기", "폭우", "태극기", "폭우"]);
