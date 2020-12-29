const apiUrl = `${window.location.origin}/api/`;

function fetchEggs() {
  return fetch(apiUrl + "products/eggs").then((response) => response.json());
}

function addEggs(record) {
  return fetch(apiUrl + "products/eggs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record),
  }).then((response) => response.json());
}
// edit and delete funvtions
function editEggs(method, data) {
  return fetch(apiUrl + "products/eggs", {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

function fetchMeat() {
  return fetch(apiUrl + "products/meat").then((response) => response.json());
}

function addMeat(record) {
  return fetch(apiUrl + "products/meat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record),
  }).then((response) => response.json());
}
// edit and delete functions
function editMeat(method, data) {
  return fetch(apiUrl + "products/meat", {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

function fetchHens() {
  return fetch(apiUrl + "chicken/hens").then((response) => response.json());
}

function addHens(record) {
  return fetch(apiUrl + "chicken/hens", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record),
  }).then((response) => response.json());
}
function editHensRecord(method, data) {
  return fetch(apiUrl + "chicken/hens", {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

function fetchCocks() {
  return fetch(apiUrl + "chicken/cocks").then((response) => response.json());
}

function addCocks(record) {
  return fetch(apiUrl + "chicken/cocks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record),
  }).then((response) => response.json());
}

function editCocksRecord(method, data) {
  return fetch(apiUrl + "chicken/cocks", {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

function fetchChicks() {
  return fetch(apiUrl + "chicken/chicks").then((response) => response.json());
}

function addChicks(record) {
  return fetch(apiUrl + "chicken/chicks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record),
  }).then((response) => response.json());
}

function editChicksRecord(method, data) {
  return fetch(apiUrl + "chicken/chicks", {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

function addChicken(type, record) {
  switch (type) {
    case "hens":
      return addHens(record);
    case "cocks":
      return addCocks(record);
    case "chicks":
      return addChicks(record);
    default:
      return;
  }
}
function editChicken(type, method, record) {
  switch (type) {
    case "hens":
      return editHensRecord(method, record);
    case "cocks":
      return editCocksRecord(method, record);
    case "chicks":
      return editChicksRecord(method, record);
    default:
      return;
  }
}
function addSales(record) {
  return fetch(apiUrl + "sales", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record),
  }).then((response) => response.json());
}

function fetchSales() {
  return fetch(apiUrl + "sales").then((response) => response.json());
}

function editSales(method, record) {
  return fetch(apiUrl + "sales", {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record),
  }).then((response) => response.json());
}
function addSupplies(record) {
  return fetch(apiUrl + "supplies", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record),
  }).then((response) => response.json());
}
function fetchSupplies() {
  return fetch(apiUrl + "supplies").then((response) => response.json());
}
function editSupplies(method, record) {
  return fetch(apiUrl + "supplies", {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record),
  }).then((response) => response.json());
}

// auth routes

function loginCall(user) {
  return fetch(`${window.location.origin}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then((response) => {
    storeToken(response);
    return response.json();
  });
}
function registerCall(user) {
  return fetch(`${window.location.origin}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then((response) => {
    storeToken(response);
    return response.json();
  });
}
function fetchUser(user) {
  return fetch(`${window.location.origin}/auth/current-user`, {
    method: "POST",
    headers: appendHeaders(),
    body: JSON.stringify(user),
  }).then((response) => response.json());
}

function logoutCall() {
  return fetch(`${window.location.origin}/auth/logout`, {
    method: "DELETE",
    headers: appendHeaders(),
  }).then((response) => console.log(response));
}
// fetch jwt from localstorage
function appendHeaders() {
  const token = window.localStorage.getItem("token");
  const headers = { "Content-Type": "application/json", Authorization: token };
  return headers;
}

function storeToken(response) {
  const token = response.headers.get("Authorization");
  window.localStorage.setItem("token", token);
}
