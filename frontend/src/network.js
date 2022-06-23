export default {
  makeRequest: async function (path, method = "GET", body = null) {
    try {
      console.log(body);
      const resp = await fetch(`http://localhost:3000/${path}`, { method, body});
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
