import { User } from './models/User';

const user = new User({});

user.on('change', () => {
  console.log("First event");
});

user.on('change', () => {
  console.log("Second event");
});

user.trigger('change');