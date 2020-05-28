const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let initiatives = [
  {
    name: "PPENYC",
    image: "ppenyc.png",
    desc:
      "We are a coalition of NYC med students who are obtaining protective equipment for city hospitals who need it most.",
    fb: "",
    twitter: "@ppe2nyc",
    ig: "https://instagram.com/ppe2nyc",
    url: "https://www.ppe2nyc.com",
  },
  {
    name: "LitCovidNYU",
    image: "litcovid.png",
    desc:
      "A coalition of medical and graduate students who are reviewing and disseminating COVID-19 literature to make information more accessible to our frontline staff.",
    fb: "",
    twitter: "@Litcovid_nyu",
    ig: "",
    url: "https://bit.ly/nyulitcovid",
  },
  {
    name: "NY Covid Connect",
    image: "nycovidconnect.png",
    desc:
      "NYC students who aim to connect New Yorkers with COVID-19 Community resources, policy updates, health information, and each other.",
    fb: "",
    twitter: "",
    ig: "https://instagram.com/nycovidconnect",
    url: "https://nycovidconnect.cargo.site/",
  },
  {
    name: "NYC Childcare Match",
    image: "nycchildcarematch.png",
    desc:
      "A database that aims to connect childcare providers to work with healthcare workers, to address the needs of the frontline staff during COVID-19.",
    fb: "",
    twitter: "",
    ig: "",
    url: "https://www.nyc-childcare-match.com/",
  },
  {
    name: "The Purple Pinata",
    image: "purplepinata.png",
    desc:
      "An effort to connect healthcare workers with the services available to them, and to identify and support these workers by sending care packages and celebrating them.",
    fb: "https://www.facebook.com/ThePurplePinata",
    twitter: "",
    ig: "https://instagram.com/thepurplepinata",
    url: "https://linktr.ee/thepurplepinata",
  },
];

app.get("/initiative", (req, res) => {
  console.log(res);
  res.setHeader("Content-Type", "application/json");
  res.send({ initiatives: initiatives });
});

app.post("/deleteCard", (req, res) => {
  let index = -1;
  for (let i = 0; i < initiatives.length; i++) {
    if (
      initiatives[i].name === req.body.name &&
      initiatives[i].desc === req.body.desc
    ) {
      index = i;
    }
  }
  if (index >= 0) {
    initiatives.splice(index, 1);
  }
  res.redirect("/initiative");
});

app.post("/updateCard", (req, res) => {
  initiatives[req.body.card.idx] = req.body.card;
  res.redirect("/initiative");
});

app.post("/addCard", (req, res) => {
  initiatives.push(req.body.card);
  res.redirect("/initiative");
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
