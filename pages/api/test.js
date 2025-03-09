/* export default function handler(req, res) {
    // Apenas aceita requisições do tipo GET
    if (req.method === 'GET') {
      res.status(200).json({ message: 'Testado' });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }*/
  

    export default function handler(req, res) {
      if (req.method !== 'POST') {
          return res.status(405).json({ error: 'Method not allowed' });
      }
  
      try {
          const { model, store, messages } = req.body;
  
          // Verifica se os campos obrigatórios foram fornecidos
          if (!model || !messages || !Array.isArray(messages)) {
              return res.status(400).json({ error: 'Invalid request payload' });
          }
  
          // Simula uma resposta baseada no input
          const response = {
              id: "chatcmpl-B9CzDBH61BSM4uSxRlRhpqoVO1XA6",
              object: "chat.completion",
              created: Math.floor(Date.now() / 1000), // Timestamp atual
              model: model || "gpt-3.5-turbo-0125",
              choices: [
                  {
                      index: 0,
                      message: {
                          role: "assistant",
                          content: "Sinto muito, mas não posso fornecer informações pessoais sobre indivíduos específicos, a menos que sejam figuras públicas conhecidas. Posso ajudar com outras perguntas ou informações gerais, se precisar. Como posso ajudar você hoje?",
                          refusal: null
                      },
                      logprobs: null,
                      finish_reason: "stop"
                  }
              ],
              usage: {
                  prompt_tokens: 16,
                  completion_tokens: 59,
                  total_tokens: 75,
                  prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0
                  },
                  completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0
                  }
              },
              service_tier: "default",
              system_fingerprint: null
          };
  
          return res.status(200).json(response);
      } catch (error) {
          return res.status(500).json({ error: 'Internal server error' });
      }
  }
  
