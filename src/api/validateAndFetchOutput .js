import axios from "axios";

export const validateAndFetchOutput = async (inputData, llmConfig, setOutputData, setError, setErrorMessage, setSuccess) => {
  try {
    let { baseUrl, apiKey, model, maxTokens = 1, temperature = 0.5 } = llmConfig;

    if (!/^https?:\/\//i.test(baseUrl)) {
      baseUrl = `https://${baseUrl}`;
    }

    const payload = {
      prompt: inputData,
      max_tokens: parseInt(maxTokens),
      temperature: parseFloat(temperature),
    };

    const headers = {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    };

    const response = await axios.post(
      `${baseUrl}/v1/engines/${model}/completions`,
      payload,
      { headers }
    );

    if (response.status === 200 && response.data.choices?.length > 0) {
      setOutputData(response.data.choices[0].text.trim());
      setSuccess(true);
      setError(false)
      setErrorMessage("");
    } else {
      setError(true);
      setErrorMessage("Invalid response from the LLM API.");
    }
  } catch (error) {
    console.error("Error during API call:", error.message);
    setError(true);
    setErrorMessage(
      error.response?.data?.error?.message || "Unexpected error occurred."
    );
  }
};
