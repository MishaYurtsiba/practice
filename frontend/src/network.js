export default {
  makeRequest: async function (path, method = "GET", data = null) {
    try {
      if (data) {
        var options = {
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        };
      }
      const resp = await fetch(`http://localhost:3000/${path}`, {
        method,
        ...options,
      });
      if (!resp.ok) {
        alert(`помилка ${resp.status}`);
        return null;
      }
      return await resp.json();
    } catch (e) {
      alert(`помилка ${e}`);
      console.log(e);
      return null;
    }
  },
};
