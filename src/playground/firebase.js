import firebase from 'firebase/app';
import 'firebase/database';
// import expenses from '../tests/fixtures/expenses';

const config = {
  apiKey: "AIzaSyDp-DcTwyRGd0D7DaFegTaRoAx-B1ZaLp0",
  authDomain: "expensify-8979e.firebaseapp.com",
  databaseURL: "https://expensify-8979e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "expensify-8979e",
  storageBucket: "expensify-8979e.appspot.com",
  messagingSenderId: "444065503855",
  appId: "1:444065503855:web:c9a88e3339402db1ebcb9a"
};

firebase.initializeApp(config);

const database = firebase.database();

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapShot) => {
//     expenses.push({
//       id: childSnapShot.key,
//       ...childSnapShot.val()
//     });
//   });

//   console.log(expenses);
// });

// expenses.forEach(expense => {
//   database.ref('expenses').push(expense);
// });

// database.ref('notes/-MPfxxRyE5Ud4FSOzFu5').remove();

// database.ref('notes').push({
//   title: 'To Do',
//   body: 'Pick my son from school'
// });

// database.ref().set({
//   name: 'Zakaiae El Mejdki',
//   age: 27,
//   stressLevel: 6,
//   job: {
//     title: 'Software Engineer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Tetouan',
//     country: 'Morocco'
//   }
// });

// database.ref('attributes/weight').set(95);

// database.ref('isSingle').remove();

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Facebook'
// });

// database.ref().once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch( e => {
//     console.log('Error fetching the data, ' + e);
//   });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with fetching the data, '+e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(27);
// }, 10500);

// database.ref().on('value', (snapshot) => {
//   const { name, job: { title, company } } = snapshot.val();
//   console.log(`${name} is a ${title} at ${company}`);
// });

// setTimeout(() => {
//   database.ref('job/title').set('Tech Lead');
// }, 4000);
