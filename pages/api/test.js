export default function handler(req, res) {
    // Apenas aceita requisições do tipo GET
    if (req.method === 'GET') {
      res.status(200).json({ message: 'Testado' });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
  