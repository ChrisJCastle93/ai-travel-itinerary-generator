const router = require("express").Router();
const authRoutes = require("./auth.routes");
const { OpenAIApi, Configuration } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function generatePrompt(animal) {
  const capitalizedAnimal = animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Write an itinerary for a 2 hour walking tour around a city  

City: New York
Names: Get in touch with the tasty culture of NYC on this New York food tour that is a pleasure for both the body and the mind! This New York City tour starts off at a location where many new citizens are made official, City Hall.On this historical tour of New York, we make our way in a loop around the NYC LES, seeing 100-year old bakeries, churches, and historic sites. We stroll the streets of Little Italy just as Lucky Luciano might have a century ago. Marvel at former and still operating synagogues and Jewish clothing stores. We dive into the culture remembered at places such as the Lower East Side Tenement Museum and the African Burial Ground, and the exciting streets of Chinatown, where you feel like you’re in Shanghai! Along the way on our New York City food tour, we sink our teeth into amazing stories and amazing food. Knishes, prosciutto, dumplings, and more. We taste why New York City is the center of the world and the culinary legacy left here by those that have passed by Lady Liberty on their way to fulfill the American Dream.
City: London
Names: No other tour covers so many major London landmarks! Have your cameras at the ready as we walk past Westminster Abbey and the Big Ben, and see where the Queen and Prince Charles live as we stroll past Buckingham and St. James’s Palaces. On this 3-hour free walking tour you'll tick off many of London's must-see sites. Your gratuity-based London Free Tour starts in front of the Apple Store in Covent Garden and finishes by Westminster Abbey. Homes of the British royal family. Around every corner is another piece of royal history on this gratuity-based free London walking tour! Your expert local guide will take you to Buckingham Palace, the official residence of Her Majesty Queen Elizabeth II (some tours will even see the changing of the guard!), and you’ll walk past St James’s Palace, where Princes William and Harry grew up and Prince Charles still lives. You’ll also see Westminster Abbey, where the Queen was crowned, Princess Diana was farewelled, and Kate and William were married. However, it’s not only the current royals who feature on this London walking tour – you’ll also hear about other kings and queens who left their mark on Great Britain.Some of the world’s most iconic monuments. Of course though, it’s not just the royals who helped to shape London, the UK and indeed, the world. Your guide will tell you about Winston Churchill as you walk past the Churchill War Rooms, talk about Guy Fawkes as you stroll past the Houses of Parliament, and tell you about Admiral Nelson as you visit the Nelson Column on Trafalgar Square. With other must-see sites like Covent Garden, Horse Guards Parade and of course, the Big Ben, this London gratuity-based free walking tour shows you many of London's major landmarks.
City: ${capitalizedAnimal}
Names:`;
//   return `Suggest a name for a tour guiding business in a tourist destination 

// City: London
// Names: Wander London, British Walking Tours, Look up London
// City: Paris
// Names: Sightseeing Paris, Best of France Tours, Explore Paris
// City: ${capitalizedAnimal}
// Names:`;
}

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

/* GET home page */
router.post("/generate", async (req, res, next) => {
  const completion = await openai.createCompletion("text-ada-001", {
    prompt: generatePrompt("paris"),
    // prompt: generatePrompt(req.body.animal),
    max_tokens: 1000,
    temperature: 0.6,
  });
  console.log(completion.data)
  res.status(200).json({ result: completion.data.choices[0].text });
  // res.json("API ROUTE ACCESSED");
});

router.use("/auth", authRoutes);

module.exports = router;
