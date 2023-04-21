export const ceyAuthorization = '334c15e0-83c8-4a19-a28c-1a17c1029344';
export const idCohort = 'plus-cohort-16';



// Загрузка данных о профиле 

export function profileInformation() {
  return fetch('https://nomoreparties.co/v1/' + `${idCohort}` + '/users/me', {
      method: 'GET',
      headers: {
        authorization: ceyAuthorization,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
}

// Отрисовка карточек с сервера

export function cardGet () {
 return fetch('https://nomoreparties.co/v1/' + `${idCohort}` + '/cards', {
      method: 'GET',
      headers: {
        authorization: ceyAuthorization,
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } 
      return Promise.reject(res.status);
    })
  }

  // Редактирование профиля

export function profileEditServer (name, about) {
 return fetch('https://nomoreparties.co/v1/' + `${idCohort}` + '/users/me', {
  method: 'PATCH',
  headers: {
    authorization: ceyAuthorization,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: `${name}`,
    about: `${about}`
  })
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  })
}

// Добавление карточки 

export function cardAddServer (name, link) {
  return fetch('https://nomoreparties.co/v1/' + `${idCohort}` + '/cards', {
      method: 'POST',
      headers: {
        authorization: ceyAuthorization,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `${name}`,
        link: `${link}`,
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
}

//Удаление карточки 

export function cardDeleteServer (idCard) {
  return fetch('https://nomoreparties.co/v1/' + `${idCohort}` + '/cards/' + `${idCard}`, {
  method: 'DELETE',
  headers: {
    authorization: ceyAuthorization,
    'Content-Type': 'application/json'
  },
})
.then((res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
})
}