export default async function handler(req, res) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Missing query parameter" });
  }

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(query)}&number=12&apiKey=${process.env.SPOONACULAR_API_KEY}`
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to search recipes" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Server error searching recipes" });
  }
}